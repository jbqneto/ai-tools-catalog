# AI Tools Catalog

A free, public, community-maintained collection of AI tools and related open-source projects.

**No ratings, paid placements, or rankings.** Just searchable descriptions, official links, and clear notes about what is verified.

## Website

Published website: https://jbqneto.github.io/ai-tools-catalog/

## Tech stack

- [Astro](https://astro.build/) static-site generation
- Markdown files in `src/content/tools/` as the catalog database
- Client-side search and independent filters for subject, resource type, and AI involvement, with no user tracking
- GitHub Actions for pull-request build checks and GitHub Pages deployment

## Run locally

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Then visit http://localhost:4321/ai-tools-catalog/.

Build the static site with `npm run build`.

## Deploy to GitHub Pages

1. Open **Settings → Pages → Build and deployment**.
2. Choose **GitHub Actions** as the source.
3. Merge changes into `main` (or trigger the **Deploy to GitHub Pages** workflow manually).
4. Follow deployment progress under **Actions**.

The workflow builds the website and publishes `dist/`. Every subsequent push to `main` redeploys automatically.

## Use the catalog with Claude, Codex, or another AI agent

The catalog publishes **static machine-readable feeds** so an agent can compare projects with the user's actual use case, stack, budget, licensing, and data-handling constraints. It is **not** a hosted AI recommendation service and does not access personal information.

- [For AI agents — ready-to-copy prompt](https://jbqneto.github.io/ai-tools-catalog/for-agents/)
- [llms.txt — discovery and agent instructions](https://jbqneto.github.io/ai-tools-catalog/llms.txt)
- [Catalog JSON — compact index](https://jbqneto.github.io/ai-tools-catalog/api/catalog.json)
- [Prompts & workflows JSON](https://jbqneto.github.io/ai-tools-catalog/api/prompts.json)
- [Technical guide and JSON field semantics](docs/AGENT_ACCESS.md)

Each catalog record links to a **detail JSON profile** with full Markdown. Agents should read the compact index first, then inspect only promising resources, verify significant claims against official sources, and recommend small reversible tests.

Structured metadata such as `useCases`, `capabilities`, `requirements`, and `limitations` is optional. If empty, it means **not assessed**, not "no limitations." These machine-readable exports are generated from existing Markdown entries, with no separate data to maintain.

`npm run build` validates duplicate identities, builds Astro, and checks the generated agent exports.

## Prompts & Workflows

The [Prompt Library](https://jbqneto.github.io/ai-tools-catalog/prompts/) is a separate collection for copy-ready prompts and workflow guides. **Entries in this collection are not software listings or proof of an installable skill.**

- Source files: `src/content/prompts/*.md`
- Listing page: `src/pages/prompts/index.astro`
- Detail pages: `src/pages/prompts/[slug].astro`
- Entries can include a source context note and a related verified project link.
- Templates are independently written in English, with editable placeholders and explicit caveats.
- Suggestions are welcome through the [Prompt / Workflow Issue template](https://github.com/jbqneto/ai-tools-catalog/issues/new?template=prompt-suggestion.yml).

## What counts as AI?

This is a reference catalog, **not** a list of products all claiming to be AI-powered. Each resource is classified along three separate dimensions:

- **Category** — subject domain such as Media & Creative or Developer Tools.
- **Resource type** — Application, CLI / Developer Tool, Agent Skill, MCP Server, Library / Framework, Directory / Collection, Learning Resource, or Project / Demo.
- **AI involvement** — Core AI, Optional AI, AI ecosystem, No AI required, or Unverified.

The UI lets readers filter by all three. For example, GSAP is a library with no required AI functionality; Playwright MCP is an MCP Server in the AI ecosystem. Neither should be mislabeled as an AI model.

For definitions, examples, and our strict duplicate-review process, see [Catalog Taxonomy and Duplicate Policy](docs/CATALOG_TAXONOMY.md).

## Duplicate prevention

Every new submission is compared with current entries by **name, aliases, official URL, and source repository**. Existing entries must be improved rather than duplicated. `npm run validate:catalog` runs automatically before the website build and blocks collisions or missing classifications. Editorial review still resolves renamed projects, forks, and distinct monorepo subprojects.

## General open-source apps

A small **Open Source Apps** category holds community-suggested applications that do **not** claim AI features. These are labeled separately from AI-specific integrations and developer agents to avoid misrepresenting their capabilities.

## Browser games (separate collection)

The site also keeps a small, separate list of [browser game links](https://jbqneto.github.io/ai-tools-catalog/browser-games/). These are **not categorized or counted as AI tools**.

- Source: a community-shared image listing 21 game-related URLs (October 2026).
- Data: `src/data/browser-games.json`. Page: `src/pages/browser-games.astro`.
- `landing-reviewed`: destination page or project documentation was inspected; gameplay, security, and licensing are **not** verified.
- `unverified`: the destination or its behavior could not be independently confirmed.
- `mismatch`: the current destination's identity differs from the name in the source image.
- The `ut.pieter.com` project is **Urban Terror**, although the source image called it Unreal Tournament.
- External fan projects can change, require legitimate game assets, or disappear. No games are hosted by this repository.

## Add or correct a tool

Please read [CONTRIBUTING.md](CONTRIBUTING.md). You can suggest a tool using a GitHub Issue, or add/edit a Markdown entry via a Pull Request.

## Editorial policy

- Entries are **not** endorsements.
- No personalization or private project data belongs in public entries.
- Unverified links and early-stage tools should be clearly marked.
- Do not copy entire articles, screenshots, or project descriptions without permission.
- Product ownership and names remain with their respective owners.

## License

This repository's original code and catalog descriptions are available under the [MIT License](LICENSE). Trademarks, linked websites, and third-party software retain their own licenses.

## Navigation and typed public indexes

The following pages are **views over one canonical set of Markdown records**. They do not duplicate entries.

| Section | Page | JSON index |
| --- | --- | --- |
| Apps & Tools | [Apps](https://jbqneto.github.io/ai-tools-catalog/apps/) | [JSON](https://jbqneto.github.io/ai-tools-catalog/api/resources/apps.json) |
| Libraries & Frameworks | [Libraries](https://jbqneto.github.io/ai-tools-catalog/libraries/) | [JSON](https://jbqneto.github.io/ai-tools-catalog/api/resources/libraries.json) |
| Agent Skills | [Skills](https://jbqneto.github.io/ai-tools-catalog/skills/) | [JSON](https://jbqneto.github.io/ai-tools-catalog/api/resources/skills.json) |
| MCP Servers | [MCPs](https://jbqneto.github.io/ai-tools-catalog/mcps/) | [JSON](https://jbqneto.github.io/ai-tools-catalog/api/resources/mcps.json) |
| Prompts & Workflows | [Prompts](https://jbqneto.github.io/ai-tools-catalog/prompts/) | [JSON](https://jbqneto.github.io/ai-tools-catalog/api/prompts.json) |

The all-resource `api/catalog.json` advertises these subsets through its additive `sections` property. Skill directories and MCP registries stay classified as directories, not installable individual Skills or MCP Servers. AI involvement is an independent facet, not a synonym for the item type.
