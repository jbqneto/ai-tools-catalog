---
name: "Kokoro ONNX"
summary: "A Python wrapper for Kokoro text-to-speech models using ONNX Runtime, supporting local voice synthesis with downloadable model and voice files."
category: "Media & Creative"
url: "https://github.com/thewh1teagle/kokoro-onnx"
repository: "https://github.com/thewh1teagle/kokoro-onnx"
tags: ["Text to speech","Kokoro","ONNX Runtime","Python","Local AI","Voice synthesis"]
resourceType: "Library / Framework"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["kokoro-onnx","Kokoro TTS ONNX"]
useCases: ["Generate synthetic narration for local prototypes","Add voice replies to a personal assistant using an on-device TTS engine","Evaluate deterministic TTS pipelines for a video-production stack"]
capabilities: ["Local text-to-speech synthesis using ONNX Runtime","Multiple downloadable voices and multilingual model assets","CPU and supported hardware acceleration options"]
requirements: ["Python 3.10+ and compatible ONNX Runtime environment","Kokoro ONNX model file and matching voice assets","Memory and audio-processing capacity appropriate to the model"]
limitations: ["Language, pronunciation and voice quality vary by model, voice and phonemization setup","A TTS engine does not transcribe microphone input or implement a complete voice agent","Disclose synthetic speech when appropriate and respect rights associated with supplied reference voices"]
---

## What it does

[Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx) enables local text-to-speech from Kokoro models through ONNX Runtime. Its Python examples download separate ONNX model files and voice assets. This is especially useful for prototyping voice responses without paying for every cloud TTS request.

## Useful workflows

- Turn an assistant's reply into spoken audio.
- Produce a draft narration or preview a script voice.
- Combine with an STT engine such as faster-whisper in a modular voice interface.

## Architectural limits

This is a **TTS inference library**, not an STT model, orchestration framework or standalone video editor. Voices and language coverage vary. Calling a remote language model can still expose text even when recording and TTS are local.

## Licenses

The **kokoro-onnx wrapper is MIT licensed**; the official README identifies the **Kokoro model as Apache-2.0**. Verify the specific model, downloaded voice assets and dependencies before commercial use.

**Official source:** [thewh1teagle/kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx).
