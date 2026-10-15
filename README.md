# AI Tools Catalog

A free, public, community-maintained collection of AI tools and related open-source projects.

**No ratings, paid placements, or rankings.** Just searchable descriptions, official links, and clear notes about what is verified.

## Website

Once GitHub Pages is enabled: https://jbqneto.github.io/ai-tools-catalog/

## Tech stack

- [Astro](https://astro.build/) static-site generation
- Markdown files in `src/content/tools/` as the catalog database
- Client-side search and category filters, with no user tracking
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
