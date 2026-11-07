import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { catalogPolicy, catalogUrl, jsonHeaders, schemaVersion, toolIndex } from '../../lib/agent-catalog';
import { resourceSections, inResourceSection } from '../../lib/resource-sections';

export const GET: APIRoute = async () => {
  const tools = (await getCollection('tools')).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const categories = [...new Set(tools.map(tool => tool.data.category))].sort();
  const resourceTypes = [...new Set(tools.map(tool => tool.data.resourceType))].sort();
  const aiInvolvementLevels = [...new Set(tools.map(tool => tool.data.aiInvolvement))].sort();
  return new Response(JSON.stringify({
    schemaVersion,
    kind: 'unranked-resource-index',
    title: 'AI Tools Catalog',
    description: 'Public, community-curated tools, frameworks, applications, and agent skills. Not every item uses AI.',
    homeUrl: catalogUrl(),
    agentGuideUrl: catalogUrl('for-agents/'),
    llmsTxtUrl: catalogUrl('llms.txt'),
    promptIndexUrl: catalogUrl('api/prompts.json'),
    sections: [
      ...resourceSections.map(section => ({
        id: section.slug,
        title: section.label,
        resourceTypes: section.types,
        count: tools.filter(item => inResourceSection(item.data.resourceType, section)).length,
        pageUrl: catalogUrl(section.slug + '/'),
        indexUrl: catalogUrl('api/resources/' + section.slug + '.json'),
      })),
      { id: 'prompts', title: 'Prompts & Workflows', resourceTypes: [], pageUrl: catalogUrl('prompts/'), indexUrl: catalogUrl('api/prompts.json') },
    ],
    policy: catalogPolicy,
    counts: { resources: tools.length },
    facets: { categories, resourceTypes, aiInvolvementLevels },
    resources: tools.map(toolIndex),
  }, null, 2), { headers: jsonHeaders });
};
