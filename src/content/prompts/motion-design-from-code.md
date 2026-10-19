---
title: "Code-Only Motion Graphics Workflow"
summary: "Produce motion graphics using time-based code and browser rendering without requiring a traditional editor."
kind: "workflow"
category: "Motion Design"
tags: ["HTML", "Playwright", "Motion"]
sourceNote: "Inspired by a skill-list screenshot posted by @elrocha.ia; the exact installation source was not established."
relatedUrl: "https://github.com/howseen-ai/claude-motion-design"
---

## Reference concept

The screenshot names a command `/motion-design` described as motion graphics created entirely in code. The exact origin of that screenshot's skill is unverified. A **related working implementation** is [Claude Motion Design](https://github.com/howseen-ai/claude-motion-design), which uses HTML, Playwright, and FFmpeg.

## Reusable agent instruction

```text
Design a 20-second motion graphics sequence entirely in code.

Message: [CORE_MESSAGE]
Visual style: [STYLE]
Brand assets: [ASSETS]
Target: 1920×1080, [FPS] fps, H.264 MP4

Write a complete storyboard with scene durations and key visual beats.
Implement each frame as a deterministic function of time.
Build reusable primitives for text, masks, shapes, and transitions.
First render four representative stills for review.
After approval, render the full video and mix any licensed audio.
Validate the exact duration, rendering errors, and final MP4.
Do not install or execute arbitrary third-party scripts without review.
```

## Notes

Code-only does not mean cost-free in every environment: compute, external assets, hosted models, and other services can still incur charges.
