---
title: "Remotion Video Composition Workflow"
summary: "Build data-driven React video compositions, preview frames, and export validated MP4 files."
kind: "workflow"
category: "Video Production"
tags: ["Remotion", "React", "MP4"]
sourceNote: "Inspired by a skill-list screenshot posted by @elrocha.ia; the exact installation source was not established."
relatedUrl: "https://github.com/remotion-dev/remotion"
---

## Reference concept

The screenshot mentions `/remotion-skill`. It is a generic skill label; the [Remotion project](https://github.com/remotion-dev/remotion) and [official agent skills](https://www.remotion.dev/docs/ai/skills) are relevant verified resources, but not necessarily the exact post's package.

## Reusable agent instruction

```text
Create a [DURATION]-second programmatic video using React and Remotion.

Inputs: [CONTENT], [ASSET_PATHS], [BRAND_COLORS]
Output: [RESOLUTION], [FPS] fps, H.264 MP4

Define a type-safe data interface for every asset and text field.
Create named compositions and reusable components.
Drive every animation from frame number using supported Remotion APIs.
Preview the opening, midpoint, and ending frames.
Render a low-resolution test before final export.
Check for unsupported fonts/assets, errors, audio sync, and black frames.
Render the final MP4 and provide exact reproducible instructions.
```

## Notes

Remotion licensing has special terms for some business uses; check the [official license](https://www.remotion.dev/docs/license) before deployment.
