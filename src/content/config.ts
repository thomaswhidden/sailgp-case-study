import { defineCollection, z } from 'astro:content';

const sources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    publisher: z.string(),
    date: z.string().optional(),
    type: z.enum(['article', 'podcast', 'video', 'podcast-video', 'book', 'website', 'report']),
    status: z.enum(['to-read', 'reading', 'read', 'cited']),
    priority: z.enum(['high', 'medium', 'low']).optional(),
    tags: z.array(z.string()).default([]),
    framework: z.array(z.string()).default([]),
    notes: z.string().optional(),
    related_interviews: z.array(z.string()).default([]),
  }),
});

const interviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    interviewer: z.string(),
    outlet: z.string(),
    date: z.string(),
    url: z.string().url(),
    format: z.enum(['text', 'podcast', 'video', 'podcast-video']),
    duration: z.string().optional(),
    guest: z.string().optional(),
    guest_role: z.string().optional(),
    priority: z.enum(['high', 'medium', 'low']).optional(),
    key_topics: z.array(z.string()).default([]),
    already_asked_tags: z.array(z.string()).default([]),
    framework_link: z.array(z.string()).default([]),
    note_value: z.string().optional(),
  }),
});

const teams = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nation: z.string(),
    flag: z.string().optional(),
    founded: z.number().optional(),
    current_owner: z.string(),
    notable_owners: z.array(z.string()).default([]),
    current_valuation_usd: z.number().optional(),
    latest_valuation_date: z.string().optional(),
    title_sponsor: z.string().optional(),
    driver: z.string().optional(),
    championships: z.number().default(0),
    status: z.enum(['active', 'sold', 'league-owned', 'tbd']).default('active'),
    notes: z.string().optional(),
  }),
});

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    category: z.enum([
      'founding', 'team-sale', 'sponsor', 'venue',
      'broadcast', 'incident', 'governance', 'operations', 'athlete', 'other',
    ]),
    title: z.string(),
    summary: z.string(),
    sources: z.array(z.string()).default([]),
  }),
});

const framework = defineCollection({
  type: 'content',
  schema: z.object({
    criterion_number: z.number(),
    criterion_name: z.string(),
    sailgp_score: z.number().min(1).max(5).optional(),
    last_updated: z.string().optional(),
    sources: z.array(z.string()).default([]),
  }),
});

const comparables = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    founded: z.number(),
    parent_owner: z.string().optional(),
    team_count: z.number().optional(),
    season_revenue_usd: z.string().optional(),
    season_event_count: z.number().optional(),
    relevance_to_sailgp: z.string().optional(),
  }),
});

const openQuestions = defineCollection({
  type: 'content',
  schema: z.object({
    theme: z.string(),
    priority: z.enum(['high', 'medium', 'low']),
    framework_links: z.array(z.string()).default([]),
    already_asked: z.boolean().default(false),
    source_check: z.array(z.string()).default([]),
    last_updated: z.string().optional(),
  }),
});

const interviewPrep = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    question: z.string(),
    rationale: z.string().optional(),
    framework_links: z.array(z.string()).default([]),
    status: z.enum(['draft', 'confirmed', 'cut']).default('draft'),
  }),
});

const caseDraft = defineCollection({
  type: 'content',
  schema: z.object({
    section_number: z.string(),
    title: z.string(),
    part: z.enum(['A', 'B', 'cover', 'exhibits', 'matrix']).optional(),
    status: z.enum(['draft', 'review', 'final']).default('draft'),
    last_updated: z.string().optional(),
  }),
});

export const collections = {
  sources,
  interviews,
  teams,
  timeline,
  framework,
  comparables,
  'open-questions': openQuestions,
  'interview-prep': interviewPrep,
  'case-draft': caseDraft,
};
