---
name: "Agentic Inbox"
summary: "A Cloudflare Workers-hosted email client with an integrated AI agent for searching messages, generating drafts, and assisting with mailbox actions."
category: "Agents & Automation"
resourceType: "Application"
aiInvolvement: "Core AI"
url: "https://github.com/cloudflare/agentic-inbox"
repository: "https://github.com/cloudflare/agentic-inbox"
aliases: ["Cloudflare Agentic Inbox", "cloudflare/agentic-inbox"]
tags: ["Email", "AI agents", "Cloudflare Workers", "Durable Objects", "R2", "MCP"]
useCases: ["Operate an email inbox with AI-assisted search and reply drafting", "Explore an agent-enabled self-hosted mail workflow on Cloudflare infrastructure", "Connect trusted agent tools to supported mailbox actions through MCP"]
capabilities: ["Email send, receive, search, folders, attachments and threaded replies", "AI agent panel with mail tools and suggested drafts requiring confirmation to send", "Cloudflare Durable Objects and SQLite per mailbox, R2 attachments, and an MCP endpoint"]
requirements: ["Cloudflare account and controlled domain with Email Routing and Email Service", "Workers AI, R2, Durable Objects and production Cloudflare Access configuration", "Node.js/npm and a working deployment with the documented Worker secrets"]
limitations: ["The app is hosted on the user's Cloudflare services, not an entirely offline local email client", "All users admitted by the shared Cloudflare Access policy can access all mailboxes; no per-mailbox authorization is implemented", "MCP clients permitted by the same Access boundary can operate on any mailbox by mailboxId", "Email content and agent prompts require a privacy, access-control and external-service review before deployment"]
verification: "confirmed"
---

## Overview

[Agentic Inbox](https://github.com/cloudflare/agentic-inbox) is a Cloudflare Workers-based email client with an embedded AI assistant. Each mailbox uses a Durable Object with SQLite storage and R2-backed attachments. Cloudflare Email Routing and Email Service handle receiving and sending email. The assistant can search mail and draft replies, with confirmation required for automated draft sending.

## Security boundary

**Important:** according to the project's README, a single Cloudflare Access policy is the authorization boundary across all mailboxes. The app has **no separate per-mailbox authorization**, including for the MCP endpoint. Do not deploy this as a multi-tenant or multi-user mailbox service unless that behavior fits the trust model or additional access controls are implemented.

Apache-2.0 project license; Cloudflare infrastructure usage may be separately billed.

**Official repository:** https://github.com/cloudflare/agentic-inbox
