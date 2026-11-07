---
name: "Teardown (elvarofficial)"
summary: "A Claude Code skill for generating explorable, self-contained 3D machine simulations and recording synchronized video tours."
category: "3D & Interactive"
url: "https://github.com/elvarofficial/teardown"
repository: "https://github.com/elvarofficial/teardown"
tags: ["Three.js","3D explainers","Claude Code","Simulation","Video rendering"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
useCases: ["Prototype interactive educational machine teardowns","Generate narrated or guided 3D explainer scenes for approved media","Test interactive HTML mechanisms before exporting a video"]
capabilities: ["Generates a local HTML page with a machine model and interactive components","Keeps scene instrumentation tied to simulated state","Includes frame-by-frame 60 fps video capture and procedural sound scripts"]
requirements: ["Claude Code or a compatible agent using the skill","Node.js 20+, project dependencies, and Playwright Chromium","FFmpeg for exported video and Python 3 for sound generation"]
limitations: ["A visual simulation is not engineering-validated physics or a safety-certified model","Requires local tooling and visual inspection before publication","Animation and sound assets remain subject to their third-party license notices"]
---

## Overview

The upstream README provides examples of a V8 engine, an aircraft and a walking mechanism. It separates a shared machine state from the interactive viewer and film capture. This is an **agent skill**, not a hosted 3D editor or a physics certification tool.

**Relevance:** mechanical explainers, interactive learning demos and programmatic educational videos. Inspect its dependencies and generated artifacts before running in a production environment. **License:** MIT as declared by the project.

**Official source:** [Teardown (elvarofficial)](https://github.com/elvarofficial/teardown).
