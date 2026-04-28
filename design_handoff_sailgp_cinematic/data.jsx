// Shared content extracted from the case study seed data.

const STATS = {
  revenue: '$200M+',
  revenueLabel: 'Season 5 revenue',
  viewers: '3.47M',
  viewersLabel: 'Abu Dhabi US viewers (Nov 2025)',
  econ: '$26.2M',
  econLabel: 'Avg regional economic impact',
  nps: '+58',
  npsLabel: 'Average event NPS',
  ticketed: '112,000+',
  ticketedLabel: 'Ticketed spectators, 2025',
  teams: '13 → 20',
  teamsLabel: 'Current teams → cap',
  prize: '$12.8M',
  prizeLabel: 'S6 total prize purse',
  events: '12',
  eventsLabel: 'Grand Prix events / season',
};

// Per-event US viewership trajectory (Nielsen / press-reported)
const VIEWERSHIP = [
  { season: 'S1', label: '2019', avg: 0.4, peak: 0.6 },
  { season: 'S2', label: '2020', avg: 0.5, peak: 0.8 },
  { season: 'S3', label: '2021–22', avg: 0.7, peak: 1.1 },
  { season: 'S4', label: '2023', avg: 1.1, peak: 1.78 },
  { season: 'S5', label: '2024–25', avg: 1.6, peak: 2.4 },
  { season: 'S6', label: '2025–26', avg: 2.2, peak: 3.47 },
];

// Team valuations (USD M, latest reported)
const TEAMS = [
  { code: 'AUS', name: 'BONDS Flying Roos', nation: 'Australia', val: 60, owners: 'Reynolds, Jackman', sponsor: 'BONDS', titles: 3, color: '#FFD400' },
  { code: 'GBR', name: 'Emirates GBR', nation: 'United Kingdom', val: 60, owners: 'Ben Ainslie group', sponsor: 'Emirates', titles: 1, color: '#E11D48' },
  { code: 'FRA', name: 'France SailGP Team', nation: 'France', val: 60, owners: 'Mbappé, Ares Mgmt', sponsor: '—', titles: 0, color: '#1E40AF' },
  { code: 'GER', name: 'Germany SailGP Team', nation: 'Germany', val: 60, owners: 'Vettel, Blitzer, Tsai', sponsor: 'Deutsche Bank', titles: 0, color: '#0EA5E9' },
  { code: 'BRA', name: 'Mubadala Brazil', nation: 'Brazil', val: 60, owners: 'Mubadala', sponsor: 'Mubadala', titles: 0, color: '#16A34A' },
  { code: 'DEN', name: 'Denmark SailGP', nation: 'Denmark', val: 60, owners: 'DeVos / American Magic', sponsor: '—', titles: 0, color: '#DC2626' },
  { code: 'USA', name: 'US SailGP Team', nation: 'United States', val: 35, owners: 'Lasry, Issa Rae, Wilder', sponsor: '—', titles: 0, color: '#1D4ED8' },
  { code: 'ITA', name: 'Red Bull Italy', nation: 'Italy', val: 45, owners: 'Hathaway, Spithill, Red Bull', sponsor: 'Red Bull', titles: 0, color: '#7C3AED' },
  { code: 'SWE', name: 'Artemis Racing', nation: 'Sweden', val: 60, owners: 'Törnqvist', sponsor: '—', titles: 0, color: '#0891B2' },
  { code: 'ESP', name: 'Los Gallos', nation: 'Spain', val: 50, owners: 'Idan Ofer / Quantum Pacific', sponsor: '—', titles: 0, color: '#EA580C' },
  { code: 'NZL', name: 'Black Foils', nation: 'New Zealand', val: 55, owners: 'League-owned (selling)', sponsor: '—', titles: 1, color: '#0F172A' },
  { code: 'CAN', name: 'Canada SailGP', nation: 'Canada', val: 40, owners: 'Various', sponsor: '—', titles: 0, color: '#B91C1C' },
  { code: 'SUI', name: 'Switzerland', nation: 'Switzerland', val: 45, owners: 'Bertarelli group', sponsor: '—', titles: 0, color: '#DC2626' },
];

const TIMELINE = [
  { date: '2018-10', cat: 'founding', title: 'SailGP founded', body: 'Russell Coutts and Larry Ellison launch the league. Six league-owned teams, F50 platform.' },
  { date: '2019', cat: 'season', title: 'Inaugural season', body: '6 teams, 5 events. Australia (Tom Slingsby) wins championship.' },
  { date: '2020', cat: 'incident', title: 'COVID disruption', body: 'Season 2 schedule disrupted globally. League funding from Ellison absorbs the gap.' },
  { date: '2023', cat: 'team-sale', title: 'Lasry acquires US team — $35M', body: 'Avenue Sports Fund + Issa Rae, Deontay Wilder, Jozy Altidore. Largest team transaction at the time.' },
  { date: '2023-11', cat: 'broadcast', title: '1.78M CBS viewers, Spain race', body: 'Most-watched US sailing broadcast since 1992. Beat F1 Brazil same weekend.' },
  { date: '2024', cat: 'season', title: 'Season 4: 10 teams, 5 private', body: 'New Zealand wins championship. Private ownership thesis takes hold.' },
  { date: '2024-03', cat: 'incident', title: 'Christchurch cancelled', body: 'Hector\'s dolphins force mid-event cancellation. Coutts publicly criticises “minority interests.”' },
  { date: '2024-11', cat: 'sponsor', title: 'Emirates 5-year global deal', body: 'Anchor airline partnership. Validates premium-brand thesis.' },
  { date: '2024-25', cat: 'season', title: 'Season 5 — 12 teams, 12 events', body: 'New venues: Italy, Brazil. Emirates GBR wins championship.' },
  { date: '2025-06', cat: 'team-sale', title: 'Reynolds + Jackman take Australia', body: 'Controlling stake in BONDS Flying Roos. Headline celebrity entry.' },
  { date: '2025-06', cat: 'team-sale', title: 'Ares Management → France', body: 'Minority stake. Mbappé already on cap table.' },
  { date: '2025-07', cat: 'broadcast', title: '"Uncharted" docuseries launches', body: 'Apple TV+ and global broadcasters. The "Drive to Survive" play.' },
  { date: '2025-07', cat: 'governance', title: 'SailGP Tech HQ opens', body: 'Southampton design / manufacturing / innovation hub formally inaugurated.' },
  { date: '2025-11', cat: 'broadcast', title: '3.47M US viewers, Race to Abu Dhabi', body: 'Most-watched sailing race in US history.' },
  { date: '2025-12', cat: 'season', title: 'Season 5 closes — $200M+ revenue', body: '$230M regional economic impact, 112k+ ticketed spectators.' },
  { date: '2026-01', cat: 'season', title: 'Season 6 opens, Perth', body: '13 teams (Sweden/Artemis joins). $12.8M total prize purse.' },
  { date: '2026-02', cat: 'team-sale', title: 'DeVos / American Magic → Denmark', body: 'Acquired for $60M+. New record team valuation.' },
  { date: '2026-02', cat: 'team-sale', title: 'Idan Ofer / Quantum Pacific → Spain', body: 'Family office capital continues to enter.' },
  { date: '2026-02', cat: 'incident', title: 'NZ–FRA collision, Auckland', body: 'Both teams sidelined mid-event. Triggers safety review.' },
];

const FRAMEWORK = [
  { n: 1,  name: 'Vision & Strategic Positioning', score: 4, status: 'strong', summary: '"F1 of sailing." Ellison-Coutts founding credibility; explicit disruption of the Cup model.' },
  { n: 2,  name: 'Investor / Owner Base',          score: 5, status: 'strong', summary: 'Quality of capital is exceptional — Lasry, Ares, Sixth Street-style PE, plus celebrity names.' },
  { n: 3,  name: 'League Governance & Management', score: 3, status: 'open',   summary: 'League-vs-team rights split unclear. Coutts succession unaddressed.' },
  { n: 4,  name: 'Competitive Format & Sport',     score: 4, status: 'strong', summary: 'F50 foiling at 60+ mph, stadium courses, regular-season cadence.' },
  { n: 5,  name: 'Athlete Talent Pool',            score: 3, status: 'open',   summary: 'Global pool to crew F50s is shallow. Pipeline overlaps Olympic + Cup.' },
  { n: 6,  name: 'Venue / Host City Strategy',     score: 4, status: 'mixed',  summary: '$26.2M avg regional impact. Christchurch and St-Tropez exits show fragility.' },
  { n: 7,  name: 'Broadcast & Media Distribution', score: 4, status: 'strong', summary: 'CBS deal; 3.47M Abu Dhabi peak; "Uncharted" docuseries.' },
  { n: 8,  name: 'Sponsorship & Commercial',       score: 5, status: 'strong', summary: 'Rolex 10-yr title; Emirates, DP World, KPMG, Accor multi-season.' },
  { n: 9,  name: 'Fan Engagement & Brand',         score: 4, status: 'strong', summary: '+58 NPS, 112k+ ticketed, 25k Auckland. Demographic mix unclear.' },
  { n: 10, name: 'Financial Sustainability',       score: 3, status: 'open',   summary: '$200M+ revenue. Four teams reportedly profitable. League P&L not public.' },
  { n: 11, name: 'Growth Opportunities',           score: 4, status: 'strong', summary: '20-team cap, China/Japan/Korea/Mexico/India queued. Broadcast + licensing underdeveloped.' },
  { n: 12, name: 'Growth Challenges',              score: 3, status: 'mixed',  summary: 'Talent depth, single-supplier F50 risk, Middle East / China geopolitics.' },
  { n: 13, name: 'Disruptive Positioning',         score: 4, status: 'strong', summary: 'Disrupts America\'s Cup; defends vs. Extreme E and E1; F1 is aspirational.' },
];

const COMPARABLES = [
  { name: 'Formula 1',      founded: 1950, parent: 'Liberty Media', teams: 10, revenue: 3600, events: 24, note: 'The aspirational benchmark. Drive to Survive transformation.' },
  { name: 'LIV Golf',       founded: 2022, parent: 'PIF',          teams: 13, revenue: null, events: 14, note: 'Sovereign-funded counter-example. Broadcast struggles.' },
  { name: 'IPL',            founded: 2008, parent: 'BCCI',         teams: 10, revenue: 1500, events: 74, note: 'Emerging-market success. PE entry case.' },
  { name: 'UFC / TKO',      founded: 1993, parent: 'TKO Group',    teams: null, revenue: 1300, events: 42, note: 'Niche-to-mainstream playbook.' },
  { name: "America's Cup",  founded: 1851, parent: 'Various',      teams: 6,  revenue: null, events: 1,  note: 'The legacy model SailGP disrupts.' },
  { name: 'Premier Lacrosse', founded: 2018, parent: 'Bowlcamp',  teams: 8,  revenue: 50,   events: 14, note: 'Founder-led → franchised model.' },
  { name: 'Extreme E',      founded: 2021, parent: 'Alejandro Agag', teams: 12, revenue: null, events: 5, note: 'Tech-forward sustainability competitor.' },
];

const QUESTIONS = [
  { theme: 'Unit Economics',          priority: 'high', count: 3, q: 'What does the P&L of a typical Grand Prix event look like?' },
  { theme: 'League Profitability',    priority: 'high', count: 3, q: 'Has SailGP at the league level reached operating breakeven?' },
  { theme: 'Liquidity / Future',      priority: 'high', count: 3, q: 'Is there a plan for a league-level liquidity event — IPO, sale, PE?' },
  { theme: 'One-Design vs Open',      priority: 'med',  count: 2, q: 'When (if ever) does SailGP move off the one-design F50 platform?' },
  { theme: 'Team Population',         priority: 'high', count: 3, q: 'Why a 20-team cap? What\'s the analytic basis?' },
  { theme: 'Risk Management',         priority: 'high', count: 4, q: 'Single-supplier F50 risk — what\'s the contingency plan?' },
  { theme: 'Talent Pipeline',         priority: 'med',  count: 3, q: 'How many sailors globally can actually crew an F50?' },
  { theme: "America's Cup Relationship", priority: 'med', count: 2, q: 'Competitive, complementary, or convergent over time?' },
  { theme: 'Governance & Owners',     priority: 'high', count: 2, q: 'How are owner conflicts resolved? League-vs-team rights?' },
  { theme: 'Sustainability',          priority: 'med',  count: 2, q: '"Powered By Nature" vs flying global teams — answering the carbon critique?' },
];

const INTERVIEWS = [
  { outlet: 'TIME',         date: '2024-01', title: 'Meet the Sailor Who Thinks His Sport Is the Next Formula 1', topics: 10, format: 'text' },
  { outlet: 'CNBC',         date: '2025-06', title: '"We\'ve Got a Bright Future"',                                topics: 7,  format: 'video' },
  { outlet: 'YACHT',        date: '2025-08', title: 'Exclusive interview with the boss',                          topics: 8,  format: 'text' },
  { outlet: 'Fast Company', date: '2025-11', title: 'How SailGP turned a niche sport into a $200M magnet',         topics: 9,  format: 'text' },
  { outlet: 'Yahoo Finance',date: '2026-01', title: 'Opening Bid Unfiltered — Russell Coutts',                    topics: 6,  format: 'podcast' },
];

const QUOTES = [
  { text: 'By outworking the opposition.', who: 'Russell Coutts', context: 'on getting to the top of sailing', src: 'TIME, Jan 2024' },
  { text: 'Not giving up.', who: 'Larry Ellison', context: 'the secret to business success, as relayed by Coutts', src: 'TIME, Jan 2024' },
  { text: '"Mad Max of SailGP" — gold dust for content.', who: 'Coutts on Phil Robertson', context: 'on breakout personalities', src: 'TIME, Jan 2024' },
  { text: 'We\'ve got a bright future.', who: 'Russell Coutts', context: 'on the next decade', src: 'CNBC, June 2025' },
];

// Expose to other JSX scripts (Babel files don't share scope)
Object.assign(window, {
  STATS, VIEWERSHIP, TEAMS, TIMELINE, FRAMEWORK, COMPARABLES, QUESTIONS, INTERVIEWS, QUOTES,
});
