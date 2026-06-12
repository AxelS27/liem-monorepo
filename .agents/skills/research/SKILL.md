---
name: research
description: Perform evidence-based product and market research before making product decisions, discovering reality, and compiling a structured research report. Use when the user wants to search for facts, analyze competitors, or types /research.
---

# /research Skill — Evidence-Based Research

## Purpose

`/research` is used to discover facts before making product decisions.

Research output is not a roadmap, not a PRD, and not a technical design.

Research output consists of:

- Evidence
- Source
- Insight
- Risk
- Assumption
- Recommendation

Main principle:

> 100% data-driven.  
> If there is no data, mark it as an assumption.  
> Never disguise opinions as facts.

---

# Core Philosophy

Research discovers reality.

Planning makes decisions.

The agent may make recommendations, but every recommendation must be supported by:

- Source
- Evidence
- Reasoning
- Confidence level

---

# Source Quality Rules

## Source Priority

Use sources in the following order of credibility:

### Tier 1 — Highly Reliable

The strongest and most preferred sources:

- Official documentation
- Government data
- Academic papers
- Company annual reports
- Official API documentation
- Official pricing pages
- Reputable research firms
- Legal/regulatory sources

Examples:

- Stripe Docs
- Midtrans Docs
- Supabase Docs
- Binance API Docs
- Google Scholar papers
- World Bank / IMF / OECD data
- Government regulation pages

---

### Tier 2 — Generally Reliable

Sources that can be used for market context and trends:

- Reputable media
- Industry reports
- Established tech publications
- Public company blogs
- Product Hunt
- G2 / Capterra / Trustpilot reviews

Examples:

- Reuters
- Bloomberg
- TechCrunch
- The Verge
- CoinDesk
- Product Hunt
- G2 reviews

---

### Tier 3 — User Sentiment Sources

Sources useful for understanding user opinions, but should not be considered as a single source of truth:

- Reddit
- Twitter/X
- Discord
- Telegram communities
- YouTube comments
- Forum discussions
- App Store / Play Store reviews

Use these for:

- Complaints
- Pain points
- User frustration
- Feature requests
- Language patterns

Do not use these as final proof without supporting sources.

---

### Tier 4 — Weak Sources

Avoid unless there is no other option:

- Random blogs
- SEO content farms
- Anonymous claims
- Unsourced statistics
- Viral social media posts
- AI-generated articles
- Forum comments without verification

If used, mark confidence as LOW.

---

# Anti-Hoax Rules

The agent must:

1. Prefer primary sources.
2. Cross-check important claims with at least 2 independent sources.
3. Avoid claims from anonymous or low-quality sources.
4. Never present unsourced numbers as facts.
5. Mark uncertain claims clearly.
6. Separate facts, assumptions, and opinions.
7. Include source links/citations for every major claim.
8. Mention the date of the source when recency matters.

---

# Evidence Format

Every important research finding must use this format:

## Finding

Claim:
...

Evidence:
...

Source:
- Source name
- Link / citation
- Date accessed or publication date

Source Quality:
Tier 1 / Tier 2 / Tier 3 / Tier 4

Confidence:
Low / Medium / High

Notes:
...

---

# Explicit Assumption Format

If data is incomplete or unavailable:

## Assumption

Assumption:
...

Reasoning:
...

Why It Matters:
...

Confidence:
Low / Medium / High

Validation Needed:
...

Do not present assumptions as facts.

---

# Research Workflow

## Phase 1 — Problem Research

Goal:
Ensure the problem to be solved actually exists.

Research Questions:

- What is the main problem?
- Who experiences the problem?
- How often does the problem occur?
- How do users solve it now?
- Do users feel the current solutions are unsatisfactory?

Recommended Sources:

- User interviews
- Reddit / forums
- App reviews
- Product reviews
- Industry reports
- Existing competitor reviews

Output:

### Problem Summary

Problem:
...

Affected Users:
...

Current Solutions:
...

Evidence:
...

Sources:
...

Confidence:
...

---

## Phase 2 — User Research

Goal:
Understand the user for real, not based on founder assumptions.

Research Areas:

- Pain points
- Complaints
- Buying triggers
- Desired features
- Current workflow
- Willingness to pay

Recommended Sources:

- Reddit
- Discord
- Twitter/X
- Product Hunt comments
- G2 reviews
- App Store reviews
- Play Store reviews
- User interviews

Output:

### User Insight Summary

Top Complaints:
...

Top Desired Features:
...

Current Workarounds:
...

Buying Triggers:
...

Sources:
...

Confidence:
...

---

## Phase 3 — Competitor Research

Goal:
Understand who has already solved this problem and how they are positioned.

Research Areas:

- Direct competitors
- Indirect competitors
- Pricing
- Features
- Positioning
- Strengths
- Weaknesses
- User complaints

Recommended Sources:

- Official competitor websites
- Official pricing pages
- Documentation
- Product reviews
- G2 / Capterra / Trustpilot
- Product Hunt
- App store reviews

Output:

### Competitor Analysis

Competitor:
...

Positioning:
...

Strengths:
...

Weaknesses:
...

Pricing:
...

User Complaints:
...

Sources:
...

Confidence:
...

---

## Phase 4 — Market Gap Research

Goal:
Discover market gaps not solved by competitors.

Research Questions:

- What do users complain about in current solutions?
- What have competitors not done yet?
- What is too complex, expensive, or inconvenient?
- What are realistic differentiation opportunities?

Recommended Sources:

- Competitor reviews
- Reddit threads
- Product Hunt discussions
- App reviews
- Industry reports
- Public changelogs

Output:

### Market Gap Summary

Gap #1:
...

Evidence:
...

Source:
...

Confidence:
...

---

## Phase 5 — Market Research

Goal:
Assess whether the market is attractive enough to enter.

Research Areas:

- Market size
- Growth trend
- Market maturity
- Competition intensity
- Barrier to entry

Important:
For early-stage startups, do not focus too much on TAM/SAM/SOM if they are not yet relevant.

More importantly, answer:

- Can the first users be found?
- Do users have a budget?
- Is there a willingness to pay?
- Is the market growing or shrinking?

Recommended Sources:

- Industry reports
- Government statistics
- Research firm summaries
- Public company reports
- Reputable news
- Payment/platform data if available

Output:

### Market Analysis

Market Attractiveness:
1-10

Market Size:
...

Growth Trend:
...

Competition Level:
Low / Medium / High

Sources:
...

Confidence:
...

---

## Phase 6 — Feasibility Research

Goal:
Ensure the product can be built technically, legally, and operationally.

Research Areas:

- Data availability
- API availability
- API limits
- Pricing
- Legal/regulatory risks
- Integration complexity
- Platform policy restrictions

Recommended Sources:

- Official API documentation
- Official pricing pages
- Legal/regulatory sources
- Developer forums
- Terms of service
- Platform policy pages

Output:

### Feasibility Assessment

Technical Feasibility:
Low / Medium / High

Legal Risk:
Low / Medium / High

Data Availability:
...

Important Constraints:
...

Sources:
...

Confidence:
...

---

## Phase 7 — Distribution Research

Goal:
Answer how the product will acquire its first users.

Research Areas:

- SEO opportunity
- Communities
- Paid ads
- Influencers
- TikTok/YouTube content
- Partnerships
- Marketplace/platform distribution

Research Questions:

- Where does the target audience gather?
- Which channels are most realistic for the founder?
- Which channels are the cheapest?
- What examples of content have proven to attract users?

Recommended Sources:

- Community platforms
- Google Trends
- Similarweb
- Social media search
- YouTube/TikTok content analysis
- Competitor traffic sources
- Newsletter directories

Output:

### Distribution Strategy Research

Primary Channels:
...

Evidence:
...

Risks:
...

Sources:
...

Confidence:
...

---

## Phase 8 — Founder Fit Assessment

Goal:
Assess whether the idea fits the founder's conditions.

This is a strategic assessment, not pure market research.

Consider:

- Solo founder or team
- Budget
- Skill level
- Timeline
- Distribution access
- Technical complexity
- Legal complexity

Output:

### Founder Fit

Good Fit:
...

Bad Fit:
...

Complexity:
Low / Medium / High

Recommendation:
...

Confidence:
...

---

## Phase 9 — Validation Research

Goal:
Determine the most dangerous assumptions that must be tested first.

Format:

### Critical Assumption

Assumption:
...

Why It Matters:
...

Evidence So Far:
...

Confidence:
...

Validation Needed:
...

Suggested Experiment:
...

Examples of experiments:

- Interview 10 target users
- Landing page test
- Waitlist
- Fake-door payment button
- Manual concierge MVP
- Survey with pricing test
- Private beta

---

## Phase 10 — Economic Research

Goal:
Roughly assess the business potential.

Research Areas:

- Revenue model
- Pricing benchmark
- Cost drivers
- Payment fees
- API costs
- Hosting costs
- Support cost
- Gross margin potential

Important:
Do not overbuild financial projections.

Focus on:

- Can this make money?
- What costs can kill the product?
- What pricing seems realistic?
- What must be validated?

Recommended Sources:

- Official pricing pages
- Competitor pricing
- Payment provider fees
- Hosting provider pricing
- API provider pricing

Output:

### Economic Assessment

Revenue Potential:
...

Cost Drivers:
...

Pricing Benchmark:
...

Profitability Potential:
Low / Medium / High

Sources:
...

Confidence:
...

---

## Phase 11 — Strategic Recommendation

Goal:
Provide the final decision based on evidence.

Possible outcomes:

### Proceed

The market is attractive and viable to build.

### Proceed With Caution

There is an opportunity, but significant risks need to be mitigated.

### Pivot

The problem exists, but the solution or positioning needs to be pivoted.

### Reject

Not recommended to build.

Output:

### Strategic Recommendation

Decision:
Proceed / Proceed With Caution / Pivot / Reject

Confidence:
1-10

Top Opportunities:
...

Top Risks:
...

Key Evidence:
...

Key Assumptions:
...

Validation Needed:
...

What I Would Do:
...

---

# Final Research Report Format

Use this structure:

# Research Report: [Product Name]

## 1. Executive Summary

Decision:
Proceed / Proceed With Caution / Pivot / Reject

Confidence:
1-10

Short Summary:
...

---

## 2. Key Findings

### Finding 1

Claim:
...

Evidence:
...

Sources:
...

Source Quality:
...

Confidence:
...

---

## 3. Problem Research

...

## 4. User Research

...

## 5. Competitor Research

...

## 6. Market Gap

...

## 7. Market Research

...

## 8. Feasibility Research

...

## 9. Distribution Research

...

## 10. Founder Fit

...

## 11. Validation Plan

...

## 12. Economic Assessment

...

## 13. Final Recommendation

...

---

# Integration with /planning

## Standalone Mode

User runs:

`/research`

Output:

Full Research Report.

No roadmap.
No tech stack.
No PRD.

---

## Planning-Included Mode

User runs:

`/planning`

The agent automatically performs:

1. Phase 0 — Research Summary
2. Planning Discovery
3. Business Strategy
4. Risk Assessment
5. Strategic Recommendation
6. Technical Design
7. Roadmap

In this mode, research should be shorter, but still evidence-based.

---

# Research Quality Checklist

Before finalizing research, confirm:

- Every major claim has a source.
- Source quality is labeled.
- Facts and assumptions are separated.
- Competitors are mentioned.
- Risks are included.
- Validation steps are included.
- No unsourced numbers are presented as facts.
- No low-quality source is treated as high-confidence.
- Recency is checked for fast-changing topics.
- Recommendation includes confidence score.

---

# Important Rule

If no reliable data is found, say:

> Reliable data was not found.

Then provide:

- Best assumption
- Confidence level
- How to validate it

Never fake certainty.
