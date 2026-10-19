---
title: "FFmpeg Video Editing Workflow"
summary: "Combine clips, resize footage, adjust speed, and extract audio through reproducible FFmpeg commands."
kind: "workflow"
category: "Video Editing"
tags: ["FFmpeg", "Editing", "CLI"]
sourceNote: "Inspired by a skill-list screenshot posted by @elrocha.ia; the exact installation source was not established."
relatedUrl: "https://ffmpeg.org/"
---

## Reference concept

The screenshot labels this idea `/video-edit`. That label alone does **not** identify a specific installable skill. The workflow below uses FFmpeg, an established video-processing tool.

## Reusable agent instruction

```text
Act as a careful video editor using FFmpeg.

Input assets: [INPUT_FILES]
Requested tasks: [CUTS], [RESIZE], [SPEED], [AUDIO]
Output: [OUTPUT_PATH]

1. Inspect each input with ffprobe. Report resolution, FPS, duration,
   codecs, and audio stream status.
2. Propose an edit decision list with timecodes before processing.
3. Never overwrite the originals.
4. Normalize codecs, framerates, and resolution before concatenating.
5. Produce the edit using reproducible FFmpeg commands.
6. Check the exported duration, audio, black frames, and sync.
7. Report the exact commands used and the output location.
```

## Notes

Concatenation without re-encoding requires compatible codecs and streams. Speed changes and audio pitch correction are separate processing steps; inspect the final result rather than trusting a successful process exit.
