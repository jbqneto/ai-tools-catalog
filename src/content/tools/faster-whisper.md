---
name: "faster-whisper"
summary: "A CTranslate2-based Python implementation of Whisper speech recognition with efficient CPU and GPU inference and configurable quantization."
category: "Media & Creative"
url: "https://github.com/SYSTRAN/faster-whisper"
repository: "https://github.com/SYSTRAN/faster-whisper"
tags: ["Speech recognition","Transcription","Whisper","Python","CTranslate2","Offline AI"]
resourceType: "Library / Framework"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["SYSTRAN faster-whisper"]
useCases: ["Transcribe local narration for subtitle alignment","Extract speech from recorded tutorials or interviews","Evaluate on-premises batch transcription for a content-production pipeline"]
capabilities: ["Whisper-model transcription on CPU and compatible GPUs","INT8 quantization and optional batched inference","Word timestamps and voice activity detection integrations"]
requirements: ["Python 3.9+ and an appropriate CTranslate2-compatible environment","A downloaded compatible speech-recognition model and sufficient RAM or VRAM","CUDA and cuDNN versions compatible with the installed runtime for NVIDIA GPU use"]
limitations: ["Transcription accuracy varies with language, audio quality and selected model","Benchmark gains are workload-dependent and are not guaranteed for every device","Whisper transcription does not synthesize speech; pair with a separate TTS engine for voice output"]
---

## What it does

[faster-whisper](https://github.com/SYSTRAN/faster-whisper) implements OpenAI Whisper model inference using [CTranslate2](https://github.com/OpenNMT/CTranslate2/). It supports CPU/GPU inference, reduced-precision operation and batched transcription. Audio decoding uses PyAV and does not require a separate FFmpeg executable in the standard Python package.

## Useful workflows

- Generate local transcripts for subtitles and content review.
- Convert recorded audio into searchable text.
- Run repeatable voice-to-text steps before sending a transcript to an agent.

## Not a voice assistant by itself

This is an **STT inference library**, not a chat UI, agent architecture or text-to-speech engine. To implement a voice assistant, combine transcription, your chosen model endpoint, and TTS; preserve privacy boundaries when submitting transcripts to a remote LLM.

## License and performance

The repository is **MIT licensed**. The project publishes performance benchmarks, but speed, memory, and accuracy depend on device, batch size, CUDA/CTranslate2 configuration and model. Confirm the license of any separately downloaded model.

**Official source:** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper).
