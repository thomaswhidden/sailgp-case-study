# Handoff: SailGP Case Study — Cinematic Direction

## Overview

This is a redesign of the **SailGP Case Study research site** — an Astro site that organizes research for a Stanford GSB case study being developed with Professor George Foster, in preparation for an interview with SailGP CEO Russell Coutts.

The current site (`https://resilient-sopapillas-e2a24c.netlify.app/`) is a working dashboard built in Astro with content collections. This handoff replaces the visual design with a **cinematic, magazine-longform aesthetic** while preserving every section, route, and content file.

The site has 8 sections — Sources, Interviews, Teams, Timeline, Foster Framework, Comparables, Open Questions, Interview Prep — plus the dashboard home.

---

## About the Design Files

The files in this bundle are **design references created in HTML/React (Babel inline)**. They are *not* production code to lift verbatim. The task is to **recreate this aesthetic inside the existing Astro + Tailwind codebase**, preserving:

- The Astro content collections schema in `src/content/config.ts`
- All markdown content in `src/content/*` (sources, interviews, teams, timeline, framework, comparables, open-questions, interview-prep)
- The page routes in `src/pages/*`

Think of the HTML reference as a stylistic spec for how each existing page should look and feel after the redesign — not as a new codebase.

## Fidelity

**High-fidelity.** Exact colors, typography, spacing, and section structures are specified below. Recreate pixel-perfectly using Tailwind utility classes plus minimal custom CSS in `src/styles/global.css`. The reference HTML uses inline styles for portability — translate those into Tailwind classes (with `tailwind.config.mjs` extended to include the design tokens) or CSS variables.

---

## Design Tokens

### Color Palette

| Token            | Hex       | Use                                         |
|------------------|-----------|---------------------------------------------|
| `--ink`          | `#0B1F26` | Primary text, deep teal-black backgrounds    |
| `--ink-2`        | `#13343F` | Secondary dark surface, ocean accent         |
| `--bone`         | `#F2EBDD` | Default page background, warm bone           |
| `--bone-2`       | `#E6DCC8` | Card / chapter alt background                |
| `--sun`          | `#E97451` | Burnt sunset accent — the *only* hot accent  |
| `--sun-2`        | `#F2A65A` | Sun highlight (used in image plate gradient) |
| `--mute`         | `#5A6E76` | Secondary text, dividers, metadata           |

Rule: there is exactly **one chromatic accent** (`--sun`). Everything else is the teal-bone duotone. Resist the urge to add more colors.

### Typography

Three families, loaded from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet" />
```

| Token          | Family                          | Use                                                |
|----------------|---------------------------------|----------------------------------------------------|
| `--font-display` | `"Instrument Serif", "Fraunces", Georgia, serif` | Hero, chapter titles, big editorial display |
| `--font-serif`   | `"Fraunces", Georgia, serif`                     | Long-form body copy, pull quotes               |
| `--font-sans`    | `"Space Grotesk", -apple-system, sans-serif`     | UI text, cards, navigation                     |
| `--font-mono`    | `"JetBrains Mono", ui-monospace, monospace`      | Eyebrows, dates, labels, tabular numbers       |

### Type Scale (in this design)

| Class           | Size  | Line-height | Letter-spacing | Use                       |
|-----------------|-------|-------------|----------------|---------------------------|
| `display-hero`  | 110px | 0.92        | -3px           | Front-page hero headline  |
| `display-chap`  | 80px  | 0.92        | -2.5px         | Chapter II / IV / V / VI titles |
| `display-2`     | 72px  | 0.92        | -2px           | Chapter III ("Foster's thirteen") |
| `display-3`     | 64px  | 0.92        | -2px           | Chapter I sticky title    |
| `display-4`     | 56px  | 0.9         | -1.5px         | Stat strip numbers        |
| `display-5`     | 38px  | 1.0         | -1px           | Inline date callouts      |
| `display-6`     | 30px  | 1.05        | -0.6px         | Question theme titles     |
| `body-lead`     | 22px  | 1.5         | normal         | Hero / chapter lead paragraphs |
| `body-large`    | 19px  | 1.55        | normal         | Long-form prose          |
| `body`          | 17px  | 1.6         | normal         | Default body            |
| `body-small`    | 14–16px| 1.5–1.55   | normal         | Card body, captions     |
| `eyebrow`       | 10px  | 1           | 2–2.5px        | Mono uppercase markers  |

Eyebrows use the `<D3Marker>` pattern: a 24px sun-colored rule, then mono uppercase text in `--sun`.

### Spacing Scale

The design uses a generous editorial scale. Keep these page-level horizontal paddings:

- Mobile: `px-6` (24px)
- Tablet: `px-10` (40px)
- Desktop: `px-16` (64px)

Vertical rhythm between major sections: `py-20` (80px) on desktop, scaling down to `py-12` (48px) on mobile.

Card padding: `p-5` to `p-6` (20–24px).

### Borders, dividers, radii

- **Borders:** 1px, color `rgba(11, 31, 38, 0.15)` — i.e. `--ink` at 15% alpha. Used for table rows, card outlines on dark plates, dividers.
- **Border radius:** **none.** This design is squared. Cards, buttons, plates — all 0 radius. The squared geometry is part of the visual identity.
- **Shadows:** none. Hierarchy is created with color and weight, not elevation.

### Imagery

The reference HTML uses a stylized SVG "ocean plate" placeholder (`D3Plate`) — striations, foil-wake curve, sun disc. **Replace with real licensed photography in production:**

- Hero plate: F50 foiling action shot, full-bleed
- Section dividers: harbour starts, helmet POV, crowd
- Use `loading="lazy"` and `srcset`/`<picture>` for responsive imagery

Until you have licensed photos, keep the SVG plate fallback — it is intentional, not a bug.

---

## Page-by-Page Spec

The reference HTML shows the **home page / case overview**. Each chapter inside it maps to a real route in the existing site. Translate as follows:

### `src/pages/index.astro` — Home / Brief

This is the page you see in the reference. Sections in order:

1. **Sticky top nav** — bone background at `F2` alpha, `backdrop-blur-sm`, 1px bottom border. Triangular mark + wordmark on left ("Foiling / a case study", `Instrument Serif` 22px). Nav items: Brief · Story · Data · Teams · Framework · Questions · Sources. Active item gets a 1px sun underline 6px below.

2. **Hero** — 7/5 grid. Left: eyebrow ("Stanford GSB · Working Case · 2026"), 110px display headline ("Eight seasons / above the water." — "the water." in italic sun), 22px serif lead paragraph, mono attribution row (Researcher · Advisor · Subject). Right: full-height image plate (F50 photo) with an inset dark callout block at bottom-left containing the centerpiece pull quote.

3. **Stats band** — 6-column grid, each cell `py-7 px-5`, 1px ink/15 internal dividers. Numbers in 56px display, labels in 10px mono uppercase mute.

4. **Chapter I — viewership chart** — 4/8 grid, sticky left rail with chapter eyebrow + title + lead. Right: bone-2 plate containing the SVG area chart (`D3ViewershipArea`), then 2-up callout boxes for Nov 2023 and Nov 2025 milestones.

5. **Pull quote plate** — full-bleed `--ink` background, 84px italic Instrument Serif quote with sun emphasis on the punch phrase, mono attribution.

6. **Chapter II — Cap table** — title + lead paragraph, then 3-column grid of team cards with color band, code, name, valuation, owners, sponsor, titles.

7. **Chapter III — Foster's thirteen** — bone-2 background, 5/7 grid. Left rail: chapter title + lead. Right: 13-row list, each row `40px / 1fr / 90px / 60px` columns: index, name + summary, 5 score bars, status pill.

8. **Chapter IV — Timeline** — title + lead, then a vertical timeline with date column, dot column, content column. 1px vertical rule at column 100px.

9. **Chapter V — Comparables** — full-bleed `--ink` background, bone text. 4-col grid of comparable league cards with bordered outlines.

10. **Chapter VI — Open questions** — title + lead, then numbered question rows: 60/1fr/110 columns, large faded number, theme + italic question, priority pill.

11. **Footer** — `--ink` background, three columns of mono uppercase metadata.

### Other routes (apply the same system)

- **`src/pages/sources/index.astro`** — Use the same nav + hero pattern (smaller hero: 64px display title, 17px lead). Keep the existing search + filter UI but restyle controls: 1px ink/30 borders, mono uppercase labels, no rounded corners. Source rows: full-width with 1px bottom dividers, title in 19px Fraunces, publisher / type / status as mono metadata. Tags become small bone-2 chips with mono uppercase text.

- **`src/pages/interviews/index.astro`** — "Already asked" tag cloud at top in mono style. Each interview is a chapter-card: outlet eyebrow, large Fraunces title, topics as bone-2 chips, "View Q&A" link in sun.

- **`src/pages/teams/index.astro`** — Use the same 3-col team grid as Chapter II. Each team links to `src/pages/teams/[slug].astro` which gets the cinematic chapter treatment (image plate hero per team, ownership history timeline, sponsor list).

- **`src/pages/timeline/index.astro`** — The full vertical timeline from Chapter IV, with category filters (mono pill chips) at top.

- **`src/pages/framework/index.astro`** — The 13-criterion list from Chapter III. Each criterion links to `src/pages/framework/[slug].astro` with a longform article treatment: chapter eyebrow, criterion title, 5-bar score, then **Strengths / Weaknesses / Open Questions** sub-sections with serif body.

- **`src/pages/comparables/index.astro`** — The dark plate Chapter V layout, expanded to 7 cards. Each links to `src/pages/comparables/[slug].astro` (longform).

- **`src/pages/open-questions/index.astro`** — The numbered question list from Chapter VI, grouped by theme. Filter pills: All / High / Med · cross-reference counts shown in mono.

- **`src/pages/interview-prep/index.astro`** — Reuse open-questions row style but reorderable (drag handles). Add an "Export" affordance (mono pill button, top-right).

---

## Components to Extract

In your Astro site, refactor these into reusable components under `src/components/`:

| Component             | Where used                          | Props                                                 |
|-----------------------|-------------------------------------|-------------------------------------------------------|
| `<Nav.astro>`         | `Base.astro` layout                 | `currentRoute`                                        |
| `<Eyebrow.astro>`     | every section                       | `children`, `color?` (default `--sun`)                |
| `<ChapterHeader.astro>` | every section                     | `chapter` (e.g. "Chapter I"), `title`, `lead?`        |
| `<StatBand.astro>`    | home, possibly framework, teams      | `stats: {value, label}[]`                             |
| `<ImagePlate.astro>`  | hero + chapter dividers             | `src?`, `alt`, `height`, `caption?`                   |
| `<PullQuote.astro>`   | home + framework articles           | `quote`, `attribution`, `emphasis?` (the punch phrase)|
| `<TeamCard.astro>`    | teams index, home Chapter II        | `team` from content collection                        |
| `<FrameworkRow.astro>`| framework index, home Chapter III   | `criterion` from content collection                   |
| `<TimelineList.astro>`| timeline index, home Chapter IV     | `events: TimelineEntry[]`                             |
| `<ComparableCard.astro>` | comparables index, home Chapter V| `league` from content collection                      |
| `<QuestionRow.astro>` | open-questions, home Chapter VI     | `question`, `index`                                   |
| `<ViewershipChart.astro>` | home Chapter I                  | self-contained SVG, reads `data/viewership.json`      |

For the chart, you can either:
- Keep the inline SVG approach from `dir3-cinematic.jsx` (`D3ViewershipArea`) — copy that math directly into an Astro component, or
- Use a tiny chart lib like `unovis` or `vega-lite` if you anticipate adding more chart types.

---

## Interactions & Behavior

The current site is mostly static. The cinematic redesign should add **subtle scrollytelling**, not heavy animation:

1. **Sticky chapter rails** — In Chapter I (and any other 4/8 grid section), the left rail uses `position: sticky; top: 80px` so the chapter title stays in view while the right column scrolls.

2. **Number reveal on scroll** — Stat band numbers count up from 0 to their final value when scrolled into view. Duration ~900ms, ease-out. Use `IntersectionObserver` + `requestAnimationFrame`. Trigger once.

3. **Timeline dots** — Dots along the timeline change from outline to solid `--sun` as they scroll past the viewport's vertical centerline.

4. **Chart animation** — Viewership area chart draws its path on first scroll into view (`stroke-dasharray` + `stroke-dashoffset` trick on the line, then fade in the area fill).

5. **Image plate parallax** — Optional. Hero plate translates ~80px on scroll (`transform: translate3d(0, scrollY * 0.15, 0)`). Disable on `prefers-reduced-motion`.

6. **Nav active state** — As the user scrolls through chapter sections, the nav item that corresponds to the currently-visible chapter gets the underline. Use `IntersectionObserver` on `<section data-chapter>` elements.

7. **Reduced motion** — Wrap all animation in `@media (prefers-reduced-motion: no-preference)` and provide static fallbacks.

8. **Hover states** — Team cards, comparable cards, framework rows, question rows: 200ms `background-color` transition to `--bone-2` (or `--ink-2` on dark plates). No transforms.

9. **Link hover** — Sun-colored text links underline on hover (1px solid `--sun`).

---

## State Management

Minimal — this is a static research site, mostly Astro server-rendered. Client-side state needed:

- **Scroll progress** — for nav active state + chart triggers. `useState` + `useEffect` in a tiny island component, or vanilla JS in `<script>` on each page.
- **Filters** (sources, timeline, open questions) — URL search params (`?status=read&type=podcast`) so filter state survives refresh. Astro can SSR-filter; add client-side JS to update the URL without reload.
- **Search** — Pagefind already integrated in the existing site. Restyle its widget per tokens above.

No global store required. No data fetching beyond Astro content collections.

---

## Accessibility

- All sun-on-bone text passes WCAG AA (sun `#E97451` on bone `#F2EBDD` = 4.5:1 at body sizes; use sun for accents and 18px+ text — for body links, prefer `--ink-2` underlined).
- Bone-on-ink reverses similarly.
- Every interactive element gets a 2px `--sun` outline at `:focus-visible`.
- Image plates have meaningful `alt` text; decorative SVG plates have `role="presentation"`.
- Honor `prefers-reduced-motion`.

---

## Files in This Handoff

- `cinematic-reference.html` — open in a browser to see the full design rendered
- `dir3-cinematic.jsx` — the source React component (reference only — re-implement in Astro)
- `data.jsx` — sample data the reference uses (your real data lives in `src/content/*` markdown)
- `README.md` — this document

The full content (sources, interviews, teams, timeline, framework, comparables, open questions) **already exists** in your Astro site under `src/content/*`. Don't recreate it — wire the existing collections into the new components.

---

## Suggested Implementation Order

1. **Tokens + fonts.** Add Google Fonts import to `src/layouts/Base.astro`. Extend `tailwind.config.mjs` with the color tokens and font families. Replace existing navy/amber tokens.
2. **Nav + Layout.** Update `Base.astro` and `Nav.astro` to the new sticky nav.
3. **Reusable primitives.** Build `Eyebrow`, `ChapterHeader`, `ImagePlate`, `PullQuote`, `StatBand`.
4. **Home page.** Rebuild `index.astro` with the chapter sections from the reference.
5. **Section index pages** in this order: Teams, Timeline, Framework, Comparables, Open Questions, Sources, Interviews, Interview Prep.
6. **Detail pages** (`[slug].astro` for teams, framework, comparables).
7. **Scrollytelling JS.** Add IntersectionObservers for nav active state + stat counters + chart reveal.
8. **Pagefind restyle.**
9. **Photography pass.** Replace SVG plates with licensed photos.

---

## Notes on Brand & IP

The visual language here is **original** — it does *not* use SailGP's actual logo, brand colors, or any copyrighted UI patterns. Imagery placeholders should be replaced with photography you have license to use (SailGP media hub, press kit imagery, or commissioned photography).
