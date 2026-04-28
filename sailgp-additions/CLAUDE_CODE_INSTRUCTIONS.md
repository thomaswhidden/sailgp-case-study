# CLAUDE CODE — Add Thompson Interview Content

## What this is

A bundle of new content files to add to the SailGP case study site. These come from analysis of the Andrew Thompson (SailGP Managing Director) interview on the Business of Sport podcast, August 12, 2025. This is the highest-yield single source on SailGP commercial mechanics in the public record.

## What you (Claude Code) need to do

Read every file in this folder. Then:

1. **Add the interview file** (`thompson-business-of-sport-2025-08-12.md`) to `src/content/interviews/`
2. **Add the source file** (`sources/thompson-business-of-sport.md`) to `src/content/sources/`
3. **Add the seven open question files** from the `open-questions/` subfolder to `src/content/open-questions/`
4. **Add the two updated framework files** (`framework/criterion-10-financial-sustainability.md` and `framework/criterion-5-athlete-talent.md`) to `src/content/framework/` — overwriting existing files for these criteria, since the new versions reflect Thompson's disclosures
5. **Add the three timeline files** from `timeline/` to `src/content/timeline/`

## Schema check

Before adding, verify each file's frontmatter against the existing Zod schema for that content collection. If any required field is missing from the new files, add a sensible default. If any field is present in the new files but not in the schema, decide whether to add the field to the schema (preferred — these fields are useful) or remove from the new file.

In particular, check:

- The `interviews` schema needs to support `key_topics`, `framework_link`, `already_asked` (array of topic slugs), `note_value`, `priority`, `guest`, `guest_role`, `format`, `duration`
- The `open-questions` schema needs `theme`, `priority`, `framework_link`, `already_asked` (boolean), `source_check` (array of source slugs), `last_updated`
- The `framework` schema needs `criterion_number`, `criterion_name`, `sailgp_score`, `last_updated`, `sources` (array of source slugs)
- The `timeline` schema needs `date`, `category`, `title`, `summary`, `sources` (array of source slugs)
- The `sources` schema needs `priority`, `tags`, `framework`, `notes`, `related_interviews`

## After adding the files

1. **Update the homepage stat counters** if they're computed from content collections — the new files should bump:
   - "Sources" total (+1, status `cited`)
   - "Interviews archived" (+1, now 4)
   - "High-priority Qs" (+ ~5, depending on how many of the new ones are tagged `priority: high`)

2. **Add cross-links on detail pages**:
   - Every framework page that lists Thompson 2025-08-12 in its `sources` should render a link to the interview detail page
   - Every open question that lists `thompson-business-of-sport-2025-08-12` in `source_check` should render a link to the interview detail page
   - The interview detail page should render links to all open questions and framework criteria that cite it (reverse lookup)

3. **Confirm the build runs cleanly**:
   ```
   npm run build
   ```
   Fix any schema validation errors before pushing.

4. **Commit and deploy**:
   ```
   git add .
   git commit -m "Add Thompson Business of Sport interview content and follow-on analysis"
   git push
   ```
   Netlify will auto-deploy.

## What's in this bundle

- `thompson-business-of-sport-2025-08-12.md` — main interview file with full structured Q&A summary
- `sources/thompson-business-of-sport.md` — source entry
- `framework/criterion-10-financial-sustainability.md` — updated Criterion 10 reflecting new financial data
- `framework/criterion-5-athlete-talent.md` — updated Criterion 5 reflecting transfer market and equity model disclosures
- `open-questions/league-path-to-profitability.md`
- `open-questions/team-revenue-ceiling.md`
- `open-questions/transfer-market-governance.md`
- `open-questions/group-format-mechanics.md`
- `open-questions/betting-gaming.md`
- `open-questions/content-strategy.md`
- `open-questions/asia-mexico-expansion.md`
- `open-questions/cost-cap-evolution.md`
- `timeline/2025-08-12-thompson-interview.md`
- `timeline/2025-06-first-sailing-transfer-fee.md`
- `timeline/2025-01-chartered-cargo-ship.md`

## If anything is unclear

Ask before guessing. The slugs (filenames without extension) are used for cross-referencing — if the project is using a different slug convention, normalize the filenames first and update all `source_check`, `sources`, and `related_interviews` references accordingly.
