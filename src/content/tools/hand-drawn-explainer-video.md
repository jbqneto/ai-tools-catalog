---
name: "Hand-Drawn Explainer Video (ARYANJATHAR)"
summary: "A Claude Code explainer-video skill that reveals drawings stroke by stroke while synchronizing diagrams, captions and sound with a generated narration track."
category: "Media & Creative"
url: "https://github.com/ARYANJATHAR/explainer-video-plugin"
repository: "https://github.com/ARYANJATHAR/explainer-video-plugin"
tags: ["Agent Skills","Hand-drawn animation","Explainer video","SVG","Voice-over","FFmpeg","Shorts"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["ARYANJATHAR/explainer-video-plugin","explainer-video@aryan-skills"]
useCases: ["Turn an article or script into a narrated hand-drawn educational Short","Create stroke-by-stroke visual explanations synchronized with spoken cues","Render vertical and landscape sketched diagrams using code"]
capabilities: ["Sketch-like SVG diagrams and word-aligned motion cues","Narration generation and timing saved in a project timeline","Headless-browser frame capture and FFmpeg assembly into MP4"]
requirements: ["Claude Code or a compatible agent with access to the skill","Python 3.10+, Node.js 18+, Chrome-family browser and FFmpeg","Internet access for edge-tts voice generation, with permission to send script text to Microsoft"]
limitations: ["A functional match for a social screenshot labeled Hand-Drawn Explainer; the post did not show a canonical repository link, so provenance of the pictured example is unconfirmed","Narration text is sent to Microsoft's Edge TTS service; avoid confidential scripts and check commercial/service terms","The output still requires editorial review for narration errors, timing and media rights"]
---

## Overview

This project is a **verified implementation of a hand-drawn explainer skill**, matching the screenshot's described stroke-by-stroke effect. The screenshot did **not** include its repository address, so it would be inaccurate to claim this is conclusively the creator's exact tool.

The skill can turn a topic or script into a narrated MP4 with progressive drawings, precisely timed icons and captions, and a music bed, using browser-rendered SVG and FFmpeg.

## Requirements and privacy

The upstream documentation specifies Python 3.10+, Node 18+, a Chromium-based browser and FFmpeg. It uses `edge-tts` for narration, which **sends the script text to Microsoft**. Commercial service terms and external dependencies must be checked before production use.

**Verified matching repository:** [ARYANJATHAR/explainer-video-plugin](https://github.com/ARYANJATHAR/explainer-video-plugin). **License:** MIT. **Screenshot-to-repository attribution:** unconfirmed.
