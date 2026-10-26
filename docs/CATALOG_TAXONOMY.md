# Catalog Taxonomy and Duplicate Policy

The catalog is a **directory, not a ranking**. Every entry is identified by a real project, not by the social-media post where it was discovered.

Each catalog item has **three independent classification fields**:

1. **Category** — the subject or problem domain (e.g. Developer Tools, Media & Creative, Finance).
2. **Resource type** — what a visitor is actually getting (an application, a skill, a library, etc.).
3. **AI involvement** — whether the resource itself needs AI, can optionally use it, or simply supports AI workflows.

None of these fields is an indicator of quality or endorsement.

## Resource types

| Value | Meaning |
| --- | --- |
| `Application` | End-user desktop, web, self-hosted, or SaaS software. |
| `CLI / Developer Tool` | Developer-facing command-line utility, local integration, or automation tool. |
| `Agent Skill` | Task instructions and related scripts designed for AI agents. A skill is not necessarily a self-contained app. |
| `MCP Server` | An implementation exposing capabilities over Model Context Protocol. |
| `Library / Framework` | A software dependency or programming framework, rather than an end-user product. |
| `Directory / Collection` | A curated set of links, agent skills, components, or reusable resources. |
| `Learning Resource` | Workshop, reference material, tutorial repository, or teaching collection. |
| `Project / Demo` | A specific experimental implementation or demonstration, not primarily a reusable general-purpose tool. |

An item's **GitHub hosting does not make its resource type "repository"**. GitHub repositories can contain applications, libraries, skills, sample projects, or documentation. We classify the artifact, not where its source is stored.

## AI involvement

| Value | Meaning |
| --- | --- |
| `Core AI` | The advertised central feature relies on AI or ML model inference. This includes products that use third-party AI APIs. |
| `Optional AI` | The resource is usable without AI, but includes documented optional AI functionality. |
| `AI ecosystem` | Enables, organizes, controls, or integrates AI agents and models; the resource itself does not necessarily run inference. Most agent skills and MCP connectors belong here. |
| `No AI required` | No AI dependency or AI-specific capability is established for the project's principal use case. |
| `Unverified` | Evidence is insufficient to classify its actual AI involvement. |

**Important distinctions:**
- A game **built with AI assistance** is not automatically an AI-powered game.
- A tool **used by coding agents**, such as a browser automation bridge, does not automatically perform AI inference itself.
- A script published as an **agent skill** should be listed as an Agent Skill rather than a ready-to-run software product.
- **Open source** and **AI** are independent characteristics.
- A screenshot claiming commercial value, star counts, or profits is not evidence of those facts.

### Classification examples

| Project | Resource type | AI involvement |
| --- | --- | --- |
| GSAP | Library / Framework | No AI required |
| Playwright MCP | MCP Server | AI ecosystem |
| Claude Shorts | Agent Skill | AI ecosystem |
| Remotion | Library / Framework | No AI required |
| PaddleOCR | Library / Framework | Core AI |
| MarkItDown | CLI / Developer Tool | No AI required |
| Fincept Terminal | Application | Optional AI |
| Langflow | Application | Core AI |
| openGym | Application | No AI required |

This catalog can include non-AI resources if their relationship to the developer/creator ecosystem is useful and clearly labeled.

## Duplicate resolution: mandatory before adding an entry

When receiving links or screenshots:

1. **Extract the names and URLs** without treating promotional claims as fact.
2. **Identify the canonical official website and repository** from the project's own documentation.
3. **Search the existing catalog** by exact name, alternative name, repository owner/name, main website, and normalized slug.
4. **If already listed:** update the existing Markdown entry with any new verified information. Record alternative names in `aliases` when useful. Do **not** create a duplicate.
5. **If new:** create a single English entry with all three classifications, an official URL, a description, and limitations.
6. **If identity is uncertain:** label verification as unverified or hold for further review. Never guess a repository URL.
7. **Run `npm run validate:catalog` and `npm run build`** before merge. The automated check blocks duplicate identities and missing classification.

Canonical URL comparisons disregard the scheme, `www`, trailing slashes, and GitHub letter case. Name and alias comparisons disregard letter case, punctuation, and accents. An official source repository can contain distinct subprojects; those are allowed only when separately identified by their full documented subpaths.

**The validator catches exact normalized identity collisions; it does not replace editorial review of renamed, forked, or rebranded projects.** For those, inspect their READMEs and provenance manually.

## Example Markdown frontmatter

```yaml
---
name: "Example MCP Server"
summary: "A concrete description of its features and limitations."
category: "Developer Tools"
resourceType: "MCP Server"
aiInvolvement: "AI ecosystem"
url: "https://github.com/example/example-mcp"
repository: "https://github.com/example/example-mcp"
aliases: ["Example Connector"]
tags: ["MCP", "Developer tools"]
verification: "confirmed"
---
```

The `verification` field refers to identity/link verification, **not** a security audit or proof that marketing claims are true.

## Prompt Library remains distinct

Reusable prompt text and step-by-step workflows belong in `src/content/prompts/`. These are not automatically software projects. A prompt may link to an actual tool entry, but it should not duplicate that tool.
