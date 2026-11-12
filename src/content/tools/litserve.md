---
name: "LitServe"
summary: "A Python framework for exposing custom machine-learning inference as APIs, with support for request batching, multiple workers, and scalable serving logic."
category: "Developer Tools"
url: "https://github.com/Lightning-AI/LitServe"
repository: "https://github.com/Lightning-AI/LitServe"
tags: ["Python","Model serving","Inference API","Batching","Scaling","AI infrastructure"]
resourceType: "Library / Framework"
aiInvolvement: "AI ecosystem"
verification: "confirmed"
aliases: ["Lightning AI LitServe"]
useCases: ["Serve a custom trained model behind an HTTP endpoint","Implement batched inference for image, audio or classification workloads","Prototype an inference service before adding scaling or GPU infrastructure"]
capabilities: ["Custom inference endpoint framework with worker and batching support","Model preprocessing and postprocessing hooks","Support for different model workloads and deployment architectures"]
requirements: ["Python environment and an existing model or inference implementation","Compute resources sized for the selected model","Authentication, monitoring and network controls for a public API"]
limitations: ["Does not supply a trained model or eliminate inference cost","Different from an LLM model-router or API aggregation gateway","Benchmark claims depend on workload and configuration, and require independent tests"]
---

## What it does

[LitServe](https://github.com/Lightning-AI/LitServe) is a lightweight framework for building Python-based inference APIs. It provides serving infrastructure around models you already have, including request handling, workers and batching. The project targets diverse ML workloads, from classification to embeddings and generative inference.

## Practical applications

- Expose a dedicated internal inference endpoint for a custom model.
- Batch audio or image inference to improve utilization.
- Package a small model behind an API that other services consume.

## Architecture distinction

**Model serving is not model routing.** LitServe is useful when you own or operate the inference code; it is not a direct replacement for a gateway that forwards calls to external LLM providers. For large generative models, compare specialized engines such as vLLM where appropriate.

## License and caution

The source is **Apache-2.0 licensed**. GPU capacity, autoscaling, latency and operating costs depend on deployment. Add authentication and quotas before exposing any endpoint publicly.

**Official source:** [Lightning-AI/LitServe](https://github.com/Lightning-AI/LitServe).
