---
name: "DocETL"
summary: "An agentic LLM-powered ETL framework for processing large structured or unstructured datasets with declarative map, filter, reduce, and extraction steps."
category: "Data & Documents"
url: "https://github.com/ucbepic/docetl"
repository: "https://github.com/ucbepic/docetl"
tags: ["LLM ETL","Document processing","Data pipelines","Python","Structured extraction"]
resourceType: "Library / Framework"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["DocWrangler / DocETL"]
useCases: ["Classify and aggregate thousands of customer reviews or support tickets","Build repeatable document extraction and enrichment pipelines","Structure unstructured research corpora for downstream analytics"]
capabilities: ["Declarative LLM-powered map, filter, reduce and extraction operators","Pipeline optimization and Python/YAML execution","Structured output suitable for querying and analysis"]
requirements: ["Python environment and an LLM provider or compatible model configuration","Input datasets, data governance and validation criteria","Budget and rate-limit controls for model calls"]
limitations: ["Not a ready-made customer feedback SaaS or dashboard; build the application and UI separately","Output quality depends on prompt design, model choice and evaluation","Processing data with remote LLMs can expose sensitive content; review privacy and pricing"]
---

## What it does

[DocETL](https://github.com/ucbepic/docetl) is a developer-oriented framework for semantic data processing with LLMs. It executes declarative operators such as map, filter, reduce and extraction, and supports optimization of complex pipelines. The official project includes Python and YAML workflows and the separate DocWrangler interface for interactive prompt development.

## Practical applications

- Analyze customer feedback, segment complaints and summarize recurring support problems.
- Enrich research records or documents before importing them into analytics systems.
- Build reusable extraction jobs whose output feeds an existing database or application.

## Distinctions

**Compared with PaddleOCR:** OCR primarily recognizes text and document structure; DocETL applies LLM-powered transformations, categorization and aggregation to data. **Compared with Unstract:** DocETL emphasizes developer-defined data pipelines rather than a visual document-extraction platform and deployed extraction APIs.

## Licensing and caution

The [repository](https://github.com/ucbepic/docetl) is **MIT licensed**. Model or cloud-provider charges are separate. Customer or personal data should be handled under appropriate privacy and retention policies. Validate extracted facts and categories against a representative sample before production use.

**Official source:** [ucbepic/docetl](https://github.com/ucbepic/docetl).
