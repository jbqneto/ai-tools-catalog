---
name: "Context7"
summary: "An MCP-powered documentation service that gives AI coding assistants current, version-specific library docs and code examples."
category: "Developer Tools"
url: "https://context7.com/"
repository: "https://github.com/upstash/context7"
tags: ["MCP", "Documentation", "Coding agents", "API reference"]
verification: "confirmed"
---

## What it does

[Context7](https://context7.com/) is an Upstash project that retrieves up-to-date, library- and version-specific documentation for AI coding assistants. It can supply relevant examples during development instead of relying exclusively on a model's training data.

The project provides an MCP server and integrations for coding clients such as Claude Code, Codex, and Cursor.

## Useful for

- Looking up current framework, SDK, and API usage while writing code.
- Reducing reliance on outdated or fabricated library APIs.
- Resolving version-specific documentation for dependencies.
- Providing documentation retrieval tools inside an AI agent workflow.

## Project details and limitations

The [Context7 repository](https://github.com/upstash/context7) is available under the **MIT license**; hosted API access and paid/private-documentation capabilities have separate service terms. The project provides a [setup guide](https://context7.com/docs/overview) for supported clients.

Content freshness depends on the library and indexed version. Retrieved documentation can still contain mistakes or omissions; inspect the cited source before making sensitive or production-critical changes.
