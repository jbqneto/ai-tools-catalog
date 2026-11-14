---
name: "HandDraw Skill"
summary: "An agent-native whiteboard animation toolkit that turns a JSON scene DSL and SVG drawing assets into Remotion-rendered MP4 videos."
category: "Media & Creative"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/ToBeWin/HandDraw-Skill"
repository: "https://github.com/ToBeWin/HandDraw-Skill"
aliases: ["HandDraw-Skill", "ToBeWin/HandDraw-Skill"]
tags: ["Agent Skills", "Whiteboard animation", "SVG", "Remotion", "Video", "Explainer"]
useCases: ["Create stroke-reveal diagrams and whiteboard-style educational explainers", "Write repeatable scene animations as structured JSON", "Render local MP4 videos with optional spoken narration"]
capabilities: ["JSON animation DSL for drawing, writing, motion, transforms and highlighting", "Remotion-based MP4 export from local inline SVG assets", "Optional narration via Edge TTS and FFmpeg"]
requirements: ["Node.js/npm and the dependencies documented in the repository", "Local SVG path/line assets and a compatible coding agent for skill use", "Python audio dependencies, FFmpeg and network access only when optional Edge TTS narration is used"]
limitations: ["The DSL expects path/line-oriented inline SVG and recommends no more than eight objects per scene", "Optional Edge TTS requires network access and sends narration text to an external service", "A code-driven rendering toolkit, not evidence of the pictured drag-and-drop GUI"]
verification: "confirmed"
---

## Overview

[HandDraw Skill](https://github.com/ToBeWin/HandDraw-Skill) provides a JSON animation DSL for deterministic whiteboard-style explainers. A compatible agent creates a project file, validates it and renders its SVG and text animations through Remotion.

## Requirements and limitations

The README documents draw, write, move, rotate, scale, fade and highlight as version-one animation operations. SVG input must be local and path/line-oriented; the author recommends keeping each scene to eight objects or fewer. Optional narration uses Edge TTS through network access and may require reviewing privacy and service terms. The repository declares an MIT license.

Unlike the separately listed hand-drawn explainer project, this entry links to the specific identified ToBeWin implementation.
