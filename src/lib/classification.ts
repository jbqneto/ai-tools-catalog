/**
 * Legacy catalog classifications, maintained while existing Markdown entries
 * are gradually migrated to explicit frontmatter. New entries MUST declare
 * resourceType and aiRelationship directly in their Markdown frontmatter.
 *
 * This is a taxonomy, not a claim that the project is secure, high-quality,
 * endorsed, or empirically benchmarked.
 */
export type ResourceType =
  | 'Application'
  | 'Agent skill'
  | 'MCP server'
  | 'Library & framework'
  | 'Developer utility'
  | 'Directory & collection'
  | 'Reference project'
  | 'AI model';

export type AiRelationship = 'AI-powered' | 'AI-integrated' | 'AI ecosystem' | 'Not AI-specific';

const groupedTypes: Record<ResourceType, string[]> = {
  'Application': 'autoclip autosubs cadcraft changedetection clodfarm craft-launcher deckcraft designcraft effectcraft filmcraft fincept-terminal gridcraft jev-trade jev-trader langflow lightcraft open-gym openchatcut openmontage pdfcraft photocraft soundcraft vectorcraft wangp wordcraft'.split(' '),
  'Agent skill': 'anthropic-skill-creator claude-ads claude-code-video-toolkit claude-motion-design claude-shorts claude-video-vision claude-watch clipify-skill diagram-design motion-broll motion-skills omni-captions-skills remotion-agent-skills superpowers video-shotcraft watch-video-skill youtube-agent-skill'.split(' '),
  'MCP server': 'desktop-commander-mcp playwright-mcp sequential-thinking-mcp context7'.split(' '),
  'Library & framework': 'gsap hyperframes paddleocr react-three-fiber remotion scrapling'.split(' '),
  'Developer utility': 'agent-reach camofox-browser ccusage markitdown skills-manage trail-code'.split(' '),
  'Directory & collection': 'awesome-claude-skills claude-code-templates claude-marketplace smithery skills-for-real-engineers'.split(' '),
  'Reference project': 'anthropic-cwc-workshops rotten-souls'.split(' '),
  'AI model': [],
};

const groupedRelationships: Record<Exclude<AiRelationship, 'AI ecosystem'>, string[]> = {
  'AI-powered': 'autoclip autosubs jev-trade jev-trader paddleocr wangp'.split(' '),
  'AI-integrated': 'fincept-terminal openchatcut openmontage rotten-souls'.split(' '),
  'Not AI-specific': 'cadcraft changedetection craft-launcher deckcraft designcraft effectcraft filmcraft gridcraft lightcraft open-gym pdfcraft photocraft soundcraft vectorcraft wordcraft gsap hyperframes react-three-fiber remotion scrapling'.split(' '),
};

const legacyTypes = new Map<string, ResourceType>();
const legacyRelationships = new Map<string, AiRelationship>();

for (const [type, slugs] of Object.entries(groupedTypes) as [ResourceType, string[]][]) {
  for (const slug of slugs) {
    if (legacyTypes.has(slug)) throw new Error('Duplicate resource type classification: ' + slug);
    legacyTypes.set(slug, type);
  }
}
for (const [relationship, slugs] of Object.entries(groupedRelationships) as [AiRelationship, string[]][]) {
  for (const slug of slugs) {
    if (!legacyTypes.has(slug)) throw new Error('Unknown legacy entry in AI relationship map: ' + slug);
    if (legacyRelationships.has(slug)) throw new Error('Duplicate AI relationship classification: ' + slug);
    legacyRelationships.set(slug, relationship);
  }
}

export function classifyTool(tool: { id: string; data: { resourceType?: ResourceType; aiRelationship?: AiRelationship } }) {
  const legacyType = legacyTypes.get(tool.id);
  const resourceType = tool.data.resourceType ?? legacyType;
  const aiRelationship = tool.data.aiRelationship ?? legacyRelationships.get(tool.id) ?? (legacyType ? 'AI ecosystem' : undefined);
  if (!resourceType || !aiRelationship) {
    throw new Error('Missing resourceType or aiRelationship for catalog entry: ' + tool.id);
  }
  return { resourceType, aiRelationship };
}
