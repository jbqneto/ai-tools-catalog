#!/usr/bin/env node
/**
 * Validate catalog frontmatter and reject duplicate resource identities.
 *
 * Checks:
 *   - each resource has explicit resourceType and aiInvolvement metadata
 *   - names and aliases do not collide (case/diacritics/punctuation insensitive)
 *   - official URLs and source repository URLs do not identify the same item twice
 *   - related subprojects within a monorepo are allowed when their official
 *     URLs point to distinct GitHub subdirectories
 *
 * Designed to run locally and in CI with no additional dependencies.
 */
import { readdir, readFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';

const directory = resolve(process.cwd(), 'src/content/tools');
const failures = [];
const byName = new Map();
const byLink = new Map();

const fold = (value) =>
  String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

function scalar(frontmatter, key) {
  const m = frontmatter.match(new RegExp('^' + key + ':\\s*(.+)\\s*$', 'm'));
  if (!m) return undefined;
  const value = m[1].trim();
  if (value.startsWith('"')) {
    try { return JSON.parse(value); } catch { return undefined; }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1);
  return value;
}

function stringArray(frontmatter, key, file) {
  const raw = scalar(frontmatter, key);
  if (raw === undefined) return [];
  try {
    const value = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (Array.isArray(value) && value.every(x => typeof x === 'string')) return value;
  } catch {
    // Explicitly require a JSON-style YAML inline array for stable validation.
  }
  failures.push(`${file}: ${key} must be a JSON-style list of quoted strings`);
  return [];
}

function normalizeUrl(source, file) {
  if (!source) return undefined;
  try {
    const uri = new URL(source);
    if (!['http:', 'https:'].includes(uri.protocol)) throw Error('Invalid protocol');
    const host = uri.hostname.toLowerCase().replace(/^www\./, '');
    const path = decodeURIComponent(uri.pathname).replace(/\/+$/, '');
    const canonicalPath = host === 'github.com' ? path.toLowerCase() : path;
    return host + canonicalPath;
  } catch {
    failures.push(`${file}: invalid URL: ${source}`);
    return undefined;
  }
}

function isGithubSubproject(primary) {
  return primary && /^github\.com\/[^/]+\/[^/]+\/(tree|blob)\/[^/]+\//.test(primary);
}

function register(map, key, resource, kind) {
  if (!key) return;
  const previous = map.get(key);
  if (previous && previous.file !== resource.file) {
    // A distinct skill in the same repository is not automatically a duplicate.
    // Two subprojects must have different official paths, though.
    if (kind === 'repository' &&
        previous.primary !== resource.primary &&
        (isGithubSubproject(previous.primary) || isGithubSubproject(resource.primary))) {
      return;
    }
    failures.push(`Duplicate ${kind}: ${resource.file} conflicts with ${previous.file} (${key})`);
  } else {
    map.set(key, resource);
  }
}

const files = (await readdir(directory)).filter(name => name.endsWith('.md')).sort();
for (const filename of files) {
  const file = basename(filename);
  const content = await readFile(resolve(directory, file), 'utf8');
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) {
    failures.push(`${file}: missing Markdown frontmatter`);
    continue;
  }
  const data = frontmatter[1];
  const name = scalar(data, 'name');
  const type = scalar(data, 'resourceType');
  const ai = scalar(data, 'aiInvolvement');
  const url = scalar(data, 'url');
  const repository = scalar(data, 'repository');
  const aliases = stringArray(data, 'aliases', file);
  if (!name || !url) failures.push(`${file}: requires name and official url`);
  if (!type || !ai) failures.push(`${file}: requires resourceType and aiInvolvement`);

  const primary = normalizeUrl(url, file);
  const repo = normalizeUrl(repository, file);
  const resource = { file, primary };

  for (const nameVariant of [name, ...aliases]) {
    register(byName, fold(nameVariant || ''), resource, 'name/alias');
  }

  register(byLink, primary, resource, 'official URL');
  if (repo && repo !== primary) register(byLink, repo, resource, 'repository');
}

if (failures.length) {
  console.error('Catalog validation failed:');
  for (const message of failures) console.error('  - ' + message);
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} resources: explicit classifications and no duplicate identities.\n`);
}
