---
name: "assistant-ui"
summary: "Composable React and TypeScript components for AI chat interfaces, including streaming messages, attachments, tool interactions, and custom backend adapters."
category: "Developer Tools"
url: "https://github.com/assistant-ui/assistant-ui"
repository: "https://github.com/assistant-ui/assistant-ui"
tags: ["React","TypeScript","AI chat","Chat UI","Vercel AI SDK","Frontend"]
resourceType: "Library / Framework"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["assistant-ui React"]
useCases: ["Embed a conversational assistant into a React or Next.js product","Prototype streaming chat interfaces connected to a custom LLM gateway","Display tool calls and approval flows in a SaaS dashboard"]
capabilities: ["Composable chat UI primitives and interactive message states","Integrations with Vercel AI SDK, LangGraph and custom runtimes","Attachments, streaming, retries and accessible chat components"]
requirements: ["React or compatible frontend application","A compatible backend/runtime to deliver AI responses","Backend authentication and authorization for tool and file actions"]
limitations: ["A UI library, not an AI model, API gateway or hosted chatbot by itself","Provider costs and runtime hosting are separate","Optional managed cloud services may have different terms and pricing"]
---

## What it does

[assistant-ui](https://github.com/assistant-ui/assistant-ui) is a React and TypeScript library for building AI-chat experiences without implementing every interface primitive from scratch. It offers message threads, composers, streaming responses, attachment and tool interfaces, and adapters for backend runtimes.

## Practical applications

- Add a task-focused assistant to an existing Next.js dashboard.
- Connect a web chat frontend to a self-hosted or provider-backed LLM API.
- Build tool-execution and human-approval interfaces without designing chat state from zero.

## Architecture and limitations

This is a **UI library**, not an LLM, MCP server or full AI product. The application still needs model inference, secure backend endpoints, session management, content validation and authorization. Start with a minimal thread and connect it to your existing backend rather than adding another parallel gateway.

## License

The core project is **MIT licensed**. Optional managed products such as Assistant Cloud are separate offerings. See the [official repository](https://github.com/assistant-ui/assistant-ui) for current integration packages and examples.

**Official source:** [assistant-ui/assistant-ui](https://github.com/assistant-ui/assistant-ui).
