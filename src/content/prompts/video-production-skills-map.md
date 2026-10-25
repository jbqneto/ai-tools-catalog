---
title: "Video Production Agent Skills: Workflow Map"
summary: "A practical, non-ranked reference connecting agent skills for motion design, Shorts, video analysis, captions, and end-to-end production."
kind: "workflow"
category: "Video Production"
tags: ["Agent Skills", "Video", "Research", "Animation", "Editing"]
sourceNote: "Compiled from publicly shared tool-list screenshots; independent repository and documentation checks. Names and feature coverage may change."
relatedUrl: "https://github.com/heygen-com/hyperframes"
---

## Why these projects are separate

The projects in this guide are **not interchangeable**. Some are animation engines, some are instructions for coding agents, some analyze existing footage, and others supply broader video-production workflows. A skill package is not automatically a self-contained application.

This is a reference list, **not a ranking**.

## 1. Animation and motion graphics

- **[HyperFrames](https://github.com/heygen-com/hyperframes):** write HTML/CSS/GSAP compositions and render them to a video file.
- **[Remotion Agent Skills](https://github.com/remotion-dev/skills):** official guidance for authoring and rendering Remotion videos; used with Remotion itself.
- **[Video Shotcraft](https://github.com/Vincentwei1021/video-shotcraft):** storyboarding and animated product-shot recipes built around Remotion.
- **[Motion Skills](https://github.com/iart-ai/motion-skills):** independently installable instructional packs for different types of animation.
- **[Motion Graphics B-roll](https://github.com/Barty-Bart/motion-graphics):** create visual inserts that match specific moments in spoken footage.
- **[GSAP](https://github.com/greensock/GSAP):** a general JavaScript animation library, not a video encoder.

## 2. Shorts, video cuts, and YouTube

- **[Clipify](https://github.com/louisedesadeleer/clipify)** and **[Claude Shorts](https://github.com/AgriciDaniel/claude-shorts)** help prepare vertical clips from longer recordings.
- **[YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill)** provides scripting, packaging, planning, and review guidance; it does not publish or automatically retrieve your private YouTube metrics.
- **[AutoClip](https://github.com/zhouxiaoka/autoclip)** is a separate desktop video-clipping application, already listed in the main catalog.
- **[OpenChatCut](https://github.com/0xsline/OpenChatCut)** is a separate editing application with a real timeline and conversational editing capabilities.

## 3. Video understanding, transcription, and subtitles

- **[Claude Video Vision](https://github.com/Moh4696/claude-video-vision)** samples local video frames and locally transcribed speech.
- **[Watch Video Skill](https://github.com/Newuxtreme/watch-video-skill)** combines sampled frames with captions or transcripts for analysis.
- **[Claude Watch](https://github.com/devinilabs/claude-watch)** creates notes and screenshots from tutorials and lectures.
- **[Omni Captions Skills](https://github.com/lattifai/omni-captions-skills)** covers caption transcription, translation, and format conversion.
- **[AutoSubs](https://github.com/tmoroney/auto-subs)** is an application for generating subtitles and interfacing with video editors.

Video analysis from periodic still images can miss short events. Auto-generated subtitles can contain misheard words or incorrectly assigned speakers.

## 4. Full pipelines and supporting skills

- **[OpenMontage](https://github.com/Open-Montage-app/OpenMontage)** describes end-to-end video production pipelines from research and asset gathering to rendered output.
- **[Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit)** supplies production commands, templates, and tools; already in the catalog.
- **[Superpowers](https://github.com/obra/superpowers)** structures coding tasks and review, not video processing specifically.
- **[Anthropic Skill Creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)** helps create and evaluate custom skills; it does not directly render videos.

## Practical workflow for an agent-created video

1. **Brief:** define audience, message, target duration, aspect ratio, and approved source assets.
2. **Plan:** produce a shot list and scene-by-scene timing before writing the render pipeline.
3. **Build:** select an animation system (for example, HyperFrames or Remotion), and keep scene timing deterministic.
4. **Produce:** generate graphics, voiceover, and approved footage with clearly documented tools.
5. **Review:** inspect opening, scene boundaries, readability, synchronization, and source rights.
6. **Deliver:** export the MP4, verify its codec/duration, and retain editable sources.

## A reusable review prompt

```text
Evaluate these video-production repositories for my project:
[PROJECT_DESCRIPTION]

For each repository:
- Identify whether it is an editor, rendering framework, agent skill,
  AI model, or full production pipeline.
- Verify the official project URL and current license.
- State required runtimes, credentials, and any likely usage costs.
- Distinguish README claims from independently tested capabilities.
- Highlight dependencies, privacy risks, and copyright constraints.
- Recommend a minimal test using sample media only.
- Do not install, execute, publish, or overwrite anything yet.

End with a reproducible 10-second proof-of-concept acceptance checklist.
```

## Editorial note

This reference consolidates names seen in a social-media carousel. There is no evidence that every referenced skill has the same maintainer, licensing terms, maturity, or installation model. Source repositories are linked directly; no promotional earnings figures or stale star counts are presented.
