import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { catalogUrl } from '../lib/agent-catalog';
import { resourceSections } from '../lib/resource-sections';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const [tools, prompts] = await Promise.all([getCollection('tools'), getCollection('prompts')]);
  const urls = [
    catalogUrl(),
    catalogUrl('for-agents/'),
    catalogUrl('contribute/'),
    catalogUrl('prompts/'),
    ...resourceSections.map(s => catalogUrl(s.slug + '/')),
    catalogUrl('browser-games/'),
    ...tools.map(t => catalogUrl('tools/' + encodeURIComponent(t.id) + '/')),
    ...prompts.map(p => catalogUrl('prompts/' + encodeURIComponent(p.id) + '/')),
  ];
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(url => '  <url><loc>' + xmlEscape(url) + '</loc></url>').join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
