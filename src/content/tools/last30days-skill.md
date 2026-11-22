---
name: "Last30Days"
summary: "A multi-source agent research skill for exploring recent public discussions, engagement signals and trends with source-linked reports."
category: "Learning & Research"
resourceType: "Agent Skill"
aiInvolvement: "AI ecosystem"
url: "https://github.com/mvanhorn/last30days-skill"
repository: "https://github.com/mvanhorn/last30days-skill"
aliases: ["/last30days", "Last 30 Days", "mvanhorn/last30days-skill"]
tags: ["Agent Skills", "Trends", "Social listening", "Research", "Reddit", "YouTube"]
useCases: ["Research community discussion and engagement on a topic over a recent period", "Compare recurring themes across supported public platforms", "Create repeatable research briefs and optional watchlist reports"]
capabilities: ["Collects supported signals from sources including Reddit, Hacker News, GitHub and other configured services", "Produces synthesized briefs and supports structured research exports", "Additional optional connectors expand platform coverage; monitoring outputs can be retained locally"]
requirements: ["An agent host compatible with the skill and its command-line utilities", "Optional API credentials, browser login or provider subscriptions for some data sources", "Appropriate permission to access, retain and quote source content"]
limitations: ["Source coverage varies by provider, account permissions and rate limits; zero configuration does not enable every advertised source", "Engagement counts and community anecdotes are not statistically representative evidence", "Some external APIs, search services or scraping providers have usage charges and privacy implications", "Automatically synthesized findings require source inspection, date checks and editorial review"]
verification: "confirmed"
---

## Overview

[Last30Days](https://github.com/mvanhorn/last30days-skill) is a skill for researching what people have discussed and engaged with recently across multiple online communities. The repository documents a baseline of sources that work without individual API configuration, while other platforms require API keys, cookies, external tools or paid services.

## Interpreting results

A popular post is not necessarily reliable or representative. Check timestamps, denominators, source provenance and whether a service was unavailable during a search. The project also describes optional saved reports and watchlist-style recurring research; those features require local configuration, not just installing a skill.

**Official repository:** https://github.com/mvanhorn/last30days-skill
