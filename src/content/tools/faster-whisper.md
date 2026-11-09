---
name: "faster-whisper"
summary: "A CTranslate2-based implementation of Whisper speech-to-text inference with CPU and GPU support, quantization, timestamps, and voice activity detection."
category: "Media & Creative"
url: "https://github.com/SYSTRAN/faster-whisper"
repository: "https://github.com/SYSTRAN/faster-whisper"
tags: ["Speech recognition","Transcription","Whisper","Python","CTranslate2","Subtitles"]
resourceType: "Library / Framework"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["SYSTRAN faster-whisper"]
useCases: ["Transcribe spoken narration into timed segments or subtitles","Build automated audiovisual quality checks and transcript search","Compare local CPU and GPU transcription backends for production workflows"]
capabilities: ["Whisper-based transcription via CTranslate2 inference","Optional word timestamps, voice-activity detection and batched transcription","CPU and supported NVIDIA GPU execution with selectable compute precision"]
requirements: ["Python 3.9 or newer and appropriate model files","Memory, compute, and optional supported CUDA/cuDNN libraries for GPU","Language-appropriate testing and correction for publishable subtitles"]
limitations: ["Model transcriptions can hallucinate or misrecognize names, especially in low-quality audio and music","Benchmark speedups depend on hardware, model size, batch settings and precision","Speech recognition does not generate voices; use a separate TTS system"]
---


## Overview

[faster-whisper](https://github.com/SYSTRAN/faster-whisper) is a Python implementation of Whisper inference using CTranslate2. It supports local transcription on CPU and supported GPUs, quantized inference, timestamped segments, voice-activity detection and batched processing.

## Typical use cases

- Build subtitles and captions for recorded speech.
- Transcribe voiceovers for searchable archives, automated editing or QA.
- Run local speech-to-text in processing pipelines without a mandatory hosted transcription API.

## Relation to Kokoro, Moonshine, and VoiceStudio

- **faster-whisper:** speech-to-text (**STT**), based on Whisper models.
- **Kokoro ONNX:** text-to-speech (**TTS**); generates speech rather than transcribing it.
- **Moonshine Voice:** a separate low-latency speech toolkit already in this catalog.
- **VoiceStudio:** a separate creator-oriented voice application already in this catalog.

These are distinct repositories, not duplicates of one another.

## Operational notes

Python 3.9+ is required. The project uses PyAV for media decoding, so an independently installed FFmpeg executable is not normally required for its basic transcription function. GPU inference has CUDA/cuDNN compatibility requirements. Speed benchmarks in the README are environment-specific and should not be treated as guaranteed gains.

The repository is **MIT licensed**; review model weights and upstream licenses separately.

**Official source:** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper).
