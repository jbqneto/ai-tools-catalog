---
name: "Obsidian"
summary: "A local-first Markdown knowledge-management application for linked notes and project documentation that can support, but does not itself provide, an AI agent memory system."
category: "Learning & Research"
url: "https://obsidian.md/"
tags: ["Markdown","Knowledge management","Local first","Notes","Documentation","Agent context"]
resourceType: "Application"
aiInvolvement: "No AI required"
verification: "confirmed"
aliases: ["Obsidian Notes"]
useCases: ["Organize project research, decisions and documentation in local Markdown files","Keep a human-readable source of context that can be shared with authorized agents","Build a private wiki with linked notes and manually curated working knowledge"]
capabilities: ["Local plain-text Markdown vaults and linked documents","Graph and search views, plugins and theme customization","Optional paid sync and publishing services"]
requirements: ["Desktop or mobile application and a local Markdown vault","Explicit permission and file-access tooling for AI assistants to retrieve notes","Backups and access controls for private or sensitive documents"]
limitations: ["Proprietary application; a public GitHub releases repository is not its source code","Neither long-term agent memory nor automatic RAG retrieval is included merely by installing Obsidian","Cloud sync, community plugins and AI integrations have separate privacy and security implications"]
---


## Overview

[Obsidian](https://obsidian.md/) is a local-first application for creating linked Markdown notes. It can be useful as a personal or team reference library for decisions, procedures, source material and research.

## Useful for AI-assisted workflows

- Store approved project notes and decisions in Markdown format.
- Maintain a `raw/`, `wiki/`, and `outputs/` folder convention if it matches the team's needs.
- Let compatible agents read specifically authorized vault files or an indexed export.

**An Obsidian vault is not automatically agent memory.** Agent-side retrieval, permissions, indexing, synchronization and change tracking must be designed or configured separately. An agent should not silently treat every saved note as authoritative.

## AI and license classification

Obsidian itself does **not require AI** and is **not open-source software**. Its application code is proprietary, even though many community plugins and its public [release repository](https://github.com/obsidianmd/obsidian-releases) are visible.

According to the [official license overview](https://obsidian.md/license), Obsidian is free for personal, non-profit **and commercial** use; paid Sync, Publish, and supporter licenses are optional. Check their current terms for your chosen setup.

## Related catalog resources

Consider pairing a Markdown vault with version control and an appropriately permissioned retrieval/indexing workflow. Keep confidential information out of public repositories, and review plugins before providing agents with access.

**Official sources:** [Obsidian](https://obsidian.md/) · [License](https://obsidian.md/license).
