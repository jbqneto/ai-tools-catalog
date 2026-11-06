import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { catalogUrl, jsonHeaders, promptIndex, schemaVersion } from '../../lib/agent-catalog';

export const GET: APIRoute = async () => {
  const items = (await getCollection('prompts')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  return new Response(JSON.stringify({
    schemaVersion,
    kind: 'unranked-prompt-workflow-index',
    title: 'AI Tools Catalog — Prompts & Workflows',
    description: 'Prompts and workflows are reference texts, not necessarily installable tools.',
    homeUrl: catalogUrl('prompts/'),
    guideUrl: catalogUrl('for-agents/'),
    counts: { references: items.length },
    resources: items.map(promptIndex),
  }, null, 2), { headers: jsonHeaders });
};
