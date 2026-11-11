---
name: "Impeccable"
summary: "A frontend design review and improvement skill with targeted agent commands for critique, polish, accessibility auditing and deterministic checks for common AI-generated UI patterns."
category: "Developer Tools"
url: "https://github.com/pbakaus/impeccable"
repository: "https://github.com/pbakaus/impeccable"
tags: ["Agent Skills","Frontend design","UI audit","Accessibility","Design QA","Claude Code","Codex"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["pbakaus/impeccable","Impeccable design skill"]
useCases: ["Audit an existing Next.js frontend for accessibility, responsiveness and visual polish","Review a single checkout, onboarding or dashboard component before release","Standardize agent-assisted design iteration with shared product and design context files"]
capabilities: ["Targeted commands including critique, audit, polish, bolder, quieter and harden","A deterministic detector for common AI-looking UI anti-patterns","Optional live browser iteration with changes reflected in local source code"]
requirements: ["A compatible AI coding environment and permission to inspect the relevant frontend source","Node.js tooling for installer and local detector; review package scripts before running","Human authorization before source changes, live mode or invoking other agents"]
limitations: ["Does not replace usability testing or a professional accessibility audit","The upstream live-mode agent fallback can invoke coding CLIs with approval and sandbox bypass flags; inspect configuration and disable that fallback on untrusted projects","A design skill, not a standalone AI model; plugin commands and compatibility may change"]
---

## Overview

Impeccable is a design vocabulary and QA workflow for coding agents. It can critique an existing interface, apply precise visual directions, document a design system and flag repetitive AI-generated visual patterns with deterministic checks.

## Practical fit

Most useful when a UI already exists and needs **targeted refinement**, not when looking for a replacement app builder. A small component review is easier to verify than broad unsupervised redesign.

## Security and setup

Install instructions are documented in the [upstream README](https://github.com/pbakaus/impeccable). Its optional **live mode deserves a permissions review**: the upstream states that a fallback path can launch an external coding CLI with approval/sandbox bypass options. Disable or constrain that behavior if it is incompatible with your security posture. Do not expose a production app, credentials or untrusted repository without review.

**Official source:** [pbakaus/impeccable](https://github.com/pbakaus/impeccable). **License:** Apache-2.0.
