---
name: "Claude Video Vision"
summary: "An agent skill that analyzes local video files using sampled frames and locally transcribed audio."
category: "Learning & Research"
url: "https://github.com/Moh4696/claude-video-vision"
repository: "https://github.com/Moh4696/claude-video-vision"
tags: ["Video analysis", "Whisper", "Offline", "Agent Skills"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
---

## Overview

Claude Video Vision extracts still frames through FFmpeg and timestamped speech text through Whisper so an agent can summarize or answer questions about a video's audible and visible content.

**Use cases:** lecture notes, navigating recordings, locating visual events, and drafting accessibility descriptions.

**Caveats:** the documented skill primarily handles local files. It needs FFmpeg, Python, and a downloaded speech model. Frame sampling can miss rapid events; automatic transcripts are fallible. This is an independently maintained project, not a native Claude video feature.
