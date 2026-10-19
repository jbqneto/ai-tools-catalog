---
title: "Cinematic App Launch Trailer"
summary: "Plan a 30-second dark, colorful app-launch animation with a floating phone, screen zooms, and feature cards."
kind: "prompt"
category: "App Promotion"
tags: ["GSAP", "Product video", "3D"]
sourceNote: "Adapted from a screenshot of a social post by @ofernandorank; original post URL was not supplied."
relatedUrl: "https://gsap.com/"
---

## Before you start

Supply a product screenshot for each feature, brand text, and a licensed phone mockup if you use one.

## Adaptable prompt

```text
Create a 30-second 1920×1080 launch video for [APP_NAME].
Use HTML/CSS/JavaScript and GSAP for the motion timeline.

Inputs:
- [APP_NAME], [LOGO], [TAGLINE]
- Accent color: [COLOR]
- Five benefit phrases: [PHRASE_1] through [PHRASE_5]
- Product screens: [SCREEN_1], [SCREEN_2], [SCREEN_3]

Direction:
- Dark cinematic background with subtle colored bloom.
- A gently floating 3D-style smartphone as the central product.
- Large headlines with one keyword highlighted in [COLOR].
- Controlled camera zoom into real app screens.
- Interface cards appear from the device using depth and scale.
- Soft motion-blur transitions with purposeful pacing.

Scenes:
1. Intro: a concise one-line promise.
2. Five short feature reveals, each matching its corresponding screen.
3. Product demonstration: zoom into 2–3 representative UI details.
4. Resolution: assemble the logo, brand name, and tagline.

Technical acceptance:
- A deterministic timeline with explicit scene durations totaling 30s.
- 1920×1080, safe text margins, no cropped phone screen.
- Separate assets from animation logic; include an asset manifest.
- Provide a browser preview and documented MP4 export pipeline.
- Test readable text size and transitions on a mobile screen.
```

## Production tips

The smartphone can be represented with CSS 3D transforms, but true 3D may need WebGL. Do not assume that a generated HTML page is automatically an exported video.
