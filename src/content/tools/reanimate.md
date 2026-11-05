---
name: "reanimate"
summary: "A Claude Code agent skill that studies animations from websites or recordings, rebuilds motion in code, and compares the rendered result."
category: "Media & Creative"
url: "https://github.com/NiazMorshed2007/reanimate"
repository: "https://github.com/NiazMorshed2007/reanimate"
tags: ["Animation", "Reverse engineering", "Visual comparison", "Claude Code", "WebGL"]
aliases: ["Reanimate Skill"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
---

## Overview

reanimate is a skill for **studying an existing animation**, extracting frame-by-frame motion details, reproducing the effect in code, and comparing the original with the implementation. Sources may include authorized websites, screen recordings, GIFs, video files, or Lottie animations.

It includes capture, frame-diff, timing, and easing-analysis utilities. The agent can then iterate on its CSS, GSAP, or WebGL implementation.

## Useful for

- Reconstructing animation behavior when the original implementation is unavailable.
- Learning motion timing, easing, and stagger from visual references.
- Checking a generated animation against an approved example.

## Licensing and limitations

**MIT**. The project documents **Bun 1.1+**, supported browser tooling, FFmpeg components, and platform-specific requirements. Benchmark results shown by its author are examples, **not guarantees of pixel-perfect output**.

Use only reference material that you are authorized to study and reuse. Recreating motion does not transfer ownership of original brand assets, code, or copyrighted artwork.

[Repository](https://github.com/NiazMorshed2007/reanimate).
