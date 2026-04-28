# SEED DATA — SailGP Case Study

This file contains research already gathered. Use it to populate the initial site content. Each section maps to a content collection in the Astro site.

---

## 1. SOURCES (populate `src/content/sources/`)

Create one markdown file per source with frontmatter: `title`, `url`, `publisher`, `date`, `type` (article/podcast/video/book/website/report), `status` (to-read/reading/read/cited), `tags[]`, `framework[]` (which Foster criteria it informs), `notes`.

### Official SailGP

- SailGP main site — https://sailgp.com
- SailGP News — https://sailgp.com/news
- SailGP Media Hub — https://mediahub.sailgp.com
- SailGP YouTube — https://www.youtube.com/@SailGP
- SailGP Impact League — https://impact.sailgp.com

### Team sites

- US SailGP Team — https://www.ussailgpteam.com
- BONDS Flying Roos (Australia) — https://www.bondsflyingroos.com.au
- Emirates GBR — https://www.greatbritainsailgpteam.com
- France SailGP Team — https://www.francesailgpteam.com
- Italy SailGP Team (Red Bull) — https://www.italysailgpteam.com
- Germany SailGP Team — https://www.germanysailgpteam.com

### Russell Coutts long-form interviews (PRIORITY READS)

- TIME — "Meet the Sailor Who Thinks His Sport Is the Next Formula 1" (Jan 2024) — https://time.com/6696233/russell-coutts-interview/
- Fast Company — "How SailGP turned the niche sport into a $200 million celebrity investment magnet" (Nov 2025) — https://www.fastcompany.com/91449460/how-sailgp-turned-the-niche-sport-into-a-200-million-a-celebrity-investment-magnet
- YACHT magazine — "Exclusive interview with the boss" (Aug 2025) — https://www.yacht.de/en/sailgp-exclusive-interview-with-the-boss-russell-coutts-in-conversation/
- CNBC Squawk Box video (June 2025) — https://www.cnbc.com/video/2025/06/05/sailgp-ceo-russell-coutts-on-the-business-of-boating-weve-got-a-bright-future.html
- Yahoo Finance "Opening Bid Unfiltered" with Brian Sozzi (Jan 2026) — search Apple Podcasts/Spotify
- Sail-World Coutts archive — https://www.sail-world.com (search "Coutts")

### Business press

- Sportico SailGP archive — https://www.sportico.com/?s=sailgp
- The Athletic — search "SailGP"
- Bloomberg — search "SailGP" and "Larry Ellison sailing"
- Forbes — search "SailGP"
- Insider Sport — https://insidersport.com (frequent SailGP deal coverage)
- SportBusiness — https://www.sportbusiness.com
- SportsPro Media — https://www.sportspromedia.com
- Front Office Sports — https://www.frontofficesports.com

### Sailing trade press

- Sail-World — https://www.sail-world.com
- Sailing Scuttlebutt — https://www.sailingscuttlebutt.com
- MySailing AU — https://www.mysailing.com.au/sailgp-news/
- Yachting World — https://www.yachtingworld.com

### Comparable leagues

- Formula 1 — https://www.formula1.com
- Liberty Media IR — https://www.libertymedia.com
- LIV Golf — https://www.livgolf.com
- IPL — https://www.iplt20.com
- UFC / TKO Group IR — https://ir.tkogrp.com
- America's Cup — https://www.americascup.com
- Joe Pompliano Huddle Up — https://jpompliano.com

### Industry research

- Deloitte Sports Business Group — https://www2.deloitte.com/global/en/services/consulting/services/sports-business-group.html
- PwC Sports Outlook — https://www.pwc.com/sportsoutlook
- Ampere Analysis — https://www.ampereanalysis.com
- Nielsen Sports — https://www.nielsen.com/insights/

### Russell Coutts background

- Wikipedia: Russell Coutts — https://en.wikipedia.org/wiki/Russell_Coutts
- Wikipedia: SailGP — https://en.wikipedia.org/wiki/SailGP

---

## 2. INTERVIEW ARCHIVE (populate `src/content/interviews/`)

One file per interview with frontmatter: `title`, `interviewer`, `outlet`, `date`, `url`, `format` (text/podcast/video), `key_topics[]`, plus a body with Q&A summary.

### TIME Interview — Russell Coutts (January 2024)

**Title:** "Meet the Sailor Who Thinks His Sport Is the Next Formula 1"
**URL:** https://time.com/6696233/russell-coutts-interview/

Q&A summary:

1. **Why does SailGP have a real shot at being the next Formula 1?** Three tailwinds: F1's "Drive to Survive" effect, pickleball-style new-sport boom, SailGP's own audience growth (~24% YoY per-event viewership, 13.6M; record 1.78M CBS viewers for Spain race beating F1 Brazil that weekend).

2. **How do F50 catamarans differentiate the product?** Foil at 60+ mph, visually dynamic on TV, race close to shore in iconic harbors — solves sailing's "white triangles on a blue background" TV problem.

3. **Why does the regular-season format matter?** America's Cup is every 4 years — sponsors can't plan, broadcasters can't program, athletes can't build careers. Regular season is the structural fix.

4. **How is competitive parity going?** Australia won first three championships on skill. Now all teams except Germany have won a race; only two haven't won an event. Spreading wins is *necessary for team commercial viability*.

5. **Who are the breakout personalities?** Phil Robertson (Canada) — "Mad Max of SailGP" — fights with umpires and rivals are "gold dust" for content.

6. **How important is a "Drive to Survive"-style documentary?** Critical. SailGP's own YouTube series did ~2.1M views; real interest from major players in a full docuseries. (This became "Uncharted," released July 2025.)

7. **What does the Lasry-led US team purchase signal?** Largest team transaction in league history; validates private ownership thesis. Group includes Issa Rae, Deontay Wilder, Jozy Altidore — celebrity capital is deliberate strategy.

8. **Tension between Middle East racing and environmental positioning?** "I absolutely disagree" with the criticism. Frames the Middle East as opportunity to add value, not contradiction.

9. **Most important leadership lesson from Larry Ellison?** Asked Ellison the secret to business success. After long answer, Ellison stopped: the key is "not giving up." Coutts uses this as operating philosophy.

10. **How did you personally get to the top of sailing?** "By outworking the opposition." Talent alone doesn't get anyone there.

**"Already asked" tags:** F1-comparison, drive-to-survive, americas-cup-vs-regular-season, F50-tech, lasry-celebrity-ownership, ellison-leadership, parity-narrative

---

## 3. TEAM PROFILES (populate `src/content/teams/`)

One file per team. Frontmatter: `name`, `nation`, `founded`, `current_owner`, `notable_owners[]`, `current_valuation_usd`, `latest_valuation_date`, `title_sponsor`, `driver`, `championships`.

### Current Teams (13 for 2026 season)

| Team | Nation | Notable Owners | Latest Valuation | Notes |
|---|---|---|---|---|
| US SailGP Team | USA | Marc Lasry/Avenue Sports Fund, Issa Rae, Deontay Wilder, Jozy Altidore | ~$35M (2023) | First major private acquisition |
| BONDS Flying Roos | Australia | Ryan Reynolds, Hugh Jackman (controlling, June 2025) | $60M+ | 3x champions; BONDS title sponsor |
| Emirates GBR | UK | Ben Ainslie group | $60M+ | 2025 champions |
| France SailGP Team | France | Kylian Mbappé, Ares Management | $60M+ | Ares minority stake June 2025 |
| Red Bull Italy SailGP Team | Italy | Anne Hathaway, Jimmy Spithill (CEO), Muse Capital, Red Bull | $45M (2025) | Joined 2025; new entry |
| Germany SailGP Team | Germany | Sebastian Vettel, David Blitzer, Joe Tsai, Deutsche Bank | $60M+ | Vettel investor; DB presenting partner |
| Mubadala Brazil SailGP Team | Brazil | Mubadala | $60M+ | Joined 2025; first South American team |
| Denmark SailGP Team (formerly ROCKWOOL Racing) | Denmark | Doug DeVos / American Magic (acquired Feb 2026) | $60M+ | Sale set valuation record |
| New Zealand (Black Foils) | NZ | League-owned (being sold 2026) | TBD | Originally league-owned |
| Canada SailGP Team | Canada | Various | TBD | Phil Robertson driver |
| Spain (Los Gallos) | Spain | Idan Ofer / Quantum Pacific (acquired 2026) | <$60M | Recent acquisition |
| Switzerland SailGP Team | Switzerland | Ernesto Bertarelli group | TBD | Joined 2024 |
| Artemis Racing (Sweden) | Sweden | Torbjörn Törnqvist | $60M+ | New for 2026 |

---

## 4. TIMELINE (populate `src/content/timeline/`)

Key dated events. One file per event with frontmatter: `date`, `category` (founding/team-sale/sponsor/venue/broadcast/incident/governance), `title`, `summary`.

- **October 2018** — SailGP founded by Russell Coutts and Larry Ellison
- **2019** — Inaugural season: 6 league-owned teams, 5 events. Australia wins championship (Tom Slingsby).
- **2020** — Season 2 disrupted by COVID
- **2021–2022** — Australia wins Seasons 2 and 3
- **2023** — Marc Lasry/Avenue Sports Fund acquires US team for ~$35M (largest team transaction in league history at the time)
- **November 2023** — Spain race draws 1.78M CBS viewers (most-watched US sailing broadcast since 1992)
- **2024** — Season 4: 10 teams, 5 privately owned; New Zealand wins
- **March 2024** — Christchurch event cancelled mid-event due to Hector's dolphins; Coutts publicly criticizes "minority interests"
- **November 2024** — Emirates signs 5-year global airline partnership
- **2024–25 (Season 5)** — 12 teams, 12 events, two new venues (Italy, Brazil); Emirates GBR wins championship
- **June 2025** — Ryan Reynolds and Hugh Jackman become controlling owners of Australia team
- **June 2025** — Ares Management takes minority stake in France team; Mbappé already on cap table
- **July 2025** — "Uncharted" docuseries launches globally (Apple TV+ / multiple broadcasters)
- **July 2025** — SailGP global HQ for design/manufacturing/innovation officially opens
- **Nov 2025** — Race to Abu Dhabi broadcast: 3.47M US viewers — most-watched sailing race in US history
- **Dec 2025** — Season 5 closes: $200M+ revenue, $230M regional economic impact, 112,000+ ticketed spectators
- **Jan 2026** — Season 6 opens in Perth; 13 teams (Sweden/Artemis joins); $12.8M total prize purse
- **Feb 2026** — Doug DeVos / American Magic acquires Denmark team for $60M+ — record valuation
- **Feb 2026** — Idan Ofer / Quantum Pacific acquires Spanish team
- **Feb 2026** — New Zealand-France collision sidelines both teams in Auckland

---

## 5. FOSTER FRAMEWORK ANALYSIS (populate `src/content/framework/`)

One file per criterion. Frontmatter: `criterion_number`, `criterion_name`, `sailgp_score` (1-5 self-assessment), `last_updated`. Body has three sections: **Strengths**, **Weaknesses / Risks**, **Open Questions for Russell**.

### Criterion 1 — Vision & Strategic Positioning

- **Strengths:** Clear "Formula 1 of sailing" positioning; explicit disruption of America's Cup model; Ellison-Coutts founding credibility.
- **Weaknesses:** Whether sailing's audience ceiling actually scales to F1 levels remains unproven.
- **Open Questions:** What's the realistic 10-year vision — F1-scale or something more bounded? Does Coutts see SailGP as a stand-alone league forever, or eventually merging with America's Cup?

### Criterion 2 — Investor / Owner Base

- **Strengths:** Quality of capital is exceptional — Lasry, Ares, Sixth Street-style PE, plus celebrity (Reynolds, Jackman, Hathaway, Mbappé, Vettel) and family offices (DeVos, Ofer, Törnqvist).
- **Weaknesses:** Heavy reliance on Ellison capital historically; team-level concentration risk with celebrity-driven valuations.
- **Open Questions:** What's the long-term role of Ellison? Is there a plan for a league-level liquidity event?

### Criterion 3 — League Governance & Management

- **Open Questions:** What's the league-vs-team decision rights split? How are owner conflicts handled? Succession plan for Coutts?

### Criterion 4 — Competitive Format & Sporting Product

- **Strengths:** Foiling F50s at 60+ mph, short stadium-style courses, regular-season format.
- **Open Questions:** When (if ever) does SailGP move off the one-design F50 platform?

### Criterion 5 — Athlete Talent Pool

- **Open Questions:** How many sailors globally can actually crew an F50? What's the development pathway? How does SailGP relate to Olympic and America's Cup talent flows?

### Criterion 6 — Venue / Host City Strategy

- **Strengths:** Iconic harbor venues; $26.2M average regional economic impact (4x Season 1).
- **Weaknesses:** Christchurch dolphin cancellation; venue moves (St-Tropez to Geneva).
- **Open Questions:** What's the host fee economics? Are events profitable on standalone basis?

### Criterion 7 — Broadcast & Media Distribution

- **Strengths:** CBS US deal; 3.47M Abu Dhabi 2025 viewership; "Uncharted" docuseries.
- **Open Questions:** Path to bigger US broadcast deal? Streaming-direct strategy?

### Criterion 8 — Sponsorship & Commercial Partnerships

- **Strengths:** Rolex 10-year title sponsorship; Emirates, DP World, KPMG, Accor multi-season deals; some teams >$10–12M annual sponsorship revenue.
- **Open Questions:** What's the breakdown of league vs. team sponsorship revenue? Sponsor renewal/churn rates?

### Criterion 9 — Fan Engagement & Brand Building

- **Strengths:** +58 average NPS, 112,000+ ticketed in 2025, 25,000 Auckland, 20,000 Portsmouth.
- **Open Questions:** Demographic profile of attendees? Path to building deep fan-team affinity (vs. tourist-attended events)?

### Criterion 10 — Financial Sustainability

- **Strengths:** $200M+ revenue 2025; four teams reportedly profitable on sponsorship alone.
- **Weaknesses:** Most revenue streams (broadcast, licensing) still undeveloped; league P&L not public.
- **Open Questions:** Per-event unit economics? Path to sustained league profitability without Ellison?

### Criterion 11 — Potential Growth Opportunities

- 20-team cap (from 13 today); markets identified: China, Japan, Korea, Mexico, India; 20+ events vs. F1's 24; underdeveloped broadcast and licensing.

### Criterion 12 — Potential Growth Challenges

- Talent pipeline depth; safety incidents (NZ-FRA 2026 collision); environmental tensions (Christchurch); single-supplier F50 manufacturing risk; geopolitical exposure (Middle East, China expansion).

### Criterion 13 — Disruptive Positioning vs. Incumbents

- vs. America's Cup (4-year cycle, no regular season); vs. SailGP-similar (Extreme E, E1 powerboat); vs. broader sports (F1 is aspirational benchmark).

---

## 6. COMPARABLE LEAGUES (populate `src/content/comparables/`)

One file per league. Frontmatter: `name`, `founded`, `parent_owner`, `team_count`, `season_revenue_usd`, `season_event_count`. Body: brief profile + lessons for SailGP.

- **Formula 1** (1950; Liberty Media; 10 teams; ~$3.6B revenue 2024; 24 races) — gold standard comparable; Drive to Survive transformation story; per-race economics ($200–400M vs. SailGP's $26M).
- **LIV Golf** (2022; PIF/Saudi Arabia; 13 teams; 14 events) — counter-example for sovereign-funded league dynamics; broadcast struggles.
- **IPL** (2008; BCCI; 10 teams; massive media rights) — emerging-market league success; PE entry case.
- **UFC / TKO Group** (1993; Endeavor/TKO public co.) — niche-to-mainstream playbook.
- **America's Cup** (1851) — the legacy model SailGP disrupts; understanding why the Cup's model failed commercially is core to SailGP's origin story.
- **Premier Lacrosse League** (2018; founder-led, then Bowlcamp Capital) — similar founder-led, league-controlled-then-franchised model.
- **Extreme E / E1 Series** — direct competitors for tech-forward, sustainability-themed, global venue positioning.

---

## 7. OPEN QUESTIONS FOR RUSSELL (populate `src/content/open-questions/`)

This is the most important page. One file per question theme. Frontmatter: `theme`, `priority` (high/medium/low), `framework_link[]` (which Foster criteria), `already_asked` (boolean), `source_check[]` (where I confirmed it hasn't been answered).

### Theme: Unit Economics

- What does the P&L of a typical Grand Prix event look like? Host fees in vs. production costs out?
- Which teams are profitable, and what does their cost structure look like?
- What does it actually cost to operate an F50 team for a season?

### Theme: League Path to Profitability

- Has SailGP at the league level reached operating breakeven? If not, what's the timeline?
- How dependent is the current model still on Ellison's funding?
- What's the realistic path to broadcast and licensing revenue parity with sponsorship?

### Theme: Liquidity / Strategic Future

- Is there a plan for a league-level liquidity event — IPO, strategic sale, PE round?
- What's the long-term role of Larry Ellison — funder, owner, board, exit?
- Succession planning — who runs SailGP after Russell Coutts?

### Theme: One-Design vs. Open Innovation

- The F50 is one-design. F1 lets teams build cars. When (if ever) does SailGP move off one-design?
- Tension between cost control (one-design) and innovation appeal (open) — how does it resolve?

### Theme: Team Population Dynamics

- Why a 20-team cap? What's the analytic basis?
- What happens when a team underperforms commercially? Is there a relegation/replacement mechanism?
- How are new market entries (China, India, Japan, Korea, Mexico) being prioritized?

### Theme: Risk Management

- Lessons from the Christchurch Hector's dolphin cancellation?
- The Auckland 2026 NZ-FRA collision — what changes operationally?
- Single-supplier F50 risk — what's the contingency if SailGP Technologies (Southampton) has a disruption?
- How is geopolitical risk managed for races in the Middle East, and planned events in China?

### Theme: Talent Pipeline

- How many sailors globally can actually crew an F50?
- What's the development pathway — and how does SailGP relate to Olympic and America's Cup talent flows?
- What does a long-term athlete career in SailGP look like?

### Theme: America's Cup Relationship

- Is the relationship with the America's Cup competitive, complementary, or convergent over time?
- Could SailGP and the Cup ever merge or formally align?

### Theme: Governance & Owner Dynamics

- How are owner conflicts resolved? What's the league-vs-team decision rights split?
- With celebrity owners (Reynolds, Jackman, Hathaway), how active vs. passive are they in operations?

### Theme: Sustainability & Brand Risk

- The "Powered By Nature" positioning vs. flying global teams — how does Coutts answer the carbon critique?
- Is the Impact League marketing or operational?

---

## 8. INTERVIEW PREP (populate `src/content/interview-prep/`)

Empty initially — to be filled in once research is mature. Should support a draft → reorder → finalize workflow.

