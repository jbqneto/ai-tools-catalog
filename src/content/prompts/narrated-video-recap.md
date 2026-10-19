---
title: "Narrated Video Recap Workflow"
summary: "Turn long-form video into a shorter fact-checked summary with timecoded clips and optionally narrated commentary."
kind: "workflow"
category: "Video Production"
tags: ["Summarization", "Transcription", "Video"]
sourceNote: "Inspired by a skill-list screenshot posted by @elrocha.ia; the exact installation source was not established."
---

## Reference concept

The shared post calls this `/video-recap-skills`: a long video becomes a short narrated recap. No exact source repository was provided.

## Reusable agent instruction

```text
Create a concise narrated recap of [SOURCE_VIDEO].
Target length: [TARGET_MINUTES] minutes.
Audience: [AUDIENCE]
Language: [LANGUAGE]

1. Extract or transcribe the audio with timestamps.
2. Identify key factual segments and their source timecodes.
3. Draft a concise narrative; preserve qualifiers and uncertainty.
4. Provide an edit decision list referencing source timecodes.
5. Use original commentary and only footage with appropriate rights.
6. Generate captions and optional narration (with approval).
7. Render the recap and validate synchronization.
8. Supply the source map and a list of any omitted context.
```

## Notes

Summarization can distort meaning when segments are removed from context. Review claims against the original material and respect platform rules, copyright, privacy, and attribution requirements.
