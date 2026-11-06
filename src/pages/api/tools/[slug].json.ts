import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonHeaders, toolDetail } from '../../../lib/agent-catalog';

export async function getStaticPaths() {
  return (await getCollection('tools')).map(tool => ({
    params: { slug: tool.id },
    props: { tool },
  }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(JSON.stringify(toolDetail(props.tool), null, 2), { headers: jsonHeaders });
