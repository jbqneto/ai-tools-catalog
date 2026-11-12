---
name: "Unstract"
summary: "An open-source platform for extracting structured JSON from PDFs, scanned files, and other unstructured documents using configurable LLM prompts and APIs."
category: "Data & Documents"
url: "https://github.com/Zipstack/unstract"
repository: "https://github.com/Zipstack/unstract"
tags: ["Document AI","PDF extraction","LLM","ETL","OCR pipeline","Structured JSON"]
resourceType: "Application"
aiInvolvement: "Core AI"
verification: "confirmed"
aliases: ["Zipstack Unstract"]
useCases: ["Extract invoice fields into a billing or accounting workflow","Turn varied PDF contracts and forms into structured JSON","Publish document-extraction endpoints for a business process"]
capabilities: ["Prompt-driven extraction of structured data from documents","Interactive prompt configuration and document processing workflows","Deployment through APIs and ETL-oriented integrations"]
requirements: ["Suitable deployment and storage infrastructure","LLM provider access and model-specific configuration","Example documents, expected output schema and field validation"]
limitations: ["Not guaranteed to handle every scanned document accurately","Model/API usage and operational hosting have costs","AGPL-3.0 has obligations that must be reviewed before redistribution or network-service commercialization"]
---

## What it does

[Unstract](https://github.com/Zipstack/unstract) is an LLM-driven document extraction platform. It takes unstructured files such as PDFs, scans and images, uses prompts to extract specific fields and produces structured data that can be consumed by APIs or ETL pipelines.

## Practical applications

- Invoice and receipt extraction.
- Parsing applications, contracts and variable business forms.
- Delivering a document-to-JSON service to other systems.

## Distinctions

Unlike a general OCR toolkit such as PaddleOCR, Unstract emphasizes **schema-directed LLM extraction and workflow deployment**. Unlike the programming-oriented DocETL, it provides application-oriented extraction and API capabilities. These three resources solve adjacent but different problems.

## Licensing and production caveats

The repository is **AGPL-3.0 licensed**; verify the implications for modifications and network services before commercializing a hosted derivative. Model output requires validation, especially for financial or regulated documents. Protect customer document data and control upload retention.

**Official source:** [Zipstack/unstract](https://github.com/Zipstack/unstract).
