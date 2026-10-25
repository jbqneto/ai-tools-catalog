/**
 * Check canonical URLs and near-identical names in catalog entries.
 *
 * This catches exact/canonical duplicates, not aliases, rebrands, mirrors,
 * forks, or different official sites for the same underlying project.
 * Human review is still required before accepting any new listing.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const directory = new URL('../src/content/tools/', import.meta.url);
const files = (await readdir(directory)).filter(name => name.endsWith('.md')).sort();
const seenUrls = new Map();
const seenNames = new Map();
const errors = [];

function field(frontmatter, key) {
  const match = frontmatter.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'));
  if (!match) return undefined;
  const raw = match[1].trim();
  if (raw.startsWith('"')) {
    try { return JSON.parse(raw); } catch { return raw; }
  }
  return raw.replace(/^['"]|['"]$/g, '');
}

function canonicalUrl(input) {
  if (!input) return null;
  try {
    const value = new URL(input.trim());
    const host = value.hostname.toLowerCase().replace(/^www\./, '');
    const path = decodeURIComponent(value.pathname).replace(/\/+$/, '').toLowerCase();
    return host + (path === '/' ? '' : path);
  } catch {
    return null;
  }
}

function register(map, key, file, kind) {
  if (!key) return;
  const prior = map.get(key);
  if (prior && prior !== file) errors.push(kind + ' duplicate: ' + key + ' (' + prior + ' and ' + file + ')');
  else map.set(key, file);
}

for (const filename of files) {
  const file = join(directory.pathname, filename);
  const content = await readFile(file, 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) { errors.push('Missing YAML frontmatter: ' + filename); continue; }
  const fm = match[1];
  const name = field(fm, 'name');
  const url = field(fm, 'url');
  const repository = field(fm, 'repository');
  const slug = filename.replace(/\.md$/, '');
  if (!name || !url) { errors.push('Missing name or official URL: ' + filename); continue; }
  const normalizedName = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
  register(seenNames, normalizedName, slug, 'Name');
  for (const candidate of [url, repository]) {
    const canonical = canonicalUrl(candidate);
    if (!canonical) errors.push('Invalid URL: ' + filename + ' ' + candidate);
    else register(seenUrls, canonical, slug, 'URL');
  }
}

if (errors.length) {
  console.error('Catalog duplicate/metadata check failed:\n' + errors.map(e => '- ' + e).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Checked ' + files.length + ' catalog entries: no identical names or canonical URLs.');
}
