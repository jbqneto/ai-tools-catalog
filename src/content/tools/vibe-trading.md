---
name: "Vibe-Trading"
summary: "An agent-oriented financial research and quantitative analysis platform with backtesting, paper trading, portfolio review, and optional broker integrations."
category: "Finance"
resourceType: "Application"
aiInvolvement: "Core AI"
url: "https://github.com/HKUDS/Vibe-Trading"
repository: "https://github.com/HKUDS/Vibe-Trading"
aliases: ["HKUDS/Vibe-Trading", "Vibe Trading AI"]
tags: ["Finance", "AI agents", "Backtesting", "Market research", "Paper trading", "Portfolio analytics", "MCP"]
useCases: ["Research financial markets using agent-driven reports and verified data references", "Backtest strategies and inspect fills, drawdowns and benchmark comparisons", "Simulate portfolio strategies and evaluate broker integrations in controlled environments"]
capabilities: ["Natural-language research workflows, saved analysis and quantitative backtesting", "Portfolio risk tools and paper-trading/replay functionality", "CLI, web interface and MCP capabilities with optional broker connection profiles"]
requirements: ["Python 3.11+ and a configured compatible model provider for the CLI, or project Docker setup for web use", "Market-data access and any provider-specific API credentials", "Explicit approval, broker credentials and risk limits for any supported live-trading connection"]
limitations: ["Not financial advice or a guarantee that a strategy is profitable", "Historical data, backtests and paper results do not establish live performance", "Live broker execution is experimental, requires explicit authorization and may incur real financial losses", "Broker capabilities and data coverage vary; confirm read, simulation and live permissions individually"]
verification: "confirmed"
---

## Overview

[Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) connects AI-agent research workflows with market data, quantitative backtests, portfolio-risk tools and simulated trading. It offers a Python CLI and a Docker-hosted web application, along with an MCP interface.

## Risks and limitations

Research output must be checked against the cited data, time range and assumptions. Examine drawdown, fees, slippage and out-of-sample behavior before interpreting a backtest. Some broker profiles support **read-only** access, others paper execution, and certain supported brokers can accept **live orders** within configured limits. Do not equate those distinct permission levels.

The upstream disclaimer identifies broker trading as experimental and not verified against live brokerage accounts by the authors. Default to research and simulation rather than enabling real trading. MIT-licensed project code; third-party data and broker services have separate terms.

**Official repository:** https://github.com/HKUDS/Vibe-Trading
