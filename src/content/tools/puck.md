---
name: "Puck"
summary: "An MIT-licensed drag-and-drop visual page editor embedded as React components, allowing developers to expose a controlled set of custom building blocks."
category: "Developer Tools"
url: "https://github.com/puckeditor/puck"
repository: "https://github.com/puckeditor/puck"
tags: ["React","Visual editor","Drag and drop","Page builder","Next.js","No-code UI"]
resourceType: "Library / Framework"
aiInvolvement: "No AI required"
verification: "confirmed"
aliases: ["Puck Editor"]
useCases: ["Build an editor for customer-facing profile and landing pages","Expose approved React blocks to non-technical content editors","Embed a visual page builder into a multi-tenant SaaS application"]
capabilities: ["Drag-and-drop content editing with application-defined React components","Configurable fields, layouts, viewports and permissions","Application-controlled serialization and rendering of content"]
requirements: ["React or Next.js integration and a defined component registry","Storage for published page configuration and versioning","Authentication, tenant isolation and sanitization for user-generated content"]
limitations: ["Not a complete website hosting platform, CMS backend or AI product","AI generation is optional integration work; no LLM is required","Implement publishing workflows, validation and tenant permissions yourself"]
---

## What it does

[Puck](https://github.com/puckeditor/puck) is a React component library for embedding a visual drag-and-drop editor in an existing application. Developers define the permitted React blocks and editable properties. Users compose layouts visually, while the application controls persistence and rendering.

## Practical applications

- Add a visual card or landing-page editor to a SaaS product.
- Let customers rearrange approved blocks without exposing arbitrary code.
- Build template variants and preview different layouts inside the product.

## Is it AI?

**No AI is required.** The editor itself is not an LLM-based site generator. Developers may integrate AI-assisted authoring, but that is a separate feature.

## Limitations and license

Puck is **MIT licensed**. It provides the editor foundation, not a production CMS, tenancy model, authentication policy, or publishing infrastructure. Do not store arbitrary client-controlled React code as trusted content.

**Official source:** [puckeditor/puck](https://github.com/puckeditor/puck).
