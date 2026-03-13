# Discovery Pack — PRD: Consolidated Invoice Prototype

**PRD URL:** https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/654803128/PRD+Consolidated+Invoice+Prototype
**Date:** 2026-03-13
**Pipeline Stage Reached:** PRD Readiness (stopped at gate — Not Ready)
**Research Retrieval:** Not run (gate condition not met)

---

## UX Readiness Score

**Score: 38 / 100**
**Readiness: Not Ready**

**Top drivers:**
- Strong personas drag the score up — three clearly named personas with end-month scenarios give UX a starting point, but their constraints (skill level, tool familiarity, frequency variance) are unspecified.
- Edge cases, states, and error paths are absent — no empty states, error conditions, validation logic, or recovery messaging exist anywhere in the document. This is the single largest drag on the score.
- Roles, permissions, and accessibility are essentially empty — "follow existing PSA security roles" is the entire coverage for a feature that spans Finance Controller, Account Manager, and external AP user roles. Accessibility is not mentioned once.

### Category Scores

| Category | Score | Max |
|---|---|---|
| A — Personas & Target Users | 12 | 15 |
| B — Workflows / User Journeys | 12 | 20 |
| C — User Goals / JTBD | 10 | 15 |
| D — Edge Cases & States | 1 | 15 |
| E — Roles & Permissions | 1 | 15 |
| F — Accessibility | 0 | 10 |
| G — Success Metrics | 2 | 10 |
| **Total** | **38** | **100** |

---

## Missing Requirements

**[D] Edge Cases & Error States — not covered — Evidence: not found**
The PRD describes only the happy path (filter → select → confirm → create → send). No mention of what happens when items fail validation, the user selects incompatible billing conditions, the recap mismatches expectations, or the system returns an error during invoice creation.

**[D] Recovery Paths & Messaging — not covered — Evidence: not found**
No messaging guidance, copy direction, or failure recovery flows are described. The invoice creation flow has a confirmation step (recap) but abandon-mid-flow, user change of mind, and API failure behaviors are undefined.

**[E] Role Matrix / Permission Rules — not defined — Evidence: "Must follow existing PSA security roles regarding access to Finance > Invoicing module"**
Three personas are present but there is no mapping of which roles can perform which actions, whether read vs. write access differs by role, or how the Account Manager's read-only review experience differs from the Finance Controller's creation flow at the UI level.

**[E] UI Behavior Differences by Role — not defined — Evidence: not found**
The Account Manager scenario ("pulls up monthly consolidated invoices") implies a read-only historical view, but this is not scoped in either Epic and no UI behavior difference by role is defined.

**[F] Accessibility Requirements — absent — Evidence: not found**
WCAG conformance level, keyboard navigation requirements, screen reader support, and contrast requirements are not mentioned anywhere.

**[G] Measurable Success Metrics — absent — Evidence: KPI table is completely blank; "No production release so no user metrics"**
The only stated metric is binary prototype completion. No internal testing acceptance criteria, usability benchmarks, or definition of "ready for internal testing" exists.

**[B] Non-Happy-Path Flows — deferred without enumeration — Evidence: "the prototype won't cover every step or non-happy-path flows"**
The PRD explicitly defers non-happy-path flows but does not list what those flows are or which ones UX must at minimum design for.

**[C] User Success Confirmation — not defined — Evidence: implied only**
No explicit definition of what the Finance Controller sees or experiences to confirm the invoice was successfully created (confirmation screen, notification, invoice number).

**[B] Account Manager Journey — scoped but not UX-defined — Evidence: Epic #2 references "Research UI solutions" but the Account Manager scenario has no corresponding scope**
The Account Manager's scenario has no Epic associated with it and no UI surface defined.

---

## UX Questions

### A — Personas & Users

1. What is the Finance Controller's current workaround for sending multiple invoices — and what frustrations does that create at the UI level?
2. Does the Account Manager access consolidated invoices through the same Finance > Invoicing module, or is this a separate reporting surface?
3. What is the skill level of the Finance Controller with PSA's invoicing module — are they power users or occasional users?
4. How often does the Finance Controller create consolidated invoices — monthly for all clients, or only for certain clients? Does this affect how the billable items list is filtered by default?

### B — Workflows

5. What defines the "entry point" for the consolidated invoice flow — is the Finance Controller starting from a client record, from a billable items list, or from an invoice queue?
6. What happens if the Finance Controller selects items that produce a calculation conflict (e.g., overlapping agreement periods) — does the system prevent selection, warn, or allow and flag?
7. What does the user experience look like when the billable items list is empty for a given company?
8. What are the exit paths other than "send to client" — can the controller save as draft, cancel mid-flow, or delete a created invoice in the prototype?
9. Is the invoice creation flow a full-page flow, a modal, or a drawer?

### D — Edge Cases & States

10. What validation rules apply to item selection — what combinations are explicitly invalid, and how should PSA communicate that to the user?
11. What does the system show during the recap step if one or more selected items fail a server-side validation after the user clicks "Create Invoice"?
12. What should happen if the user navigates away mid-flow — is there a save state, an "are you sure?" interrupt, or is the selection lost?
13. What are the loading/latency expectations for the billable items list — particularly when filtering by company name across multiple item types?

### E — Roles & Permissions

14. Can the Account Manager create invoices, or only view them? What does the UI look like for the Account Manager in the same invoicing module?
15. Are there any approval workflows (e.g., a supervisor must approve before an invoice is sent) — even if out of scope for the prototype, does this affect how we design the confirmation step?
16. Are there multi-company scenarios (e.g., MSP staff managing multiple client companies) — does the filter-by-company behavior need to handle switching between clients in the same session?

### F — Accessibility

17. Is WCAG 2.1 AA the minimum compliance target for this prototype, or does the team anticipate AA+ requirements?
18. Is keyboard-only navigation required for the item selection and recap steps in the prototype?

### G — Success Metrics

19. What does "ready for internal testing" mean in practice — is there a set of acceptance criteria or test scenarios that define prototype readiness?
20. Will UX conduct any usability testing on the prototype before the internal beta — and if so, what task scenarios should we design around?

---

## Design Risks

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| No error states defined → UX invents validation logic | High | High | PM/Eng provide list of invalid selection combinations and API error responses before wireframes begin |
| Account Manager's UI surface is unscoped → may require a separate design effort not in any Epic | High | Med | Clarify whether Account Manager scenario is in scope for the prototype or deferred |
| No accessibility requirements → retrofitting later is expensive | Med | High | Confirm WCAG target and keyboard/SR requirements before design begins |
| Blank KPI table → no usability acceptance criteria for internal testing | Med | Med | Define 2–3 task-completion criteria for internal testing |
| "Read only!" restriction in Epic 1 is not reflected in any UX state | Med | Med | Confirm which UI elements must be non-interactive in the prototype |
| Figma/wireframes explicitly TBD → blocking Epic 2 design work | High | High | Establish a wireframe start date before Epic 2 tickets are pulled |
| No non-happy-path flows listed → happy-path-only prototype enters beta with unplanned gaps | High | Med | List minimum non-happy-path scenarios UX must cover even if deferred in PRD |

---

## Pipeline Status

**Stage reached:** PRD Readiness
**Gate outcome:** Not Ready — pipeline stopped
**Research Retrieval:** Not run

**Recommendation:** Return PRD to PM for clarification before discovery begins.

**Priority asks (in order):**
1. Define error/edge case conditions for item selection (Epic 2 is blocked on this)
2. Confirm Account Manager UI scope — separate Epic or deferred?
3. Fill the KPI table with at minimum 2–3 prototype acceptance criteria
4. Confirm accessibility compliance target
