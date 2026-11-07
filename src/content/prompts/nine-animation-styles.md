---
title: "Visual Styles for AI-Assisted Animation"
summary: "Fourteen distinct animation styles, plus seven concrete scene prompts adapted for code-first motion graphics and educational videos."
kind: "prompt"
category: "Motion Design"
tags: ["Animation", "Style references", "Motion graphics", "Three.js", "Remotion", "GSAP"]
sourceNote: "Adapted from public social-media screenshots credited to @matt_penny_applied_ai and @janustiu; original post URLs were not supplied. Creative examples, not Claude presets."
relatedUrl: "https://github.com/greensock/GSAP"
---

## Nine original style directions

These are **visual directions**, not nine installable AI tools or guaranteed one-shot Claude capabilities. Pick one style for each scene sequence and provide the source assets, target medium, and observable acceptance criteria.

1. **Glass Mosaic** — layered translucent panes, refraction-inspired shapes, and small reflective fragments. Prefer simple, controlled layers over expensive physical refraction when exporting video.
2. **Pixel Explainer / Pixel Art** — low-resolution sprites, limited palettes, dithering, stepped movement, and crisp nearest-neighbor scaling. For a Game Boy aesthetic, use four muted greens and deliberate pixel-sized movement, without copyrighted game artwork.
3. **Paper-Cut** — layered matte silhouettes, soft contact shadows, and parallax depth. Use constrained color and offset layers to preserve the handmade effect.
4. **CGI Product** — clean 3D product framing, realistic materials, studio lighting, and a deliberate hero-camera path. Asset licensing and render costs matter.
5. **Watercolour** — softly bleeding pigment, textured paper, organic transitions, and restrained camera movement. Avoid unstable flicker between rendered frames.
6. **Retro Terminal / ASCII Terminal** — monospace type, scanline accents, cursor movements, restrained green or amber highlights, timed command output, and ASCII glyphs morphing into geometric forms. Preserve legibility and avoid private terminal data.
7. **Galton Board** — repeated balls or particles falling through pegs and accumulating into bins. Use a deterministic physical approximation and disclose when results are illustrative.
8. **Isometric** — consistent orthographic or pseudo-isometric geometry, layered object movement, and precise alignment of floors, walls, and shadows.
9. **3D Data Chart** — dimensional bars or data objects with synchronized labels and camera movement. Data values and axes must remain accurate; 3D depth should not distort comparisons.

## Five additional distinct styles from @janustiu

Seven concepts were supplied in the screenshots. **Pixel Art** overlaps Pixel Explainer, and **ASCII Terminal** overlaps Retro Terminal, so those two are incorporated above rather than counted twice. The other five expand the vocabulary to fourteen distinct approaches.

10. **Kinetic Showreel:** oversized typography, geometric cuts and a recurrent red ball with squash-and-stretch animation, red/cream/black/cobalt color blocking.
11. **One-Line Art:** a single continuous blue line draws different objects (graph, hand, soundwave) on a warm graph-paper background; continuity is important.
12. **Risograph Stop Motion:** paper cutout shapes assemble a computer, unfold into a film strip and spell a word; preserve print registration imperfections, grain, pink/teal inks and tactile timing.
13. **Renaissance Notebook:** original flying-machine sketches on parchment animate their gears and wings; use sepia cross-hatching, red-chalk details, and quill-like sound.
14. **Ink in Water:** indigo and magenta pigment clouds swirl and coalesce into a legible word before dissolving; smooth particles on a near-white background.

## Seven copy-ready scene briefs

These short briefs are **adaptations**, not claims that a model has already produced or tested the footage. Validate timing, typography, visual continuity, licenses, and optional audio before production.

### 1. Kinetic Showreel — 8 seconds

```text
Create an original 8-second kinetic typography showreel built around
a single red ball. Red, cream, black and cobalt palette. Reveal
bold letter groups with squash-and-stretch from 0–2s. The ball
strikes type, triggering geometric wipes and quick cuts from 2–6s.
Hold the word MOTION clearly at 6–8s. Export deterministic frames.
```

### 2. ASCII Terminal — 8 seconds

```text
Black CRT terminal, restrained green phosphor and monospace ASCII.
A rotating ASCII torus morphs into a three-dimensional head (0–5s),
glitches briefly (5–6s), then resolves to the readable word MOTION
(6–8s). Preserve fixed cell spacing, controlled scanlines, and a
stable glyph map between frames.
```

### 3. Pixel Art — 8 seconds

```text
Produce an 8-second Game Boy-inspired animation in four green tones.
A dithered pixel ball bounces across a side-scrolling landscape;
its pixels then rearrange to read MOTION. Render at low logical
resolution and upscale only with nearest-neighbor filtering.
Motion should be chunky but consistent, without flickering edges.
```

### 4. One-Line Art — 8 seconds

```text
On off-white graph paper, draw one unbroken blue vector line.
It becomes a simple chart at 0–2s, a hand outline at 2–5s,
then a waveform and handwritten word MOTION at 5–8s.
Keep stroke width, endpoint position, and line continuity correct.
Apply only subtle hand-drawn wobble.
```

### 5. Risograph Stop Motion — 9 seconds

```text
Create a tactile 9-second risograph paper-cut animation.
Shapes in pink and teal ink assemble a computer by 3s;
the computer unfolds into a film strip by 6s;
the paper pieces arrange into MOTION by 9s.
Keep off-white paper, grain, slight ink misregistration,
original toy-instrument sound, and deliberate stop-motion cadence.
```

### 6. Renaissance Notebook — 9 seconds

```text
An original sepia inventor's notebook drawing on parchment.
Draw an imaginary flying-machine schematic in red chalk,
fine construction lines and cross-hatching during 0–3s.
Animate gears and wings as drawings during 3–6s.
Let the sketch gently lift off the page during 6–9s,
using a subtle quill scratch, without implying engineering accuracy.
```

### 7. Ink in Water — 9 seconds

```text
On a nearly white canvas, indigo and magenta ink clouds curl
through transparent water at 0–3s, slowly coalesce into the
readable word MOTION at 3–6s, and dissolve into soft
translucent particles by 9s. Preserve smooth trajectories
and avoid accidental frame-to-frame letter changes.
```

### Provenance and duplicate policy

The seven animation descriptions above are independently authored from screenshots credited to **@janustiu**. No actual project repository, executable skill, model preset, or original Instagram post URL was supplied. Pixel Art and ASCII Terminal are explicitly merged with existing overlapping styles rather than introduced as duplicate prompt entries.

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
