---
name: "Vox Explainer Skill (CK42BB)"
summary: "A Claude Code skill that coordinates a Vox-style visual explainer from topic and script through narration, AI-generated keyframes, animation, music and FFmpeg assembly."
category: "Media & Creative"
url: "https://github.com/CK42BB/vox-explainer-skill"
repository: "https://github.com/CK42BB/vox-explainer-skill"
tags: ["Agent Skills","Explainer video","Documentary","Voice-over","AI video","FFmpeg","Atlas Cloud"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["CK42BB/vox-explainer-skill","vox-explainer-skill"]
useCases: ["Prototype short documentary-style explainers from a supplied topic and fact-checked script","Generate collage-like visual storytelling and voiceover timed to scene durations","Experiment with a repeatable production pipeline that can regenerate individual scenes"]
capabilities: ["Storyboard script, narration and visual beat decomposition","Keyframe image generation and animation from a consistent visual anchor","Voice-first timeline alignment, music and subtitle assembly into MP4"]
requirements: ["Claude Code or a compatible skill-aware agent","An Atlas Cloud API key and paid or credited access to the required models","Python 3.10+ requests, FFmpeg and FFprobe with libass support"]
limitations: ["The screenshot names Vox Explainer but does not provide a repo URL; this is a verified matching implementation, not a confirmed source of the post","External services receive prompts and generated material, with variable usage costs; do not describe production as fully local or free","Verify all claims and source media rights before publishing documentary material","The upstream README contains a placeholder clone command; use the actual canonical repository URL instead"]
---

## Overview

This verified **Vox Explainer** implementation coordinates an agent's short explainer workflow: topic → draft script → generated narration → styled keyframes → animated clips → music → FFmpeg assembly. Its design approach uses a visual anchor for continuity and measures voice-over timing before conforming scenes.

The original social screenshot lacked a GitHub link. There are multiple distinct Vox-style skill projects, so **do not equate the screenshot's author with CK42BB** without further source evidence.

## Dependencies and trade-offs

This workflow uses the **Atlas Cloud** API to access third-party voice, image, video and music generation models. A provider key and budget are required; costs and availability can change. Local FFmpeg assembly does not mean the image, voice or video generation happens locally. Fact-checking, captions and asset licenses remain editorial responsibilities.

The upstream README includes an example `YOURUSER` cloning placeholder; use [the canonical repository](https://github.com/CK42BB/vox-explainer-skill) rather than copying that placeholder.

**Verified matching repository:** [CK42BB/vox-explainer-skill](https://github.com/CK42BB/vox-explainer-skill). **License:** MIT.
