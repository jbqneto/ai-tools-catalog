---
name: "FunClip"
summary: "An open-source video clipping application using speech recognition, speaker identification, optional LLM assistance, and subtitle export."
category: "Media & Creative"
resourceType: "Application"
aiInvolvement: "Core AI"
url: "https://github.com/modelscope/FunClip"
repository: "https://github.com/modelscope/FunClip"
aliases: ["modelscope/FunClip", "FunASR FunClip"]
tags: ["Video clipping", "Speech recognition", "AI editing", "Subtitles", "Speaker diarization", "Gradio"]
useCases: ["Cut videos by selecting transcribed passages or identified speakers", "Generate SRT subtitle files for full videos and selected segments", "Explore speech-driven and optional LLM-assisted clip selection"]
capabilities: ["FunASR-based ASR and timestamp alignment for transcript-guided editing", "Speaker-based selection, hotword support and multi-segment clipping", "Local Gradio web interface, command-line operations and optional language-model services"]
requirements: ["Python environment with dependencies and compatible speech-model weights", "Appropriate PyTorch and audio-runtime setup for the target machine", "Optional credentials and network access for externally hosted model services"]
limitations: ["Not a guaranteed viral-moment detector; highlight suggestions require editorial selection", "Model language coverage, recognition accuracy and hardware requirements vary by backend", "The repository's MIT license covers application code, not all separately downloaded model weights", "Optional third-party LLM and transcription services may incur usage costs and transmit data"]
verification: "confirmed"
---

## Overview

[FunClip](https://github.com/modelscope/FunClip) uses speech recognition to turn recorded speech into timestamped passages. Users can select words or speakers and generate corresponding video cuts. The project offers a Gradio interface and a command-line pipeline, including full and clipped SRT subtitles. LLM-assisted selection is an additional workflow rather than a guarantee of audience performance.

## Practical considerations

Install the project's compatible Python environment and model dependencies before processing footage. Backend options include Paraformer and documented additional speech-recognition integrations; capabilities differ among those models. The application code is MIT-licensed, while model weights retain their own licenses.

The promotional screenshot is not a verified representation of the actual FunClip UI.

**Official repository:** https://github.com/modelscope/FunClip
