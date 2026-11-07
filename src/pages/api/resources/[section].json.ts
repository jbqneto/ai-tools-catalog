import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { resourceSections, inResourceSection } from '../../../lib/resource-sections';
import { catalogPolicy, catalogUrl, jsonHeaders, schemaVersion, toolIndex } from '../../../lib/agent-catalog';

export function getStaticPaths() {
  return resourceSections.map(section => ({
    params: { section: section.slug },
    props: { section },
  }));
}
export const GET: APIRoute = async ({ props }) => {
  const section = props.section;
  const items = (await getCollection('tools'))
    .filter(item => inResourceSection(item.data.resourceType, section))
    .sort((a,b) => a.data.name.localeCompare(b.data.name));
  return new Response(JSON.stringify({
    schemaVersion, kind: 'unranked-resource-section',
    title: section.label, description: section.description,
    section: section.slug, resourceTypes: section.types,
    homeUrl: catalogUrl(section.slug + '/'),
    catalogIndexUrl: catalogUrl('api/catalog.json'),
    policy: catalogPolicy, counts: { resources: items.length },
    resources: items.map(toolIndex),
  }, null, 2), { headers: jsonHeaders });
};
