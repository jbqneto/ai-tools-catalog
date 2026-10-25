---
title: "AI Video Production Skills: A Practical Workflow Map"
summary: "A reference guide for choosing and combining verified video-focused agent skills for design, rendering, shorts, subtitles, analysis, and production."
kind: "workflow"
category: "Video Production"
tags: ["Video", "Agent skills", "Remotion", "HyperFrames", "Claude Code"]
sourceNote: "Based on screenshots of a community video-skill roundup. Project links were independently checked; unconfirmed names are explicitly marked."
relatedUrl: "https://github.com/heygen-com/hyperframes"
---

## How to use this guide

This is a **map of project types**, not an installation bundle, a recommendation ranking, or a claim that the projects work together automatically. Tool capabilities depend on installed versions and supported environments. Review permissions and licensing for each component.

## 1. Programmatic motion graphics and product videos

- **[HyperFrames](https://github.com/heygen-com/hyperframes):** HTML/CSS and seekable animations rendered to MP4.
- **[Remotion Agent Skills](https://github.com/remotion-dev/skills):** maintained instructions for creating and rendering React-based videos.
- **[Video Shotcraft](https://github.com/Vincentwei1021/video-shotcraft):** editorial shots and UI-based cinematic product videos.
- **[Motion Skills](https://github.com/iart-ai/motion-skills):** skill collections for kinetic typography, charts, explainers, and social-video motion.

## 2. Short-form video and channel workflows

- **[Clipify](https://github.com/louisedesadeleer/clipify):** extracts candidate segments and creates captioned social clips.
- **[Claude Shorts](https://github.com/AgriciDaniel/claude-shorts):** interactive long-video segmentation with animated captions and Remotion rendering.
- **[YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill):** plans titles, scripts, packaging, and channel-facing editorial work. It is a planning aid, not evidence of API access or automatic publishing.

## 3. Watching and analyzing source videos

- **[Claude Video Watch](https://github.com/bradautomates/claude-video):** sampled frames and synchronized transcripts.
- **[Watch Video Skill](https://github.com/Newuxtreme/watch-video-skill):** video analysis with structured notes and timeline references.
- **[Claude Watch](https://github.com/taoufik123-collab/claude-watch):** scene-change sampling and opening-hook inspection.
- **[Claude Video Vision](https://github.com/Moh4696/claude-video-vision):** a small community project for local frame sampling and transcription.

All these systems provide selected frames and text, **not continuous full-frame perception**. Verify conclusions against the original video, especially for quick cuts or on-screen details.

## 4. End-to-end production and agent workflow practices

- **[Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit):** an AI-assisted video production workspace already present in the Tools directory.
- **[OpenMontage](https://github.com/Open-Montage-app/OpenMontage):** a multi-stage agent pipeline from concept and script to media selection, narration, and rendering.
- **[Superpowers](https://github.com/obra/superpowers):** general engineering methodology for planning, implementation, and verification; not video-specific.
- **[Anthropic Skill Creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator):** creates and iteratively tests reusable agent skills.

## Names from the screenshots that need stronger attribution

The labels **Motion Graphics** and **Omni Captions** appeared in the submitted slides, but a unique matching source repository was not established. They are preserved here as *unverified references* rather than added as software listings. We should not assume a similarly named repository is the same project.

The video-skills roundup was incomplete in the submitted images: entries 1–4 and 17–20 were not supplied in this set. No missing names were inferred.

## Reusable evaluation prompt

```text
Evaluate the following video-related AI agent skill before installing it:
[OFFICIAL_REPOSITORY_URL]

Goal: [PRODUCTION_GOAL]
Source media: [MEDIA_FORMATS]
Required output: [RESOLUTION], [FPS], [ASPECT_RATIO], [DURATION]

1. Read the current README, license, skill instructions, scripts, and dependencies.
2. Explain which tasks this project implements and which need external tools.
3. Identify data access, execution permissions, paid APIs, and licensing constraints.
4. Compare it to the current workflow without assuming it improves results.
5. Propose a small proof of concept using non-sensitive sample media.
6. Do not install, execute, upload, or publish anything without permission.
7. Define measurable acceptance criteria: visual quality, accuracy,
   editing control, render time, and reproducibility.
```

## Editorial cautions

Do not trust promotional claims about automated virality, exact cost savings, or fully unattended video production without a reproducible benchmark. Media licensing, transcription accuracy, and generated editing decisions still require review.
