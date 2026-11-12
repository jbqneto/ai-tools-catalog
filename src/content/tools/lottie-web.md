---
name: "Lottie Web"
summary: "JavaScript player that renders Lottie animations exported as JSON in SVG, canvas, or HTML on the web."
category: "Media & Creative"
resourceType: "Library / Framework"
aiInvolvement: "No AI required"
url: "https://github.com/airbnb/lottie-web"
repository: "https://github.com/airbnb/lottie-web"
aliases: ["lottie-web", "Bodymovin Web Player"]
tags: ["Lottie", "JavaScript", "SVG", "Animation"]
useCases: ["Play exported motion graphics in websites and web applications", "Add lightweight vector animation to UI components"]
capabilities: ["Loads exported Lottie JSON from a URL or in-memory data", "Supports SVG, canvas, and HTML renderers", "Exposes playback, looping, speed, and segment controls"]
requirements: ["A browser and a compatible Lottie JSON animation", "An export tool such as Bodymovin when originating in Adobe After Effects"]
limitations: ["It is an animation player, not an AI video-generation tool or visual editor", "Not every After Effects feature exports or renders identically", "It does not directly produce a finished MP4 video"]
verification: "confirmed"
---

## Overview

Lottie Web is Airbnb's browser runtime for vector and other Lottie animations. It parses animation data exported with Bodymovin and renders it through SVG, canvas, or HTML. Playback can be controlled programmatically.

**Distinction:** The separate LottieFiles Motion Design Skill already listed in this catalog teaches motion principles to coding agents; it is not the Lottie Web runtime.

**Source:** [Official repository](https://github.com/airbnb/lottie-web). Review supported animation features and export caveats before relying on a particular After Effects composition.
