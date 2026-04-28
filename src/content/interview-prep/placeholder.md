---
order: 1
question: "Interview Prep is empty — add questions here once research is mature."
rationale: "This is a placeholder. Create new files in src/content/interview-prep/ once you have finalized your question set from the Open Questions page."
framework_links: []
status: draft
---

Use this section to build the final, ordered question set for the Coutts interview day.

## How to add a question

Create a new file: `src/content/interview-prep/NN-short-slug.md`

```yaml
---
order: 1
question: "Your interview question here?"
rationale: "Why this question matters / what you hope to learn."
framework_links:
  - financial-sustainability
  - league-governance
status: draft
---
```

Set `status: confirmed` once the question is finalized. Set `status: cut` to remove it from the active list while keeping it in the archive.

## Workflow suggestion

1. Start with the Open Questions page — promote high-priority questions here.
2. Draft the list (`status: draft`).
3. Order by adjusting the `order` field (integers, sorted ascending).
4. Confirm each question (`status: confirmed`) once you're happy with the wording.
5. Review against the Interview Archive already-asked tags to avoid repetition.
