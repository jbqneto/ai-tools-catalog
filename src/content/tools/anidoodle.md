---
name: "AniDoodle"
summary: "An agent skill and code-driven drawing engine for repeatable illustrations, stroke-by-stroke timelapses, short films, and interactive art in 32 styles."
category: "Media & Creative"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/alexgreensh/anidoodle"
repository: "https://github.com/alexgreensh/anidoodle"
aliases: ["anidoodle", "alexgreensh/anidoodle"]
tags: ["Agent Skills", "Creative coding", "Hand-drawn animation", "Procedural art", "Timelapse", "Video"]
useCases: ["Create reproducible illustrations and drawing-process animations", "Generate short code-drawn films and visual explainers", "Produce stills, loops and self-contained interactive art from one project"]
capabilities: ["32 documented visual styles with drawing-order animations", "Exports PNG, GIF, MP4, WebM and self-contained HTML", "Code-defined timelines and optional programmatic soundtrack with render checks"]
requirements: ["A compatible coding agent for the skill-guided workflow, or direct use of the engine", "Node.js 20+ and a browser rendering setup", "FFmpeg for motion and video exports"]
limitations: ["A coding skill and rendering engine, not evidence of the screenshot's pictured graphical editing interface", "Visual quality depends on the agent's code, drawing design and editorial review", "Rendering and installation require local development tools and may be compute-intensive"]
verification: "confirmed"
---

## Overview

[AniDoodle](https://github.com/alexgreensh/anidoodle) combines an agent-readable skill with a procedural drawing engine. Its code-generated art supports 32 styles, from watercolor and pencil to woodcut and pixel art, and can reveal how each image was drawn. The same source can produce stills, loops, videos and an offline HTML presentation.

## Requirements and limitations

The upstream README documents plugins for Claude Code and Codex, as well as a standard skill folder for other compatible agents. Direct rendering uses Node.js, browser tooling and FFmpeg for moving images. The repository declares Apache-2.0 licensing.

This is a code-first production workflow; the social-media illustration should not be taken as proof of a shipped visual timeline editor. Review generated media, sound and any third-party assets before publication.
