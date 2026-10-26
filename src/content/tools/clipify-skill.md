---
name: "Clipify"
summary: "A Claude Code skill for selecting source-video moments and exporting reframed clips with caption styles."
category: "Media & Creative"
url: "https://github.com/louisedesadeleer/clipify"
repository: "https://github.com/louisedesadeleer/clipify"
tags: ["Claude Code", "Video clipping", "Captions", "Shorts"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
aliases: ["Clipify"]
verification: "confirmed"
---

## Overview

Clipify uses transcripts and media-processing scripts to propose excerpts, trim selected sections, reframe them to common aspect ratios, and burn in captions. Some camera-follow behavior uses visual motion heuristics rather than face recognition.

**Use cases:** turning interviews and podcasts into vertical clips with subtitles.

**Caveats:** output selection and speaker framing need editorial review. The documented workflow uses FFmpeg, Python, and Whisper. The repository declares an MIT license. Respect source-video rights and publishing rules.
