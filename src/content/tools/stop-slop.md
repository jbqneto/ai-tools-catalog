---
name: "Stop Slop"
summary: "A writing-focused agent skill that identifies formulaic AI prose, repetitive rhetorical patterns and inflated claims, then guides concise editorial revisions."
category: "Media & Creative"
url: "https://github.com/hardikpandya/stop-slop"
repository: "https://github.com/hardikpandya/stop-slop"
tags: ["Agent Skills","Writing","Editing","Editorial QA","AI prose","Content"]
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["hardikpandya/stop-slop","Stop Slop writing skill"]
useCases: ["Edit public website copy to remove boilerplate claims and repetitive phrasing","Review documentary scripts and social posts while preserving factual accuracy","Set repeatable editorial checks for agents producing marketing or educational content"]
capabilities: ["A core SKILL.md and reference files for phrases, structure and before/after edits","Criteria for directness, varied rhythm, reader trust, authenticity and concision","Portable instructions for Claude Code, projects and other LLM workflows"]
requirements: ["A compatible agent or prompt context that can read skill files","The original text, intended audience, language and editorial constraints","Human review to preserve important facts and deliberate author voice"]
limitations: ["Overly rigid anti-pattern rules may remove legitimate rhetoric or culturally appropriate language","The examples and rules are primarily written in English and need adaptation for other languages","It does not fact-check drafts or establish authorship and cannot reliably prove whether text was AI-generated"]
---

## Overview

Stop Slop is an editorial skill for identifying generic AI-written prose: padded openings, repetitive contrasts, implausibly polished claims and monotonous sentence patterns. It teaches a coding or writing agent to edit with more direct, concrete language.

## Not a duplicate of Humanizer

The catalog already includes [Humanizer](https://github.com/blader/humanizer), a separate author's skill. Both target generic writing, but they have distinct source repositories and editorial heuristics. They should **not** be merged as aliases. A useful test is to run both separately on the same sample and review whether they preserve the intended factual meaning.

## Limits

This is a writing guide, not a linguistic detector or factual verifier. For multilingual content, do not impose English-specific style bans mechanically.

**Official source:** [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop). **License:** MIT.
