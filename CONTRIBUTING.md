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

`verification` must be `confirmed` (the official project/repository was identified) or `unverified` (identity or URL needs confirmation). It **does not** mean functionality or security has been audited.

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
