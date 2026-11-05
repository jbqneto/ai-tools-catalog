import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonHeaders, promptDetail } from '../../../lib/agent-catalog';

export async function getStaticPaths() {
  return (await getCollection('prompts')).map(item => ({
    params: { slug: item.id },
    props: { item },
  }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(JSON.stringify(promptDetail(props.item), null, 2), { headers: jsonHeaders });
