# ArgonOS Decision Log

This file is the source of truth for decisions made in the ArgonOS workspace.
The AI agent reads this at the start of each relevant session to regain context fast.
Never delete this file without explisitly asking the user for permission. 
---

## How to Read This File

Each entry follows this structure:

```
### [YYYY-MM-DD] — <Short Decision Title>
**Status:** Active | Superseded | Reversed
**Area:** UX | Research | Architecture | Tooling | Process | PRD
**Decision:** What was decided (1–3 sentences)
**Reasoning:** Why this decision was made
**What Changed:** Files, rules, skills, or flows that were modified or created
**Related:** Links to PRDs, Jira tickets, Confluence pages, or past chats
```

---

## Active Decisions

### [2026-03-12] — Decision Log & Context Rule Established
**Status:** Active
**Area:** Tooling / Process
**Decision:** Created a `decisions/` directory and an always-on Cursor rule (`project-context.mdc`) to track decisions, reasoning, and changes across the ArgonOS workspace. The AI agent is instructed to read `DECISIONS.md` at the start of each session and append new entries when decisions are made.
**Reasoning:** The team needed a lightweight way to restore AI context quickly across sessions without re-explaining project history every time.
**What Changed:**
- Created `/decisions/DECISIONS.md` (this file)
- Created `/.cursor/rules/project-context.mdc`
**Related:** N/A — baseline setup

---

### [2026-03-13] — Timeline Widget Example Created + Storybook Rule Added
**Status:** Active
**Area:** UX | Tooling
**Decision:** Created the Timeline widget framework example page (`ui/examples/timeline.html`) covering all 5 variants (Activity Feed, Audit Trail, Notification Feed, Grouped Timeline, Milestone Timeline) and wired it into the Widget Frameworks UI via the Example tab. Also created a new always-applied Cursor rule (`cw-storybook-reference.mdc`) that instructs the agent to fetch and reference the CW UI Asio Neon Storybook before planning or building any widget framework example or Asio Neon component surface.
**Reasoning:** The summary example was already complete. The timeline example follows the same pattern to give designers a live, annotated reference for all 5 Timeline variants. The Storybook rule closes the gap identified during planning — the agent had not been referencing the Storybook as additional context when building widget examples, even though the framework specs encode Storybook Story References for every component.
**What Changed:**
- Created `ui/examples/timeline.html`
- Updated `ui/widget-frameworks.html` — Timeline `exampleFile` set from `null` to `/examples/timeline.html`
- Created `/.cursor/rules/cw-storybook-reference.mdc`
**Related:** [Timeline Widget Framework Example Plan](643e5201-f62d-45fb-b913-de02065a8ef4)

---

## Superseded / Reversed Decisions

_(None yet)_
