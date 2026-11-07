---
title: "Find, Inspect, and Install Agent Skills Safely"
summary: "A practical workflow for selecting verified Agent Skills, checking scripts and licenses, and installing them with Claude Code or another compatible agent."
kind: "workflow"
category: "Agent Skills"
tags: ["Agent Skills", "Claude Code", "Codex", "Security", "Installation"]
sourceNote: "Based on a shared social-media installation slide; commands and limitations checked against project documentation rather than copied as universal guarantees."
relatedUrl: "https://github.com/anthropics/skills"
---

## A skill is not a model or an application

An Agent Skill normally consists of a **SKILL.md** instruction file plus optional scripts, templates, assets, and dependencies. Some are metadata-only; others execute local commands or communicate with outside services. The project repository alone is not proof that a skill is safe or supported by every AI client.

## Selection and security checklist

1. Verify the **maintainer, exact repository, and skill subdirectory**. A repository can host many unrelated skills.
2. Read `SKILL.md`, installation scripts, package manifests, license files, and requested permissions.
3. Check compatibility with the **specific client and version**: Claude Code plugins, Claude desktop features, Codex, and generic Agent Skills hosts do not all use the same installation flow.
4. Prefer a **project-scoped** installation for evaluation. Avoid global installs for unknown code and avoid running unreviewed shell installers.
5. Run a reversible test using non-sensitive example content. Check executable activity and whether data is sent to providers.
6. Only then add the skill to a shared or permanent workflow.

## Concrete examples (recheck against current upstream instructions)

- [Anthropic Algorithmic Art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art) and [Anthropic Canvas Design](https://github.com/anthropics/skills/tree/main/skills/canvas-design) are distinct subprojects of Anthropic's public skills repository.
- [Teardown](https://github.com/elvarofficial/teardown) documents this installation approach for its supported Claude Code setup:

```bash
npx skills add elvarofficial/teardown -g -a claude-code
```

- For Teardown's own examples, upstream additionally documents `npm install` and `npx playwright install chromium` within the installed folder, plus optional `ffmpeg` for video and Python 3 for sound. **Review code before executing these steps.**

Claude Code `/plugin marketplace add ...` and `/plugin install ...` commands are a separate plugin workflow. Do not treat them as interchangeable with `npx skills add`. A screenshot claiming a fixed setup time or paid-plan requirement is not reliable guidance for every version.

## Prompt for evaluating a skill

```text
Evaluate [SKILL_GITHUB_URL] for my coding agent and workflow.

1. Verify the current repository, subdirectory, and maintainer.
2. Read SKILL.md, README, executable scripts, and license.
3. Check compatibility with [CLIENT_AND_VERSION] on [OPERATING_SYSTEM].
4. Identify installation effects, permissions, network calls,
   external APIs, costs, and security risks.
5. Check for duplicate or equivalent capabilities already installed.
6. Propose one isolated proof of concept and rollback instructions.
Do not execute or install anything without my authorization.
```

**Note:** Installations are version-dependent. Always consult the exact upstream documentation for your environment.
