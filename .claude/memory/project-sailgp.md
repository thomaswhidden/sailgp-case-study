---
name: SailGP Case Study — Project Overview
description: Astro research site for Stanford GSB case study on SailGP, built for interview with CEO Russell Coutts
type: project
---

Fully scaffolded Astro 5 + Tailwind CSS research dashboard in `/Users/default/Downloads/~:sailgp-case-study:`.

**Why:** Stanford GSB case study with Prof. George Foster. Researcher preparing for live interview with SailGP CEO Russell Coutts. Companion to Foster's "New Sporting Leagues" curriculum.

**How to apply:** When working on this project, always reference SEED_DATA.md for facts and avoid inventing data. The most important page is Open Questions (/open-questions).

## Tech stack
- Astro 5.18 + @astrojs/tailwind + Tailwind CSS 3.4
- Markdown content collections (8 collections)
- **Cinematic redesign complete** (April 2026) — teal/bone/sun tokens
- Start: `npm run dev` (uses `node ./node_modules/astro/astro.js dev`)
- Search: `npm run build:search` (builds + runs pagefind)
- Dev server: http://localhost:4321 (or 4322 if port taken)

## Design system (cinematic redesign)
- Colors: `--ink` #0B1F26, `--bone` #F2EBDD, `--sun` #E97451, `--mute` #5A6E76
- Fonts: Instrument Serif (display), Fraunces (serif/body), Space Grotesk (sans/UI), JetBrains Mono (mono/labels)
- Type scale: `.type-hero` → `.type-6`, `.type-body-lead`, `.type-body`, `.type-eyebrow`
- Eyebrow pattern: `.eyebrow-marker` class (sun-colored rule + uppercase mono)
- No border-radius anywhere. No shadows. 1px borders at `rgba(11,31,38,0.15)`.
- All CSS vars in `src/styles/global.css`; Tailwind tokens in `tailwind.config.mjs`

## Components (in src/components/)
- Nav.astro — cinematic sticky nav, bone background, mono uppercase links
- Eyebrow.astro — inline eyebrow marker
- ChapterHeader.astro — chapter eyebrow + display headline + lead
- ImagePlate.astro — real image or SVG ocean placeholder
- PullQuote.astro — full-bleed ink plate with italic display quote
- StatBand.astro — 6-col stat strip with IntersectionObserver count-up animation
- TeamCard.astro — bone-2 card with color band, valuation in sun
- FrameworkRow.astro — 4-col grid row with score bars + status pill
- TimelineItem.astro — 3-col grid with dot + category color
- ComparableCard.astro — supports dark=true for ink-plate context
- QuestionRow.astro — 3-col grid with faded index number
- ViewershipChart.astro — inline SVG area chart with chart-reveal animation

## Content counts seeded
- 42 sources (`src/content/sources/`)
- 3 interviews (`src/content/interviews/`)
- 13 teams (`src/content/teams/`)
- 21 timeline events (`src/content/timeline/`)
- 13 framework criteria (`src/content/framework/`)
- 7 comparable leagues (`src/content/comparables/`)
- 10 open-question themes (`src/content/open-questions/`)
- 1 interview-prep placeholder (`src/content/interview-prep/`)

## Key facts (from SEED_DATA.md)
- Season 5 revenue: $200M+
- Current teams: 13 (Season 6, 2026)
- Highest team valuation: $60M+ (Denmark, Feb 2026)
- Record US viewership: 3.47M (Abu Dhabi, Nov 2025)
- CEO/Co-founder: Russell Coutts
- Co-founder/backer: Larry Ellison
