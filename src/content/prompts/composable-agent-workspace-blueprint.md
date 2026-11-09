---
title: "Composable Agent Workspace: Models, Routing, Voice, Notes, and Skills"
summary: "An architectural reference for combining models, gateways, local speech tools, Markdown knowledge, and reusable agent skills without treating the stack as one product."
kind: "workflow"
category: "Agent Skills"
tags: ["Agent architecture","Model routing","Speech","Knowledge base","Agent Skills","Automation","Local first"]
sourceNote: "Inspired by a community 'Claude Agentic OS' slide. This is a reusable architecture pattern, not a verified standalone product, a single installer, or an official Claude stack."
relatedUrl: "https://github.com/anthropics/skills"
---

## What this blueprint represents

A social-media slide described a "Claude Agentic OS" made of a powerful language model, a router, local voice input/output, an Obsidian vault, and custom skills. It is best understood as a **composable workflow design** — **not a standalone open-source repository** and not an official, universal setup.

The model names and a claimed router shown in a screenshot are examples, not architecture requirements. Do not mistake the independently cataloged **Jev Trader** trading project for a verified general-purpose model router.

## Five independent layers

1. **Reasoning model:** choose an LLM through a provider or local inference API based on quality, latency and cost.
2. **Model gateway/router:** authenticate and direct requests to the right provider or local model; maintain neutral model IDs and configuration instead of hardcoding one vendor.
3. **Voice layer (optional):** [faster-whisper](https://github.com/SYSTRAN/faster-whisper) for STT and [Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx) for TTS. Add a turn-taking or audio-transport service where needed.
4. **Knowledge and memory:** project documentation and/or [Obsidian](https://obsidian.md/) Markdown vaults; add explicit indexing, retrieval scopes and permissions. A folder of notes does not automatically mean persistent memory.
5. **Skills and execution:** task-specific instructions in compatible Agent Skills, plus approved MCP servers/APIs or application tools for external actions.

## Example information flow

`User message or voice -> STT (if voice) -> agent/orchestrator -> model gateway -> LLM -> tools / scoped knowledge -> response -> TTS (if voice)`

A scheduled automation can trigger the same orchestrator through a queue. A skill describes *how* to perform a task; it is not a queue, daemon, execution scheduler, or substitute for authorization.

## Design principles

- **Reuse existing services first.** Do not deploy a second agent framework or voice service unless it solves a specific gap.
- Keep model selection independent of the gateway implementation and credentials outside prompts.
- Use source-of-truth project docs, data provenance, and retrieval filters to avoid stale or conflicting agent memory.
- Require human approval for external side effects, protected data access, deployments and publishing.
- Use isolated tests and measurements for speech accuracy, retrieval relevance and operating cost.
- Schedule recurring work through a queue/scheduler, not by assuming the language model stays active forever.
- Treat downloaded skills, MCP tools and community plugins as executable software requiring review.

## Reusable architecture-evaluation prompt

```text
Assess my existing AI-agent stack before recommending any new installation.

My goal: [GOAL]
Current orchestration, gateway, data stores, queues, and voice tools: [STACK]
Clients and operating systems: [CLIENTS]
Privacy, cost, access and scheduling constraints: [CONSTRAINTS]

1. Map each existing component to: model, router, voice (STT/TTS),
   durable knowledge, skill, tool/MCP, scheduler or executor.
2. Identify missing capabilities separately from products that only overlap.
3. Compare the smallest changes that would close the gaps.
4. Propose explicit data flow, credentials boundaries, retries and failures.
5. Define one reversible proof of concept and how success is measured.
6. List what should NOT be installed because it is already covered.

Never install anything, publish data, or execute external actions without approval.
```

## Related software (separate catalog entries)

- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) — STT.
- [Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx) — TTS.
- [Obsidian](https://obsidian.md/) — Markdown note application.
- [Anthropic Agent Skills](https://github.com/anthropics/skills) — examples of reusable task instructions.
- [Moonshine Voice](https://github.com/moonshine-ai/moonshine) — another voice technology, already cataloged; evaluate overlap before adding it to a stack.

This is a non-ranked reference, not a claim that one combined stack replaces production security, observability or maintenance.
