---
title: "AI-Assisted Video Production Pipeline"
summary: "Use an agent to plan and automate a multi-stage video edit while retaining human review before final export."
kind: "workflow"
category: "Video Production"
tags: ["Automation", "Video editing", "Assets"]
sourceNote: "Inspired by a skill-list screenshot posted by @elrocha.ia; the exact installation source was not established."
---

## Reference concept

The shared screenshot labels this idea `/videoclip-AI-skill`, describing automatic editing from cutting through export. This should be treated as a **workflow concept**, not evidence of a particular installable package.

## Reusable agent instruction

```text
Create a reproducible editing pipeline for [PROJECT_NAME].

Assets: [VIDEO], [AUDIO], [IMAGES], [CAPTIONS]
Target: [DURATION], [RESOLUTION], [ASPECT_RATIO], [FPS]

Stage 1 — Inventory: inspect duration, resolution, framerate and licenses.
Stage 2 — Plan: produce a detailed storyboard and edit decision list.
Stage 3 — Edit: trim, align, normalize, and arrange scenes on a timeline.
Stage 4 — Graphics: add on-screen text, transitions, and safe-area checks.
Stage 5 — Audio: clean levels, place music, and check rights.
Stage 6 — Review: export low-resolution preview and request approval.
Stage 7 — Final: render and verify the deliverable with ffprobe.

Do not delete source files or publish to a social platform automatically.
Provide all scripts, versions, logs, and reproducible paths.
```

## Notes

Automation does not remove the need for editorial review or media-rights clearance.
