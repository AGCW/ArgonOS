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

### [2026-03-20] — Discovery Pack: Billing Product (add / create / convert flows)
**Status:** Active  
**Area:** Research | UX | PRD  
**Decision:** Ran the UX PRD Discovery Pipeline on the Billing Product PRD (improve flows for add, create and convert). Readiness evaluated as **Not Ready** (39/100 after metrics gate); pipeline **stopped before Marvin** research per standard gate rules. Discovery pack persisted with full readiness output and recommendation to clarify KPIs and E2E workflows before discovery.  
**Reasoning:** Success KPIs section is an empty table; workflows are scenario-level only; several requirements and entitlement checks are incomplete.  
**What Changed:**  
- Created `ui/discovery-packs/2026-03-20-billing-product-add-create-convert-flows.md`  
- Updated `ui/discovery-packs/manifest.json` (prepended new entry)  
**Related:** [PRD: Billing Product - improve flows for add, create and convert actions](https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1023541556/)

---

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

### [2026-03-13] — Discovery Pack: Recent Ticket Drawer
**Status:** Active
**Area:** Research | UX
**Decision:** Ran the UX PRD Discovery Pipeline on the Recent Ticket Drawer PRD. Produced a Discovery Pack with a readiness score of 62/100 (Conditionally Ready) and a strong Marvin evidence set from the Asio Ticketing - V3 project. Identified a key design risk around the PRD's fixed "open in new tab" decision, which conflicts with multiple user preference signals.
**Reasoning:** Pipeline executed per standard workflow: fetch → readiness → gate check → research retrieval → pack output and persistence.
**What Changed:**
- Created `ui/discovery-packs/2026-03-13-recent-ticket-drawer.md`
- Updated `ui/discovery-packs/manifest.json` (prepended new entry)
**Related:** https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1009123550/PRD+Recent+Ticket+Drawer

---

### [2026-03-13] — Figma Concept Generation Pipeline Established
**Status:** Active
**Area:** Tooling | UX
**Decision:** Connected the Figma Asio Neon library and Widgets-Templates-Library to ArgonOS via Figma MCP. Extracted design tokens (colors, typography, spacing) and widget sizing grid (7 tiers: XXS–XXL on an 8-column, 16px-gap grid). Created a persistent token reference doc and an always-on Cursor rule that enforces on-system values for all concept generation. Validated the full round-trip by generating and pushing a Ticket Summary Dashboard concept to Figma.
**Reasoning:** Enables AI-assisted concept generation that stays within the Neon token set and respects widget sizing constraints by default, without requiring the designer to manually specify values each session.
**What Changed:**
- Created `design-system/neon-tokens.md` — extracted Neon token reference (colors, typography, spacing, widget sizing grid)
- Created `/.cursor/rules/figma-neon-concept-gen.mdc` — always-on rule enforcing Neon tokens + widget sizing for concept generation
- Created `ui/concepts/` directory
- Created `ui/concepts/ticket-summary-dashboard.html` — first test concept (Summary framework, 4× XXS cards)
- Generated Figma file: https://www.figma.com/design/YazkuCYaUX3P0Rw3j5zJLU
**Related:**
- Figma Neon library: https://www.figma.com/design/a1eKyRtlUCKWmryjQPA4Q2/Asio-Neon
- Figma sizing library: https://www.figma.com/design/RjGqxhhalCsqQhC91omYUi/Widgets-Templates-Library?node-id=3-80

---

### [2026-03-13] — Figma Concept Generator Tool Added to ArgonOS UI
**Status:** Active
**Area:** Tooling | UX
**Decision:** Added a Figma Concept Generator tool to the ArgonOS dashboard and created a dedicated launcher page (`ui/figma.html`). The tool accepts a free-text prompt, fires a Cursor deep link to trigger the Figma generation pipeline, and displays two content sections: widget examples and the last 5 generated concepts — each as a clickable link to the corresponding HTML file.
**Reasoning:** The Figma generation pipeline was previously only accessible via manual Cursor prompting. Surfacing it as a first-class ArgonOS tool gives designers a consistent entry point and surfaces past generated work alongside widget examples without leaving the browser.
**What Changed:**
- Created `ui/figma.html` — two-panel launcher (prompt sidebar + examples/concepts main panel)
- Created `ui/concepts/manifest.json` — index of generated concepts; pre-populated with `ticket-summary-dashboard`
- Created `ui/examples/manifest.json` — index of widget examples (summary, timeline)
- Updated `ui/index.html` — replaced "Coming soon" slot 3 with live Figma Concept Generator card
**Related:** [Figma Generation Tool UI Plan](figma_generation_tool_ui_05fb349f)

---

### [2026-03-13] — Asio Neon Concept: Recent Ticket Drawer
**Status:** Active
**Area:** UX | Tooling
**Decision:** Generated an Asio Neon concept for the Recent Ticket Drawer PRD using the discovery pack as research context. The concept uses a Datagrid (List) framework presented as a slide-out drawer, addressing the primary technician workflow: open drawer → scan recent tickets → navigate to ticket detail. Three states rendered: populated drawer (7 tiles incl. one inaccessible/disabled tile), empty state, and an annotated design decision panel citing Marvin evidence. Pushed to Figma as a new page in the existing ArgonOS concept file.
**Reasoning:** Converts the discovery pack's validated research signals directly into a concrete Neon-compliant UI artifact. Placement (top-right), drawer pattern, inaccessible tile treatment, and deferred hover-preview decision are all directly traceable to Marvin evidence items.
**What Changed:**
- Created `ui/concepts/recent-ticket-drawer.html` — full concept (3 states + annotation strip)
- Updated `ui/concepts/manifest.json` — prepended new concept entry
**Related:**
- PRD: https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1009123550/PRD+Recent+Ticket+Drawer
- Discovery Pack: `discovery-pack-recent-ticket-drawer.md`
- Figma: https://www.figma.com/design/YazkuCYaUX3P0Rw3j5zJLU?node-id=4-2

---

### [2026-03-16] — Asio Neon Concept: MSP Technician Efficiency Dashboard
**Status:** Active
**Area:** UX | Tooling
**Decision:** Generated a 4-framework Asio Neon concept for an MSP owner dashboard to monitor technician efficiency and ticket resolution. The concept composes four widgets on the 8-column grid: a KPI header strip (4× Summary XXS), a full-width technician performance table (Datagrid XXL), a 7-day resolution trend chart (Insight XL), and a live activity feed (Timeline L). Pushed to Figma as a new page in the existing ArgonOS concept file.
**Reasoning:** Multi-framework dashboard composition demonstrates the full widget sizing grid in a single, realistic MSP context. Each framework maps to a distinct MSP owner information need: scan KPIs → manage technicians → read trend → monitor live activity.
**What Changed:**
- Created `ui/concepts/msp-technician-efficiency-dashboard.html` — full dashboard concept (4 frameworks, annotation strip)
- Updated `ui/concepts/manifest.json` — prepended new concept entry
**Related:**
- Prompt: "Build a dashboard for MSP owners to monitor technician efficiency and ticket resolution"
- Figma: https://www.figma.com/design/YazkuCYaUX3P0Rw3j5zJLU?node-id=8-2

---

## Superseded / Reversed Decisions

_(None yet)_
