---
name: planning
description: Align on the product scope and design through an interactive Q&A session (grilling/interview), compile a structured brief proposal, and automatically transition into /init-product once approved. Use when the user wants to brainstorm or plan a new project from scratch, or types /planning.
---

# Product Planning & Interview (Q&A)

Help the user define their product through a structured, interactive Q&A session. Do not write any code or initialize any documents during this interview. Focus entirely on understanding the product scope, target users, core features, design aesthetics, and technical requirements.

Once the user approves the planning proposal, transition automatically to `/init-product` using the proposal as the brief.

## Steps

1. **Conduct Q&A Interview**: Ask the user clear, open-ended but focused questions, one at a time (or in small logical groups), to capture:
   - **Name & Summary**: What is the project called and what is the 1-sentence description?
   - **Target Users**: Who is this for (primary/secondary)?
   - **Core Loop (P0 Features)**: What is the absolute minimum version that is useful?
   - **Next Phases (P1/P2 Features)**: What features make it feel complete or polished?
   - **Design Vibe & Theme**: Vibe, brand/accent color (keep background white), and roundness.
   - **Technical Integrations**: Do they need Database/Supabase? Payments (Midtrans)? Large AI models (Hugging Face)?
2. **Draft a Planning Proposal**: Once you have gathered enough details, present a structured markdown proposal summarizing:
   - Project Name & Description
   - Target Users
   - Goals (3-5 measurable outcomes)
   - Scope: P0, P1, and P2 features
   - Explicitly out of scope (Non-Goals)
   - Design System choices (accent color, roundness, etc.)
   - Tech Stack checklist (DB, Payments, AI, etc.)
3. **Obtain Approval**: Ask the user if this proposal looks good.
4. **Transition to `/init-product`**:
   - If the user says "yes", "looks good", "ok", or approves the proposal: proceed **immediately and automatically** to run the `/init-product` flow using this proposal as the brief.
   - If they have feedback, refine the proposal and ask for approval again.

## Done means

You have presented the proposal, got the user's approval, and triggered the `/init-product` workflow to scaffold all the documentation.
