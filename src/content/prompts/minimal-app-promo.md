---
title: "Minimal App Presentation"
summary: "Build a 30-second minimalist HTML and GSAP app presentation with animated typography and UI mockups."
kind: "prompt"
category: "App Promotion"
tags: ["GSAP", "HTML", "Typography"]
sourceNote: "Adapted from a screenshot of a social post by @ofernandorank; original post URL was not supplied."
relatedUrl: "https://gsap.com/"
---

## Before you start

Prepare your app's name, logo, tagline, five short feature statements, and UI screenshots. Use real, authorized visual assets.

## Adaptable prompt

```text
Create a 30-second, 1920×1080 (16:9), minimalist product announcement video using HTML, CSS, JavaScript, and GSAP.

Brand:
- Product: [APP_NAME]
- Logo asset: [LOGO_FILE]
- Tagline: [TAGLINE]
- Brand accent: [ACCENT_COLOR]
- UI assets: [SCREEN_1], [SCREEN_2], [SCREEN_3]
- Five messages: [MESSAGE_1] ... [MESSAGE_5]

Art direction:
- Black background with predominantly white typography.
- Bold oversized headlines with word-by-word reveals.
- Restrained UI mockups, high-contrast product details.
- Energetic echo-trail and blur transitions, without abrupt hard cuts.
- Modern, professional motion; no unnecessary decoration.

Storyboard:
0–3s: Brand logo reveal.
3–18s: Five messages, each with a distinct text-to-UI transition.
18–26s: Showcase interface mockups, animated controls, and benefits.
26–30s: Return to logo and tagline, hold for readability.

Implementation:
- Use GSAP timelines and reusable scene components.
- Keep the animation deterministic from a timeline position.
- Include an in-browser preview with play/pause and seek controls.
- Add a render method for exporting a true 1920×1080 MP4
  (e.g. frame capture and FFmpeg), not just the HTML preview.
- Respect reduced-motion settings for the preview interface.
- Validate the exported result at 30 seconds.

Deliver: complete source, asset manifest, storyboard, preview instructions,
and a rendered MP4 only when rendering is explicitly requested.
```

## Production tips

- Keep each message under six words for legibility.
- Use screenshots from the actual product rather than invented interfaces.
- GSAP animates the page; **exporting MP4 is a separate step** that needs frame capture and encoding.
- Review brand assets, music rights, and mobile readability.
