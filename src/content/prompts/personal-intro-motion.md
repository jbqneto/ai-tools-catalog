---
title: "Personal Introduction Motion"
summary: "Create a fast 15-second personal introduction with kinetic typography, photo transitions, animated facts, and CTA."
kind: "prompt"
category: "Motion Design"
tags: ["GSAP", "Personal branding", "Typography"]
sourceNote: "Adapted from a screenshot of a social post by @ofernandorank; original post URL was not supplied."
relatedUrl: "https://gsap.com/"
---

## Before you start

Use a portrait you are allowed to publish. Define three factual highlights and one CTA.

## Adaptable prompt

```text
Create a 15-second 1920×1080 personal introduction animation using
HTML, CSS, and GSAP.

Inputs:
- Name: [NAME]
- Role: [ROLE]
- Portrait: [PHOTO]
- Brand color: [COLOR]
- Social handle: [HANDLE]
- Opening line: [OPENING_LINE]
- Three factual highlights: [HIGHLIGHT_1], [HIGHLIGHT_2], [HIGHLIGHT_3]
- Final CTA: [CTA]

Look:
- Clean black background with accents in [COLOR].
- Strong bold typography; use one contrasting italic serif word per phrase.
- Wipes, iris reveals, and readable animated count-ups.
- Avoid unnecessary busy textures.

Timeline:
0–3s: A line morphs into a pill, then a circular glyph from the name.
3–5s: The portrait appears inside a circle with a kinetic text lockup.
5–7s: [OPENING_LINE] transitions into an impactful title.
7–12s: Show three factual highlights as animated mini-infographics.
12–15s: Portrait, name, role, and [CTA] with a clickable-style Follow
button (visual only; the rendered video is not interactive).

Engineering:
- Expose text, color, portrait, and metrics as data properties.
- Support preview scrubbing and deterministic frame capture.
- Make number animations end at exact provided values.
- Export 15 seconds at [FPS] fps after visual review.
```

## Production tips

For an introduction, use only accomplishments you can verify. Avoid overstating experience or fabricating client logos.
