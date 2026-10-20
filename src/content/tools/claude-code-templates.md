---
name: "Claude Code Templates (aitmpl.com)"
summary: "An open-source catalog and CLI for finding and installing Claude Code agents, skills, commands, hooks, and MCP integrations."
category: "Developer Tools"
url: "https://aitmpl.com/"
repository: "https://github.com/davila7/claude-code-templates"
tags: ["Claude Code", "Skills", "Agents", "MCP", "Templates"]
verification: "confirmed"
---

## What it does

[Claude Code Templates](https://aitmpl.com/) is a community-driven registry of reusable configuration components for Claude Code. It provides a web directory for browsing agents, skills, custom commands, hooks, settings, and MCP server configurations. Individual component listings let users inspect the source before installing.

The accompanying CLI can install individual components or groups of components into a project. For example, the project's documented interactive entry point is:

```bash
npx claude-code-templates@latest
```

## Useful for

- Discovering reusable Claude Code skills, agents, and workflow configurations.
- Inspecting component source files before adopting them.
- Installing and managing project-specific Claude Code components.
- Exploring community examples of MCP integrations and development automation.

## Licensing and limitations

The main repository is **MIT licensed**. Individual included or linked third-party components may have their own licenses, requirements, or service charges.

The catalog's maintainers describe automated checks for contributed components, but those checks **do not guarantee security**. Hooks and MCP integrations can execute commands or access local files with the permissions of the host environment. Inspect files, dependencies, and requested permissions before installing a component.

This directory is **not affiliated with or officially maintained by Anthropic**.
