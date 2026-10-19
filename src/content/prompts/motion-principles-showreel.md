---
title: "Motion Design Principles Showreel"
summary: "Create a 15-second motion reel demonstrating squash, stretch, easing, anticipation, and follow-through."
kind: "prompt"
category: "Motion Design"
tags: ["GSAP", "Animation principles", "Showreel"]
sourceNote: "Adapted from a screenshot of a social post by @ofernandorank; original post URL was not supplied."
relatedUrl: "https://gsap.com/"
---

## Before you start

Choose four short words, an opening phrase, a signature name, and a call to action.

## Adaptable prompt

```text
Build a 15-second, 16:9 motion-design showreel using HTML, CSS, SVG, and GSAP.

Visual language:
- Background alternates light gray and deep graphite.
- Bold condensed typography with blue and vermilion accents.
- Hand-drawn style annotations, arrows, and secondary strokes.
- Crisp vector shapes and clean compositing.

Timeline:
0–3s: A small ball bounces, visibly squashing on impact and stretching
during travel; its final bounce becomes the period after [OPENING_PHRASE].
3–6s: The words [WORD_1], [WORD_2], [WORD_3], [WORD_4] animate with
per-letter motion and rhythmic timing.
6–9s: Compare linear interpolation with an ease-in/ease-out graph; the
animated marker should match the graph.
9–12s: A dot grid demonstrates follow-through and overlapping action.
12–14s: A circular progress dial demonstrates anticipation before 100%.
14–15s: Handwritten-style [NAME] reveal and legible [CTA].

Requirements:
- Frame-accurate 15-second timeline at [FPS] fps.
- All motion derived from deterministic time, not random runtime events.
- Components and animation constants must be editable.
- Provide preview, frame probes at scene boundaries, and export workflow.
- Prefer fewer strong transitions over excessive effects.
```

## Production tips

The first three seconds should demonstrate actual animation principles rather than merely naming them. Verify shapes remain visible at full-speed playback and do not rely on arbitrary animations to illustrate easing.
