---
name: "Unslop"
summary: "An agent skill for critiquing and refining generic-looking dashboards, applications and landing pages through staged design reviews."
category: "Developer Tools"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/heydamir/unslop"
repository: "https://github.com/heydamir/unslop"
aliases: ["unslop", "heydamir/unslop"]
tags: ["Agent Skills", "UI design", "Frontend", "Design review", "Dashboards", "Landing pages"]
useCases: ["Audit a coded application or landing page for weak visual hierarchy and generic patterns", "Iteratively improve spacing, typography, layout and interface details", "Optionally create a short visual before-and-after story clip"]
capabilities: ["Structured UI audit followed by proposed design direction and progressive improvement passes", "Optional screenshot and story-video workflows using Playwright and FFmpeg", "Guidance for requesting optional external image generation when needed"]
requirements: ["A compatible coding agent with access to the target UI and code", "Optional Playwright/Chromium for browser previews and FFmpeg for story video export", "Explicit approval and applicable provider credentials for any external paid image generation"]
limitations: ["Design improvements are subjective and should be tested with real users and accessibility checks", "The skill does not guarantee more conversions or better product usability", "Optional external image generation may transmit prompts or other data and incur fees", "Content is licensed CC BY 4.0 and requires attribution when reused"]
verification: "confirmed"
---

## Overview

[Unslop](https://github.com/heydamir/unslop) guides an AI coding agent through identifying generic visual patterns, proposing a stronger design direction and progressively improving a page. It is a **skill for working on existing UI and code**, not a standalone drag-and-drop editor.

## Workflow and rights

The author documents optional Playwright/browser capture and an FFmpeg-based story video. Optional images can use third-party generators and require authorization before paid calls. The skill's **CC BY 4.0** terms require attribution when sharing adapted skill material. Review code changes, responsiveness and accessibility before publishing.

**Official repository:** https://github.com/heydamir/unslop
