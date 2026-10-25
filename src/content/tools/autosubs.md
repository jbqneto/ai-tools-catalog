---
name: "AutoSubs"
summary: "A local-first subtitle generator offering offline transcription, speaker identification, and integration with DaVinci Resolve and Adobe video editors."
category: "Media & Creative"
url: "https://github.com/tmoroney/auto-subs"
repository: "https://github.com/tmoroney/auto-subs"
tags: ["Subtitles", "Speech-to-text", "Offline", "Diarization", "Video editing"]
verification: "confirmed"
---

## What it does

[AutoSubs](https://github.com/tmoroney/auto-subs) generates timestamped subtitles from video or audio on the user's computer. It provides a standalone application and integrations with **DaVinci Resolve**, **Adobe Premiere Pro**, and **After Effects**.

The project documents multiple local speech-recognition models, speaker labeling (diarization), translation/transcription options, and export to subtitle and editor-friendly formats. Its maintainers advertise coverage of more than 1,000 languages through supported models; support and accuracy differ substantially among models and languages.

## Useful for

- Creating and correcting subtitles without uploading recordings to a cloud transcription service.
- Identifying speakers and applying distinct subtitle styles.
- Importing captions into an existing editing timeline.
- Evaluating local speech-to-text tooling for repeatable video-production pipelines.

## Licensing and limitations

The **AutoSubs application** repository uses the **MIT license**, but separately downloaded transcription and alignment models can have other licensing conditions, including non-commercial restrictions on some optional models. Always check the relevant model license before commercial use.

Model downloads require an initial internet connection. Transcription speed, memory usage, word-level timing quality, and language coverage depend on the selected model and hardware.

For supported installation packages and integration instructions, consult the project's [README](https://github.com/tmoroney/auto-subs) and [CLI guide](https://github.com/tmoroney/auto-subs/blob/main/CLI.md).
