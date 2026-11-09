---
title: "Agent Workspace: Local Speech, Markdown Memory, and Reusable Skills"
summary: "An architecture pattern for coding agents that combines a configurable model endpoint, optional on-device speech, Markdown knowledge files, and task-specific skills."
kind: "workflow"
category: "Agent Skills"
tags: ["Agent architecture","Model routing","Knowledge base","Speech","Skills","Privacy"]
sourceNote: "Based on a shared Claude Agentic OS architecture post. This is a reusable workflow pattern, not a verified product or new framework; no specific Jev router implementation is asserted."
relatedUrl: "https://github.com/anthropics/skills"
---

## Goal

Build a repeatable agent-assisted work environment without mistaking an attractive architecture diagram for a turnkey product. Keep the model, voice, notes, skills and execution layers independently replaceable.

## Practical layers

1. **Agent and model gateway:** The coding agent handles planning, tool use and user approvals. Configure the model provider via generic base URL, API key and model name rather than hard-coding a specific vendor or router.
2. **Speech input (optional):** [faster-whisper](https://github.com/SYSTRAN/faster-whisper) can transcribe microphone or recorded audio locally.
3. **Speech output (optional):** [Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx) can synthesize audio from text. STT and TTS are independent components.
4. **Human-readable memory:** Store selected notes, decisions and runbooks as Markdown files. [Obsidian](https://obsidian.md) can be a convenient editor, but an agent may use regular files without Obsidian.
5. **Reusable tasks:** Define narrow Agent Skills with explicit inputs, expected outputs, resource permissions, acceptance criteria and retry limits.
6. **Execution and review:** Scheduled or asynchronous jobs should log status, require human approval for irreversible actions and avoid overlapping ownership with existing orchestrators.

## Suggested vault structure

```text
knowledge/
  raw/           # incoming material and source references
  wiki/          # reviewed concepts, SOPs and stable decisions
  outputs/       # generated, checked deliverables
  skills/        # task definitions or links to canonical skills
```

Avoid copying an entire project repository into notes when a link, summary or source-controlled document would suffice. Existing project documentation should remain the canonical source when possible.

## Privacy and implementation cautions

- Local STT/TTS can keep **audio processing** on the device. If transcripts or prompts are sent to a remote model, the conversation is **not fully local**.
- A proprietary notes app is not equivalent to an open-source memory service.
- A diagram naming a router called **Jev** does not establish a verifiable public routing project. Do not confuse it with separately cataloged projects using similar names.
- Do not install third-party Agent Skills or allow shell access without inspecting their source and permissions.

## Reusable evaluation prompt

```text
Review our existing coding-agent environment and identify one recurring task that would benefit from a reusable skill.
1. Find the canonical project documentation and existing skills.
2. Propose a minimal skill with inputs, outputs, failure modes and required permissions.
3. Identify whether local STT, TTS or Markdown notes add concrete value.
4. Prefer existing model routing and job orchestration; do not create redundant infrastructure.
5. Provide a test plan and measurable acceptance criteria. Ask before enabling writes or external actions.
```

**References:** [Agent Skills examples](https://github.com/anthropics/skills), [faster-whisper](https://github.com/SYSTRAN/faster-whisper), [kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx), [Obsidian](https://obsidian.md).
