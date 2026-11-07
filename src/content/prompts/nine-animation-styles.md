---
title: "Nine Visual Styles for AI-Assisted Animation"
summary: "Nine creative directions for code-driven animation, with actionable prompts and implementation cautions for UI motion, explainers, and data visuals."
kind: "prompt"
category: "Motion Design"
tags: ["Animation", "Style references", "Motion graphics", "Three.js", "Remotion", "GSAP"]
sourceNote: "Independently adapted from an Instagram screenshot attributed to @matt_penny_applied_ai. No original post URL or reproducible examples were supplied; these are style ideas, not built-in Claude presets."
relatedUrl: "https://github.com/greensock/GSAP"
---

## Nine directions to explore

These are **visual directions**, not nine installable AI tools or guaranteed one-shot Claude capabilities. Pick one style for each scene sequence and provide the source assets, target medium, and observable acceptance criteria.

1. **Glass Mosaic** — layered translucent panes, refraction-inspired shapes, and small reflective fragments. Prefer simple, controlled layers over expensive physical refraction when exporting video.
2. **Pixel Explainer** — low-resolution sprites, a limited palette, stepped movement, and crisp pixel scaling. Keep a stable pixel grid to avoid shimmer.
3. **Paper-Cut** — layered matte silhouettes, soft contact shadows, and parallax depth. Use constrained color and offset layers to preserve the handmade effect.
4. **CGI Product** — clean 3D product framing, realistic materials, studio lighting, and a deliberate hero-camera path. Asset licensing and render costs matter.
5. **Watercolour** — softly bleeding pigment, textured paper, organic transitions, and restrained camera movement. Avoid unstable flicker between rendered frames.
6. **Retro Terminal** — monospace type, scanline accents, cursor movements, restrained green or amber highlights, and timed command output. Make text legible and do not mimic private terminal data.
7. **Galton Board** — repeated balls or particles falling through pegs and accumulating into bins. Use a deterministic physical approximation and disclose when results are illustrative.
8. **Isometric** — consistent orthographic or pseudo-isometric geometry, layered object movement, and precise alignment of floors, walls, and shadows.
9. **3D Data Chart** — dimensional bars or data objects with synchronized labels and camera movement. Data values and axes must remain accurate; 3D depth should not distort comparisons.

## Reusable brief for a coding agent

```text
Create a [DURATION]-second motion study in the style [STYLE] from
the nine-style reference list.

Purpose: [MESSAGE / AUDIENCE].
Deliverables: editable source code, a browser preview, and optional video.
Target: [ASPECT_RATIO], [FPS], [RESOLUTION], and [OUTPUT_FORMAT].
Inputs: [VERIFIED_DATA], [APPROVED_ASSETS], [TEXT], [BRAND_PALETTE].
Renderer: [GSAP / REMOTION / THREE.JS / P5.JS / OTHER].

Describe a 3-scene storyboard with explicit timestamps.
For every animated element specify entrance, motion path, easing,
duration, exit, and final resting state. Avoid unnecessary effects.
Use deterministic timing and a fixed random seed where relevant.
Validate data labels, readability, accessibility, and source rights.
Provide a preview before final encoding; do not claim the output
was tested unless it was actually rendered and inspected.
```

## Recommended experimentation

For **Galton Board** or **3D Data Chart**, ask for a data-correct prototype first. For **CGI Product**, **Isometric**, or **Paper-Cut**, ask for a still scene to approve camera and composition. For **Glass Mosaic**, **Pixel Explainer**, **Watercolour**, and **Retro Terminal**, begin with a short seamless motion test.

The linked GSAP repository is an example animation engine, not the origin of these nine labels. The source screenshot did not provide code, performance benchmarks, or an official skill package.
