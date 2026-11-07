---
name: "Theatre.js"
summary: "A web motion-design toolkit combining programmatic animation with a visual editor for 3D, HTML, SVG, and interactive scenes."
category: "3D & Interactive"
url: "https://github.com/theatre-js/theatre"
repository: "https://github.com/theatre-js/theatre"
tags: ["JavaScript", "Animation", "Timeline", "Three.js", "Motion design"]
aliases: ["TheatreJS", "@theatre/core"]
resourceType: "Library / Framework"
aiInvolvement: "No AI required"
useCases: ["Choreograph keyframe animation for Three.js scenes", "Fine-tune web motion graphics through a visual editing interface", "Animate HTML, SVG, and application state"]
capabilities: ["Programmatic animation through @theatre/core", "Visual motion design using @theatre/studio", "Keyframe-based control of 3D objects and web properties"]
requirements: ["JavaScript or TypeScript web development environment", "Compatible scene or application integration"]
limitations: ["Not a native non-linear video editor or automatic video exporter", "The editor and runtime use different open-source licenses", "The project README notes temporary private development work on the next major release; verify current release status"]
verification: "confirmed"
---

## Overview

[Theatre.js](https://github.com/theatre-js/theatre) brings a visual timeline-like workflow to code-driven motion design. It can orchestrate values in Three.js, React, HTML, and SVG while preserving runtime control in the application.

**Good fit:** interactive 3D scenes, agent-generated web motion graphics that require human visual refinement, and precise keyframe choreography before an external rendering stage.

**Trade-off:** It does not replace a full video editing timeline. Integrations and exports must be implemented in the consuming project. The official README indicates the upcoming major version has been developed temporarily in a private repository, so verify current package compatibility.

**License distinction:** `@theatre/core` is Apache-2.0; `@theatre/studio` is AGPL-3.0. These are separate packages with different obligations. Consult the [upstream licensing notes](https://github.com/theatre-js/theatre).

**Source:** [Official source repository](https://github.com/theatre-js/theatre).
