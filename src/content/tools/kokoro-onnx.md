---
name: "Kokoro ONNX"
summary: "A Python text-to-speech library running Kokoro voice models through ONNX Runtime locally, with selectable voices, languages, and CPU or GPU execution."
category: "Media & Creative"
url: "https://github.com/thewh1teagle/kokoro-onnx"
repository: "https://github.com/thewh1teagle/kokoro-onnx"
tags: ["Text to speech","Kokoro","ONNX","Python","Local AI","Narration"]
resourceType: "Library / Framework"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["kokoro-onnx","thewh1teagle kokoro"]
useCases: ["Generate synthetic narration locally for video projects","Prototype speaking assistants and accessibility features","Compare on-device TTS voice quality, runtime, and cost"]
capabilities: ["Text-to-speech synthesis using Kokoro models via ONNX Runtime","Multiple voice choices and supported languages","CPU execution with optional hardware acceleration and model variants"]
requirements: ["Python 3.10 or newer and an appropriate ONNX Runtime environment","Compatible Kokoro model and voice asset downloads","Voice and pronunciation testing for the target language"]
limitations: ["Quality and language support vary by voice and model; do not assume all languages and accents are equally supported","Does not perform speech recognition or conversation orchestration","Respect consent and disclosure when using realistic synthetic voices"]
---


## Overview

[Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx) provides a Python wrapper around Kokoro text-to-speech models using ONNX Runtime, supporting local speech generation with downloadable model and voice files.

## Useful for

- Producing narration audio on an existing computer.
- Building speaking interfaces and voice-based apps.
- Evaluating TTS voices, pronunciations, and performance independently of cloud API pricing.

## Not the same as faster-whisper

**Kokoro ONNX creates speech from text**. The separate **faster-whisper** project transcribes audio into text. Combining the two can support a local spoken assistant, but they do not create an autonomous agent by themselves; a dialogue model and application logic are additional layers.

## License and limits

The wrapper repository is **MIT licensed**, while the project's README lists the **Kokoro model as Apache-2.0 licensed**. Review voice assets and dependencies for any additional distribution requirements. Model processing can run locally, but appropriate hardware, downloaded assets, and accent/language evaluation are still necessary.

**Official source:** [thewh1teagle/kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx).
