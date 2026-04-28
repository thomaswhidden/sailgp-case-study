# SailGP Case Study — Project Context

## What this project is

A research and writing dashboard for a Stanford Graduate School of Business case study on **SailGP**, the global sailing league founded in 2018 by Russell Coutts and Larry Ellison. The case is being developed with **Professor George Foster** at Stanford GSB, and will culminate in an **interview with SailGP CEO Russell Coutts**.

The case is part of Professor Foster's "New Sporting Leagues" curriculum (companion to Chapter 5 of *Sports Business Management*, 3rd Edition, by Foster, O'Reilly & Davila). Prior cases in this sequence have covered the United Pickleball Association, IPL, NWSL, LIV Golf, and Major League Cricket. SailGP fits the same analytical lens.

## Who is using this site

- **Primary user:** Me (the researcher building the case)
- **Secondary user:** Professor George Foster (review and collaboration)
- **Eventual readers:** Stanford GSB students using the case in class

The site is local-only or password-protected — never make it publicly accessible without permission, because some source material is copyrighted.

## What the site must do

Organize a large body of research across these dimensions so I can prepare for the Coutts interview without asking him questions he's already answered publicly, and so I can produce a strong case write-up.

The site has eight content areas:

1. **Sources** — categorized library of every URL, document, podcast, and video I'm researching, with status tags (To Read / Reading / Read / Cited).
2. **Interview Archive** — Q&A summaries of every public Russell Coutts interview, with "already asked" tags so I can avoid repetition.
3. **Team Profiles** — one page per SailGP team with ownership history, valuation, sponsors, performance.
4. **Timeline** — interactive league timeline from 2018 founding to present, plotting team sales, sponsor deals, venue additions, broadcast deals, and key incidents.
5. **Foster Framework Analysis** — the 13 evaluation criteria from Foster's New Sporting League rubric, each mapped to SailGP with strengths, weaknesses, and open questions.
6. **Comparable Leagues** — benchmark pages for Formula 1, LIV Golf, IPL, UFC, America's Cup, and Premier Lacrosse League.
7. **Open Questions for Russell** — my live working list of things the public record doesn't answer, organized by theme. This is the most important page — it's what I'll use to draft my interview.
8. **Interview Prep** — final, polished question set organized for the actual interview day.

## The Foster 13-Criterion Evaluation Framework

This framework is **central** to the analysis. Every page should connect back to it where relevant. The 13 criteria are:

1. **Vision & Strategic Positioning** — what is the league trying to be, and why now?
2. **Investor / Owner Base** — who's funding it, and what's the quality of capital?
3. **League Governance & Management** — leadership, decision rights, league-vs-team dynamics
4. **Competitive Format & Sporting Product** — game/race structure, season design, parity
5. **Athlete Talent Pool** — depth, recruitment, development pipeline
6. **Venue / Host City Strategy** — selection, economics, fan experience
7. **Broadcast & Media Distribution** — rights deals, formats, reach
8. **Sponsorship & Commercial Partnerships** — title partners, team sponsors, deal values
9. **Fan Engagement & Brand Building** — attendance, social, NPS, content strategy
10. **Financial Sustainability** — unit economics, league P&L, path to profitability
11. **Potential Growth Opportunities** — leverageable assets, growth accelerators
12. **Potential Growth Challenges** — inherited liabilities, growth inhibitors
13. **Disruptive Positioning vs. Incumbents** — innovation differentiators, regulatory landscape

(There are also sub-criteria around regulation, long-term positioning, etc. — full rubric is in the seed data.)

## Tech stack requirements

- **Framework:** Astro with the content collections feature (best for markdown-driven research sites)
- **Styling:** Tailwind CSS, with a clean editorial design — think *The Information* or *Stratechery*, not a startup landing page
- **Content:** Markdown files in `src/content/` — easy to edit anywhere, version-controllable
- **Search:** Client-side search (Pagefind or Fuse.js) across all content
- **Tables:** Sortable, filterable tables for sources, team valuations, and sponsor deals
- **Timeline:** Interactive vertical timeline component
- **Tags:** Cross-cutting tag system (e.g., `framework:investor-base`, `theme:risk`, `source-type:podcast`)
- **No external CMS, no database** — everything in flat files for portability

## Design principles

- **Editorial, not corporate.** Generous whitespace, serif headings (think Tiempos, Charter, or system serif), clean sans-serif body.
- **Information density without clutter.** Tables and lists over decorative elements.
- **Reading-first.** This is a research tool — it should feel like a great reading experience, not a dashboard.
- **No emoji, no stock imagery, no gradients.** Restraint over flair.
- **Color palette:** Mostly monochrome with one accent color (suggest a deep navy or oxblood). SailGP brand colors are bold, but the site should feel like a research instrument, not league marketing.

## Important boundaries

- **Copyright:** The two PDFs in my project (Foster framework + Chapter 5) are copyrighted. Reference them, but never reproduce more than short quotes.
- **Local-only by default.** No deployment to public URLs without explicit permission.
- **Source attribution everywhere.** Every claim on the site needs a source link.

## What I need from you (Claude Code)

Build the site scaffold with all eight sections, seed it with the data in `SEED_DATA.md`, and create placeholder pages where I'll add content. Make it easy for me to add new entries by editing or creating markdown files. The first version should already feel useful — not just empty templates.
