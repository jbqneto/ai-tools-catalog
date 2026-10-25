# Contributing to AI Tools Catalog

Thank you for helping keep this directory useful.

## Quickest path: suggest a tool

Open a [tool suggestion](https://github.com/jbqneto/ai-tools-catalog/issues/new?template=tool-suggestion.yml). Include the project's official homepage or repository, what it does, and why it belongs in the catalog.

## Add a Markdown entry

1. Fork this repository and create a branch.
2. Create `src/content/tools/tool-slug.md` using lowercase ASCII letters, numbers, and hyphens.
3. Use the frontmatter schema shown below.
4. Keep the body descriptive and fact-based. Explain use cases, limitations, and caveats.
5. Run `npm install && npm run build` to validate the catalog.
6. Open a Pull Request. A maintainer reviews before merge.

Example:

```md
---
name: "Example Tool"
summary: "An accurate description of what this project does, without unverifiable marketing claims."
category: "Developer Tools"
url: "https://example.org"
repository: "https://github.com/example/example"
tags: ["CLI", "Open source"]
resourceType: "Developer utility"
aiRelationship: "Not AI-specific"
verification: "confirmed"
---

Example Tool provides a useful workflow for developers.

Refer to the official documentation for supported platforms and licensing details.
```

Accepted categories:
- Agents & Automation
- Developer Tools
- Data & Documents
- Web & Monitoring
- Media & Creative
- Learning & Research
- Finance
- 3D & Interactive
- Open Source Apps (general self-hosted or open-source utilities; do not label them AI-powered unless documented)

**Resource type** describes what the item **is**, independently of its area of use:

- `Application` — user-facing software
- `Agent skill` — reusable instructions, commands, or skill packs for agents
- `MCP server` — a Model Context Protocol server or connector
- `Library & framework` — an SDK, reusable library, or development framework
- `Developer utility` — command-line tools, automation utilities, and developer helpers
- `Directory & collection` — curated catalogs, marketplaces, or resource indexes
- `Reference project` — demonstrations, experiments, workshop samples, and sample projects
- `AI model` — a published model or model package

**AI relationship** is a separate factual classification:

- `AI-powered` — model inference is central to core functionality
- `AI-integrated` — software includes optional or integrated AI features
- `AI ecosystem` — infrastructure, agent skills, and related tools designed to support AI workflows
- `Not AI-specific` — general software or reference that does not require AI

Avoid labeling a library as "AI-powered" merely because an AI coding assistant can use it. Prefer evidence from maintainers' documentation.

**Duplicate prevention:** search the existing catalog for names, spelling variations, aliases, official URLs, and source repositories before submitting a new entry. If a resource already exists, submit a correction or update to its existing file instead. A build-time duplicate URL check protects against exact/canonical URL repeats but does not replace manual review of rebrands and forks.

`verification` must be `confirmed` (the official project/repository was identified) or `unverified` (identity or URL needs confirmation). It **does not** mean functionality or security has been audited.

## Submit a prompt or workflow guide

Use the [prompt suggestion form](https://github.com/jbqneto/ai-tools-catalog/issues/new?template=prompt-suggestion.yml) if you do not want to modify code.

For a Pull Request, create a Markdown file under `src/content/prompts/` with this schema:

````md
---
title: "Minimal App Presentation"
summary: "A copy-ready template for a 30-second animated product presentation."
kind: "prompt"
category: "App Promotion"
tags: ["GSAP", "Product video"]
sourceNote: "Original idea inspired by a public reference; rewritten independently."
relatedUrl: "https://gsap.com/"
---

## Reusable prompt

```text
Create a 30-second product animation for [APP_NAME]...
```
````

Supported `kind` values: `prompt`, `workflow`.
Supported `category` values: `App Promotion`, `Motion Design`, `Video Production`, `Video Editing`.

- Use **English** everywhere.
- Rewrite and adapt ideas in your own words; do not copy whole articles or creators' text without permission.
- A named slash command from a social post is **not** a verified installable skill without a confirmed source.
- Keep placeholders such as `[APP_NAME]` rather than adding personal credentials.
- Identify licensing, privacy, platform, and export limitations where relevant.
- Include real, official project links only when verified.

## Editorial rules

- No rankings, star ratings, affiliate links, or sponsored placements.
- Official project links are strongly preferred. Never invent a URL.
- Avoid duplicated entries, personal setup notes, confidential information, and unverifiable monetary claims.
- Do not claim a tool is safe, profitable, free, open-source, or production-ready without checking its current documentation.
- Do not upload screenshots or copyrighted material without permission.
- Respect maintainers' licenses and trademarks.
- For corrections, link to reliable evidence whenever possible.

## Review and publication

Pull Requests are checked by the build workflow. Maintainers verify links, relevance, and duplicate entries before merging. When merged into `main`, the site is published via GitHub Pages.
