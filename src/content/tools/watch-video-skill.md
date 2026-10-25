---
name: "Watch Video Skill"
summary: "A Claude skill that combines sampled video frames with timestamped transcripts to produce structured notes about a video."
category: "Media & Creative"
url: "https://github.com/Newuxtreme/watch-video-skill"
repository: "https://github.com/Newuxtreme/watch-video-skill"
tags: ["Claude Code", "Video analysis", "Transcripts", "Frames"]
verification: "confirmed"
---

Watch Video Skill extracts a transcript and still frames from online or local videos. The agent can use these artifacts to summarize what was said and shown, referencing the timeline.

**Useful for:** reviewing tutorials, inspecting video content before editing, and documenting visual demonstrations.

**Considerations:** dependencies include FFmpeg and yt-dlp, with optional transcription APIs when subtitles are unavailable. Using fewer frames limits cost but may omit short visual events. Respect copyright and site download policies.
