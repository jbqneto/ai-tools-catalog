---
name: "Product Launch Motion"
summary: "Claude Code skill for producing music-synchronized product launch films from website briefs with code-rendered HTML animation."
category: "Media & Creative"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/AbubakrChan/product-launch-motion"
repository: "https://github.com/AbubakrChan/product-launch-motion"
aliases: ["Product Launch Motion Skill"]
tags: ["Claude Code", "Product video", "Motion graphics", "Playwright", "FFmpeg"]
useCases: ["Create a short animated product launch film from a website URL", "Build music-led UI showcases and brand videos", "Prototype deterministic frame-based product animations"]
capabilities: ["Provides agent instructions for creative direction and animated scene construction", "Uses time-addressable HTML animation and browser frame capture", "Includes an audio-synced rendering and review workflow"]
requirements: ["Claude Code or another compatible coding-agent environment", "Node.js 20 or newer, Playwright, FFmpeg, and Python with NumPy for the documented workflow", "Appropriately licensed music and brand assets when included"]
limitations: ["The current v2 workflow uses HTML and spring math rather than the HyperFrames/GSAP stack of legacy v1", "Quality and timing claims in examples are not guaranteed for new products", "Automated website interpretation, brand fidelity, and final exports require manual review"]
verification: "confirmed"
---

## Overview

Product Launch Motion is a code-driven video-production skill for product launch films. Its current workflow plans a music-led sequence, uses browser-rendered HTML animation, captures frames with Playwright, and finishes video and audio with FFmpeg.

**Version note:** Legacy v1 remains available in the upstream repository and uses GSAP/HyperFrames. Current v2 has a different implementation; do not assume v1 dependencies or techniques apply unchanged.

**Source:** [Official repository](https://github.com/AbubakrChan/product-launch-motion).
