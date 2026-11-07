---
name: "Superpowers"
summary: "A collection of agent skills for structured planning, systematic debugging, test-driven implementation, and review of AI-assisted coding."
category: "Developer Tools"
url: "https://github.com/obra/superpowers"
repository: "https://github.com/obra/superpowers"
tags: ["Coding agents", "Planning", "TDD", "Systematic Debugging", "Agent Skills"]
resourceType: "Directory / Collection"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
useCases: ["Plan complex software changes before implementation", "Diagnose CI failures and runtime bugs using a root-cause process", "Require focused hypotheses, tests and verification for code changes"]
capabilities: ["Structured development and review skills", "Systematic debugging with investigation, pattern analysis, hypothesis testing and implementation", "Test-driven development and evidence-based completion workflows"]
requirements: ["A compatible coding-agent host", "Review and deliberately install only the skills needed for a given task"]
limitations: ["Not an autonomous guarantee of correct solutions", "Requires access to reproducible error logs and relevant source code", "Instructions and dependencies may vary across skill versions"]
---

## Overview

Superpowers provides an agent-development methodology for planning, implementation, tests, and code review.

### Included skill: Systematic Debugging

The [systematic-debugging skill](https://github.com/obra/superpowers/tree/main/skills/systematic-debugging) is part of **this existing Superpowers collection**, not another unrelated product. It specifies four stages: root-cause investigation, pattern analysis, hypothesis testing, then implementation and verification. This is useful when debugging build failures, multi-component API failures, and test regressions.

**Do not take promotional before/after time estimates as verified benchmarks.** Inspect logs and reproduce the failure first; fix the identified cause and confirm it with tests.

**Caveats:** this is an instruction-driven workflow rather than a correctness guarantee. Review executable hooks and external access before installation.
