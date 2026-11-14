---
name: "Claude Drawing Skill"
summary: "A Claude Code skill and offline Python drawing library with 83 styles, deterministic image generation, and stage-by-stage drawing exports."
category: "Media & Creative"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/cloveric/claude-drawing-skill"
repository: "https://github.com/cloveric/claude-drawing-skill"
aliases: ["Claude Drawing", "cloveric/claude-drawing-skill"]
tags: ["Agent Skills", "Python", "Procedural art", "Illustration", "Pillow", "Drawing timelapse"]
useCases: ["Produce code-drawn illustrations without an image generation API", "Explore repeatable compositions in ink, watercolor and other visual styles", "Capture intermediate drawing stages for animated process demonstrations"]
capabilities: ["83 documented art styles with example scripts", "CPU-based image rendering using NumPy and Pillow", "Deterministic output and optional saved drawing stages"]
requirements: ["Python and the project's NumPy/Pillow dependencies", "Claude Code or a compatible agent for the skill-guided painting workflow", "A suitable system font for styles that render CJK text"]
limitations: ["Not a text-to-image inference model or a visual painting editor", "Illustration detail depends on the agent-written Python scene code and refinement", "Per-stroke layer export for tools such as Remotion is listed on the upstream roadmap, not as a shipped feature"]
verification: "confirmed"
---

## Overview

[Claude Drawing Skill](https://github.com/cloveric/claude-drawing-skill) combines agent instructions with a Python-based procedural illustration library. The project documents 83 styles and can render intermediate stages for draw-on animations. The graphics are rendered locally on a CPU; the rendering library itself does not require an image-generation API.

## Requirements and limitations

Install the repository's Python requirements to run its examples. The agent-guided workflow expects Claude Code or a compatible environment. The project declares MIT licensing.

The staged image outputs should not be confused with a complete timeline-based video editing application. Upstream documentation describes per-stroke layer export as future work.
