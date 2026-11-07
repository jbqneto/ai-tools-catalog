#!/usr/bin/env node
/** Validate static agent-facing exports after Astro builds, using only Node APIs. */
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const base = 'https://jbqneto.github.io/ai-tools-catalog/';
async function readJson(path) {
  const text = await readFile(join(dist, path), 'utf8');
  return JSON.parse(text);
}
function staticPathFromUrl(href) {
  const url = new URL(href);
  assert.equal(url.origin, new URL(base).origin, 'wrong agent feed origin');
  assert.ok(url.href.startsWith(base), 'URL missing GitHub Pages project prefix: ' + href);
  const relative = decodeURIComponent(url.pathname.slice(new URL(base).pathname.length));
  assert.ok(!relative.includes('..'), 'unsafe file path');
  return relative;
}
const index = await readJson('api/catalog.json');
assert.equal(index.schemaVersion, '1.0.0');
assert.equal(index.kind, 'unranked-resource-index');
assert.ok(index.resources.length > 0, 'empty resources');
assert.equal(index.counts.resources, index.resources.length);
const ids = new Set();
for (const tool of index.resources) {
  assert.ok(tool.id && tool.name && tool.summary, 'incomplete resource');
  assert.ok(tool.resourceType && tool.aiInvolvement && tool.category, 'missing classification');
  assert.ok(!ids.has(tool.id), 'duplicate resource id: ' + tool.id);
  ids.add(tool.id);
  assert.ok(Array.isArray(tool.useCases) && Array.isArray(tool.limitations), 'missing research arrays');
  const detail = await readJson(staticPathFromUrl(tool.detailsJsonUrl));
  assert.equal(detail.id, tool.id, 'resource mismatch');
  assert.ok(typeof detail.detailsMarkdown === 'string' && detail.detailsMarkdown.trim().length > 0, 'missing full description');
  assert.ok(detail.officialUrl, 'missing official project link');
  const profile = staticPathFromUrl(tool.profileUrl);
  await stat(join(dist, profile, 'index.html'));
}
assert.ok(Array.isArray(index.sections), 'catalog lacks section links');
for (const section of index.sections.filter(item => item.id !== 'prompts')) {
  const subset = await readJson('api/resources/' + section.id + '.json');
  assert.equal(subset.kind, 'unranked-resource-section');
  assert.equal(subset.counts.resources, subset.resources.length);
  assert.equal(section.count, subset.resources.length);
  assert.deepEqual(
    subset.resources.map(item => item.id).sort(),
    index.resources.filter(item => section.resourceTypes.includes(item.resourceType)).map(item => item.id).sort(),
    'typed view must use canonical resource records'
  );
  await stat(join(dist, section.id, 'index.html'));
}
const prompts = await readJson('api/prompts.json');
assert.equal(prompts.schemaVersion, index.schemaVersion);
assert.equal(prompts.counts.references, prompts.resources.length);
for (const item of prompts.resources) {
  const detail = await readJson(staticPathFromUrl(item.detailsJsonUrl));
  assert.equal(detail.id, item.id);
  assert.ok(typeof detail.detailsMarkdown === 'string' && detail.detailsMarkdown.trim().length > 0);
}
const llms = await readFile(join(dist, 'llms.txt'), 'utf8');
assert.ok(llms.includes(index.llmsTxtUrl), 'llms text should expose its own discovery URL');
assert.ok(llms.includes(base + 'api/catalog.json'), 'llms missing JSON catalog link');
assert.ok(llms.includes(base + 'api/prompts.json'), 'llms missing prompts link');
for (const section of index.sections.filter(item => item.id !== 'prompts')) {
  assert.ok(llms.includes(section.indexUrl), 'llms missing typed index: ' + section.id);
}
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
assert.ok(sitemap.includes(base + 'for-agents/'), 'sitemap lacks agent page');
assert.ok(sitemap.includes(base + 'tools/'), 'sitemap lacks tool pages');
for (const section of index.sections.filter(item => item.id !== 'prompts')) {
  assert.ok(sitemap.includes(base + section.id + '/'), 'missing sitemap page ' + section.id);
}
await stat(join(dist, 'for-agents', 'index.html'));
console.log('Validated ' + ids.size + ' agent-readable tools and ' +
  prompts.resources.length + ' prompt/workflow profiles, discovery and sitemap.');
