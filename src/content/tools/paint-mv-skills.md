---
name: "Paint MV Skills"
summary: "A four-skill agent workflow for turning a song and timed lyrics into a hand-painted watercolor music video with programmatic browser frames and FFmpeg assembly."
category: "Media & Creative"
url: "https://github.com/lintsinghua/paint-mv-skills"
repository: "https://github.com/lintsinghua/paint-mv-skills"
tags: ["Agent Skills","Music video","Watercolor","Creative coding","p5.js","FFmpeg","Audio sync"]
resourceType: "Directory / Collection"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["lintsinghua/paint-mv-skills","paint-mv","paint-mv-storyboard"]
useCases: ["Explore code-first animated music videos and lyric-synchronized visual storytelling","Split storyboarding, character design, animation and rendering across specialized agent skills","Study reproducible visual rendering and resumable chapter-level video production"]
capabilities: ["Four coordinated skills for direction, storyboard, animation and render","Beat and lyric alignment, per-chapter delegation and visual contact sheets","p5.brush watercolor rendering in headless Chrome and final FFmpeg encoding"]
requirements: ["A compatible coding agent, Node.js 18+, Chrome, FFmpeg, git and patch","Audio file and timed lyrics; additional Python/uv dependencies for automatic alignment","Explicit legal review before executing fetch_upstream.mjs or redistributing derived outputs"]
limitations: ["Repository files are MIT licensed, but the setup script downloads code from PDoomVideo whose repository has no declared open-source license; the MIT grant does not cover that upstream code","Do not assume commercial reuse or redistribution rights to downloaded third-party code","The main README and detailed workflow are largely Chinese; translation or adaptation may be required","Output quality and resource consumption vary with source audio and agent-generated rendering code"]
---

## Overview

Paint MV Skills is a **collection of four coordinated agent skills**, not an image generator or a single-model music-video service. It orchestrates storyboard creation, visual design, lyric/beat alignment, chapter-based animation, local frame rendering and MP4 encoding.

## Critical license boundary

The project's own files carry an **MIT LICENSE**, but its `fetch_upstream.mjs` script retrieves source code from [PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) at a pinned commit. The upstream README explicitly says PDoomVideo has **no declared open-source license** and the MIT license **does not cover the downloaded material**. Therefore, do not infer unrestricted redistribution or commercial use of derived code. Inspect the exact fetched files and seek appropriate permission when needed.

## Production fit

Useful as a technical reference for lyric synchronization, watercolor-style code rendering, project partitioning and contact-sheet QA. The accompanying documentation is largely in Chinese and may need translation.

**Official source:** [lintsinghua/paint-mv-skills](https://github.com/lintsinghua/paint-mv-skills). **Repository license:** MIT; downloaded upstream content excluded.
