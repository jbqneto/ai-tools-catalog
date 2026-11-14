---
name: "Claude Animation Base"
summary: "A p5.js and p5.brush starter project for agent-written, hand-painted 2D character animation with a 31-emotion reference sheet and local MP4 rendering."
category: "Media & Creative"
resourceType: "Project / Demo"
aiInvolvement: "AI ecosystem"
url: "https://github.com/JohnHeibel/ClaudeAnimationBase"
repository: "https://github.com/JohnHeibel/ClaudeAnimationBase"
aliases: ["ClaudeAnimationBase", "JohnHeibel/ClaudeAnimationBase"]
tags: ["Creative coding", "p5.js", "p5.brush", "Character animation", "Claude Code", "Video"]
useCases: ["Prototype hand-painted 2D animated characters and short narrative scenes", "Use emotion and character-view model sheets as animation references", "Study a storyboard-to-render workflow for code-generated cartoons"]
capabilities: ["Character examples with 31 documented emotions and multiple views", "Animation guidance for scene pacing, transitions and painted movement", "Browser-based preview and headless MP4 rendering with contact sheets"]
requirements: ["Node.js, Google Chrome or compatible Chromium, and FFmpeg", "A coding agent to follow the animation guide for new scenes", "GPU acceleration is helpful for p5.brush watercolor rendering"]
limitations: ["A starter kit and code examples, not a standalone drag-and-drop animation application", "The author reports slow watercolor rendering without a dedicated GPU", "New characters and scenes still require agent-generated code and human visual review"]
verification: "confirmed"
---

## Overview

[Claude Animation Base](https://github.com/JohnHeibel/ClaudeAnimationBase) is a small example project and creative-coding workflow built around p5.js and p5.brush. Its animation guide describes how a coding agent can storyboard, draw, inspect and render a short film. The bundled Clawd character provides 31 emotion references and multiple views; these are starting assets rather than a fixed character requirement.

## Requirements and limitations

The repository includes a browser preview (`studio.html`), an MP4 renderer (`render.mjs`) and documentation for rendering on Linux. The upstream README notes that software rendering or integrated graphics can be slow for watercolor effects. The repository declares an MIT license.

The promotional screenshot illustrates the idea but does not establish that the repository ships the depicted visual editor.
