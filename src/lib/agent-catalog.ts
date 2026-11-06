import type { CollectionEntry } from 'astro:content';

export const schemaVersion = '1.0.0';

/** Keep absolute URLs valid on GitHub Pages project sites. */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const origin = new URL(import.meta.env.SITE).origin;

export function catalogUrl(relativePath = ''): string {
  return new URL(base + relativePath.replace(/^\/+/, ''), origin).href;
}

export const catalogPolicy = {
  ordering: 'alphabetical-not-ranked',
  monetization: 'no-sponsored-placements',
  verificationMeaning: 'confirmed means the resource identity/source link was identified; not independently tested, security-audited, or endorsed',
  disclaimer: 'Project claims, licenses, pricing, integrations, and supported platforms can change. Verify primary documentation before adoption.',
} as const;

/** Extract editorial notes when older entries did not have structured metadata. */
function note(markdown: string | undefined, labels: string[]): string | null {
  if (!markdown) return null;
  for (const line of markdown.split(/\r?\n/)) {
    const normalized = line.replace(/\*\*/g, '').trim();
    for (const label of labels) {
      if (normalized.toLowerCase().startsWith(label.toLowerCase() + ':')) {
        return normalized.slice(label.length + 1).trim() || null;
      }
    }
  }
  return null;
}

export function toolIndex(tool: CollectionEntry<'tools'>) {
  const data = tool.data;
  return {
    id: tool.id,
    name: data.name,
    aliases: data.aliases,
    summary: data.summary,
    category: data.category,
    resourceType: data.resourceType,
    aiInvolvement: data.aiInvolvement,
    tags: data.tags,
    verification: data.verification,
    officialUrl: data.url,
    repositoryUrl: data.repository ?? null,
    profileUrl: catalogUrl('tools/' + encodeURIComponent(tool.id) + '/'),
    detailsJsonUrl: catalogUrl('api/tools/' + encodeURIComponent(tool.id) + '.json'),
    useCases: data.useCases,
    capabilities: data.capabilities,
    requirements: data.requirements,
    limitations: data.limitations,
    useCaseNotes: note(tool.body, ['Typical uses', 'Use cases', 'Use case', 'Practical uses']),
    limitationNotes: note(tool.body, ['Limitations', 'Caveats', 'Considerations', 'Constraints']),
  };
}

export function toolDetail(tool: CollectionEntry<'tools'>) {
  return {
    schemaVersion,
    kind: 'catalog-resource',
    ...toolIndex(tool),
    detailsMarkdown: tool.body ?? '',
    dataProvenance: {
      source: 'Community-curated Markdown catalog entry',
      claimsAreIndependentlyTested: false,
      verificationSemantics: catalogPolicy.verificationMeaning,
    },
  };
}

export function promptIndex(item: CollectionEntry<'prompts'>) {
  const data = item.data;
  return {
    id: item.id,
    title: data.title,
    summary: data.summary,
    kind: data.kind,
    category: data.category,
    tags: data.tags,
    sourceNote: data.sourceNote ?? null,
    relatedUrl: data.relatedUrl ?? null,
    profileUrl: catalogUrl('prompts/' + encodeURIComponent(item.id) + '/'),
    detailsJsonUrl: catalogUrl('api/prompts/' + encodeURIComponent(item.id) + '.json'),
  };
}

export function promptDetail(item: CollectionEntry<'prompts'>) {
  return {
    schemaVersion,
    kind: 'prompt-or-workflow',
    ...promptIndex(item),
    detailsMarkdown: item.body ?? '',
    disclaimer: 'Templates require review and adaptation, not blind execution.',
  };
}

export const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'public, max-age=3600',
} as const;
