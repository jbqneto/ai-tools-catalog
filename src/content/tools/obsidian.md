---
name: "Obsidian"
summary: "A local-first Markdown knowledge-base and note-taking application with backlinks, graphs, and plugins for organizing reference material and agent-produced notes."
category: "Learning & Research"
url: "https://obsidian.md"
tags: ["Markdown","Knowledge management","Notes","Local-first","Plugins","Documentation"]
resourceType: "Application"
aiInvolvement: "No AI required"
verification: "confirmed"
aliases: ["Obsidian Notes"]
useCases: ["Maintain a human-editable Markdown vault of technical decisions and reports","Organize research notes with links and reusable templates","Share selected workspace notes with a coding agent through a controlled filesystem boundary"]
capabilities: ["Markdown notes stored as ordinary local files","Backlinks, search and graph-based navigation","Community plugins and optional paid synchronization"]
requirements: ["Desktop or mobile application and a Markdown vault","A deliberate backup and sync strategy","Permission boundaries when agents can read or modify vault files"]
limitations: ["Obsidian is proprietary software, not open-source, despite the public plugin/release repository","AI features require separate extensions or integrations; no AI is required for core note-taking","Local files can still be sent to remote AI models or sync services depending on integrations and settings"]
---

## What it does

[Obsidian](https://obsidian.md) is a local-first Markdown notes application. A vault is a directory of Markdown files that may also include images and attachments. Backlinks, graph views and optional extensions make it useful for maintaining research, decisions and recurring project documentation.

## Useful workflows

- Keep a structured `raw/`, `wiki/`, and `outputs/` set of directories for captured inputs, synthesized notes and agent deliverables.
- Maintain project documentation that is readable both by people and coding agents with filesystem access.
- Use templates and backlinks for a searchable knowledge base without building a database-backed CMS.

## Important classifications and cautions

Obsidian **is not an AI application by default and is not open-source software**. Its [public releases repository](https://github.com/obsidianmd/obsidian-releases) contains releases, plugins and community-theme indices—not Obsidian source code. AI integrations are optional and should be evaluated separately.

A local Markdown vault does not automatically make an agent's workflow private: agent permissions, any remote LLM calls, cloud sync and plugins are independent considerations. Use backups, read-only access where possible and avoid writing secrets into shared notes.

**Official sources:** [Obsidian](https://obsidian.md), [project release repository](https://github.com/obsidianmd/obsidian-releases).
