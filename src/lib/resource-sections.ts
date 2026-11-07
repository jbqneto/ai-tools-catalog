/** Navigation subsets: canonical resources stay in src/content/tools. */
export interface ResourceSection {
  slug: string;
  label: string;
  title: string;
  description: string;
  types: string[];
}
export const resourceSections: ResourceSection[] = [
  { slug: 'apps', label: 'Apps & Tools', title: 'Applications and developer tools', description: 'Runnable applications, CLI utilities and projects. Each entry separately describes whether AI is required.', types: ['Application','CLI / Developer Tool','Project / Demo'] },
  { slug: 'libraries', label: 'Libraries', title: 'Libraries and frameworks', description: 'Reusable programming libraries and frameworks. Not necessarily AI products.', types: ['Library / Framework'] },
  { slug: 'skills', label: 'Agent Skills', title: 'Skills for coding and research agents', description: 'Installable agent instructions and resources, not standalone applications or MCP servers.', types: ['Agent Skill'] },
  { slug: 'mcps', label: 'MCP Servers', title: 'Model Context Protocol servers', description: 'MCP tool and context integrations for compatible AI agents. Review permissions before installation.', types: ['MCP Server'] },
];
export function inResourceSection(type: string, section: ResourceSection): boolean { return section.types.includes(type); }
