---
name: "Bang Motion"
summary: "An agent skill for producing code-driven motion graphics, kinetic typography, promos and explainers as a browser-playable HTML composition with optional MP4 export."
category: "Media & Creative"
url: "https://github.com/bangtutorial/bang-motion"
repository: "https://github.com/bangtutorial/bang-motion"
tags: ["Agent Skills","Motion graphics","HTML","GSAP","FFmpeg","Video production","Claude Code","Codex"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["bangtutorial/bang-motion","Bang Motion skill"]
useCases: ["Produce animated product demos and landing-page launch promos","Prototype reusable channel intros, titles and kinetic typography in code","Build short educational explainers with a deliberate motion vocabulary and no traditional editing timeline"]
capabilities: ["Single index.html as a replayable, inspectable composition","Brand-aware style brief and design rules to avoid slide-like motion","Optional frame capture, voice-over synchronization and FFmpeg MP4 export"]
requirements: ["A compatible coding agent and web browser for preview","Node.js and Puppeteer for automated frame capture or export","FFmpeg for exporting video, and network access when loading CDN-hosted dependencies"]
limitations: ["HTML output is not an MP4 until the optional export pipeline is run","Uses browser rendering and potentially external fonts or scripts; test offline and deterministic builds before production","A motion-design skill, not a commercial nonlinear editor or hosted generative video model"]
---

## Overview

Bang Motion supplies design and implementation rules for motion graphics produced in a browser. Its primary artifact is an `index.html` composition that can be previewed, scrubbed for QA and exported frame-by-frame to an MP4.

## Where it fits

Channel idents, explainers, animated titles and product demonstrations. It is a distinct source project from the catalog's **Claude Motion Design**, **Motion Skills**, **Remotion**, and **HyperFrames** entries. Consider it a production skill layered on top of rendering technologies, not a replacement for all of them.

Export and automation may require Puppeteer, Node.js and FFmpeg; some browser previews depend on CDN-hosted assets. Verify final video, fonts and media rights.

**Official source:** [bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion). **License:** MIT.
