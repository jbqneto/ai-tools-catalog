---
name: "Google Maps Scraper (gosom)"
summary: "Open-source Go-based Google Maps scraping software with a command-line interface, self-hosted web UI, REST API, and an optional Agent Skill."
category: "Web & Monitoring"
url: "https://github.com/gosom/google-maps-scraper"
repository: "https://github.com/gosom/google-maps-scraper"
tags: ["Local business research","Web scraping","Go","CLI","REST API","Agent Skill"]
resourceType: "CLI / Developer Tool"
aiInvolvement: "Optional AI"
verification: "confirmed"
aliases: ["gosom/google-maps-scraper","Google Maps Scraper"]
useCases: ["Research publicly listed local businesses where collection is permitted","Explore an agent-assisted lead discovery workflow using an isolated small test","Assess programmatic export, review, and deduplication of business records"]
capabilities: ["Go CLI, optional browser UI and local REST API for scraping jobs","Structured CSV or JSON output for available business fields","Optional agent skill for guiding search and local execution"]
requirements: ["Go executable or a supported container runtime for the core scraper","Node.js and Docker for the documented agent-skill workflow","Review of Google Maps terms, GDPR and collection rights before use"]
limitations: ["Google Maps Platform terms in the EEA expressly restrict extracting or scraping Maps Content for use outside the services; an MIT license does not override upstream rights","Automated collection can trigger blocking, incomplete output, and privacy or data-protection obligations","Leads are not verified business relationships; public emails must not be treated as marketing consent"]
---


## Overview

[Google Maps Scraper](https://github.com/gosom/google-maps-scraper) is an open-source Go project for extracting business listing information, with a CLI, optional web interface and REST API. The repository also contains an **Agent Skill** that guides compatible AI coding agents through configuring a local collection job.

**This record describes one tool with an optional skill, not two independent products.** It should not be added again under a second name simply because a screenshot shows the skill installation command.

## Useful for

- Evaluating business discovery and data-enrichment workflows.
- Testing what a local scraping tool can output in CSV or JSON.
- Exploring an agent-assisted workflow with controlled scope and manual approval.

## Requirements and cautions

- The core CLI can be built or run using the project's documented binaries or container approach.
- The optional Agent Skill uses the documented `npx skills add gosom/google-maps-scraper` flow, and expects Docker and Node.js in its supported setup.
- **Important legal and contractual caution:** Google Maps Platform EEA Terms specifically prohibit scraping or exporting Google Maps Content outside the services, including bulk downloads and saved names, addresses, or reviews. Other Google product terms may also apply. Evaluate authorization and permitted alternatives before collecting data, especially for commercial use: [Google Maps Platform EEA Terms](https://cloud.google.com/terms/maps-platform/eea).
- Contact details and other personal information may require a GDPR legal basis; a public listing does **not** automatically authorize marketing outreach.
- Any scripts, network access, cookies and proxy configuration should be reviewed before execution. Open-source licensing covers the scraper's code, not ownership of the scraped content.

## AI classification and license

The scraper works **without an LLM**. AI assistance is optional, so the AI involvement is **Optional AI**, not Core AI and not an MCP server. The software repository is **MIT licensed**.

**Primary source:** [gosom/google-maps-scraper](https://github.com/gosom/google-maps-scraper).
