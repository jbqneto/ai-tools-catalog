---
name: "Google Maps Scraper (gosom)"
summary: "An open-source Go scraper with CLI, Web UI, REST API, and an optional coding-agent skill for researching Google Maps business listings."
category: "Web & Monitoring"
url: "https://github.com/gosom/google-maps-scraper"
repository: "https://github.com/gosom/google-maps-scraper"
tags: ["Google Maps","Business research","Scraping","Go","CLI","Agent Skill"]
resourceType: "CLI / Developer Tool"
aiInvolvement: "Optional AI"
verification: "confirmed"
aliases: ["gosom/google-maps-scraper","gosom Google Maps Scraper"]
useCases: ["Evaluate public local-business information for a permitted research task","Prototype a locally executed, controlled data-extraction workflow","Explore how a coding-agent skill orchestrates a CLI without duplicating its underlying repository"]
capabilities: ["Command-line application, local Web UI and HTTP API","Configurable structured output for business listing fields","Optional agent skill at skills/google-maps-scraper for planning and running jobs"]
requirements: ["Docker for the documented container workflow; Node.js for the optional skill installer","Clear legal rights and a lawful basis for the intended access and data processing","Rate limits, data minimization and evaluation of Google Maps service terms"]
limitations: ["Google Maps Platform terms prohibit extraction, scraping or storage of Maps content outside authorized services; an MIT repo license does not override these terms","Email addresses and business details may be missing, inaccurate or personal data regulated by privacy law","Automated collection can trigger blocking, account restrictions, legal or contractual risks; do not assume permission"]
---

## What it does

[Google Maps Scraper](https://github.com/gosom/google-maps-scraper) is a Go-based utility for collecting business-listing fields with a CLI, Web UI and REST API. The public repository also includes an [Agent Skill](https://github.com/gosom/google-maps-scraper/tree/main/skills/google-maps-scraper) for supported coding agents. **The skill is a companion to this same project, not a separate catalog record.**

## Practical applications

- Study architecture patterns for CLI-based and agent-orchestrated data workflows.
- Evaluate whether a permitted local-business research task could be automated responsibly.
- Inspect structured-data export, validation and resumable processing patterns.

## Compliance and limitations

**Open-source code does not grant permission to scrape third-party services.** Google Maps Platform's [EEA terms](https://cloud.google.com/terms/maps-platform/eea) explicitly prohibit exporting, extracting or otherwise scraping Maps content for use outside the services, including saving business names, addresses and reviews. The exact restrictions depend on the access method and applicable contract. Review the relevant Maps terms, robots and privacy requirements before use. Avoid collecting personal contact details without a lawful basis.

The repository is **MIT licensed**, but this governs the software itself—not Google's data. Use official approved APIs or directly licensed/permissioned datasets where appropriate. Do not assume the advertised extraction speed, coverage or lead quality applies to your use case.

**Official sources:** [Project repository](https://github.com/gosom/google-maps-scraper), [EEA Maps terms](https://cloud.google.com/terms/maps-platform/eea).
