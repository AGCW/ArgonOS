# Discovery Pack: Billing Product — add, create & convert flows

**PRD:** [PRD: Billing Product - improve flows for add, create and convert actions](https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1023541556/PRD+Billing+Product+-+improve+flows+for+add+create+and+convert+actions)  
**Confluence page ID:** 1023541556  
**Pipeline run:** 2026-03-20  
**Pipeline status:** Stopped at **Gate Check** — PRD classified **Not Ready** for UX discovery. **Research retrieval (Marvin) was not executed** per pipeline rules.

---

## Readiness summary (PRD Readiness Agent)

### UX Readiness Score

- **Score:** 39/100 (after −10 readiness gate; raw category sum 49/100)
- **Readiness:** **Not Ready**
- **Top drivers:**
  1. **Success KPIs table is empty** — triggers the “no success metric or measurable outcome” gate (−10) despite an “Objectives & Outcomes” section elsewhere.
  2. **Workflows are scenario-level, not step-by-step** — personas and pain points are stated, but there is no end-to-end, ordered UI journey for Add Product, Create Product, or mass convert.
  3. **Edge cases, roles, and requirements depth** — entitlements are listed as incomplete (“Check for any others”), Req 1.2 is placeholder (“…”), and error/empty/recovery states are not specified.

### Missing Requirements

- **[G] Success metrics —** Measurable targets and baselines — **Why it matters:** Cannot align UX or validate designs without agreed measures — **Evidence:** Section “5. Success KPIs” table cells are empty: “| **KPI** | **Target/Metric** | **Current Metric** | …” with no values filled.
- **[B] Workflows / user journeys —** Step-by-step end-to-end flows — **Why it matters:** Design needs ordered steps, triggers, and exits — **Evidence:** Section 9 lists scenarios (“Adds existing products…”, “Converts products…”) but not a step-by-step workflow; “not found” for numbered UI steps.
- **[D] Edge cases & states —** Error, empty, and loading states for Add Product and mass convert — **Why it matters:** UI specification and messaging — **Evidence:** not found (only “Display Issues” noting filtering/multi-select difficulty).
- **[D] Edge cases & states —** Exceptions beyond scale — **Why it matters:** Validation and partial-failure behavior — **Evidence:** NFR mentions “10-20” products for scalability; invalid inputs / partial selection failure not found.
- **[E] Roles & permissions —** Complete entitlement matrix — **Why it matters:** Consistent gating of actions — **Evidence:** “Check for any others” under current entitlements.
- **[10] Detailed requirements —** Complete Req 1.2 — **Why it matters:** Scope for search/browse UX — **Evidence:** Req 1.2 shown as “… ” in the requirements table.

### UX Questions

**Personas & context**

- For **Sales Rep** vs **Project Manager**, which surfaces are in scope first (Opportunities, Sales Orders, Service Ticket, Invoice, Products grid, Products pod) — and is there a single prioritized MVP context?
- What **frequency** and **volume** (e.g., products per transaction) should we design for beyond the 10–20 NFR note?

**Workflows**

- What is the **exact trigger → steps → success screen** for: (a) improved Add Product, (b) Create New Product from an item, (c) mass convert to configurations?
- After **mass convert**, what **confirmation or summary** should users see (counts, failures, links)?

**Goals & success**

- What **one primary KPI** will leadership use in Q2 2026 (time to add, error rate, adoption of Create Product, convert completion rate)?
- What are **Current** and **Target** values for that KPI (table is empty)?

**Edge cases & permissions**

- If **Create New Product** is unavailable (catalog not ready, permission denied), what should the UI do — hide, disable with tooltip, or redirect?
- For **mass convert**, how should **partial success** (some rows fail) be handled?

**Accessibility**

- Beyond “restricted vision,” is there a **WCAG target** (e.g., 2.1 AA) or **keyboard / screen reader** requirement for Platform PSA billing flows?

### Design Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Shipping Add Product UX without agreed **success metrics** | Cannot prove value or iterate objectively | High | Fill Success KPIs table; pick 1–2 UX-relevant metrics (task time, completion rate). |
| **Create New Product** placement undecided (“dialogue vs shortcut”) while catalog dependency is real | Rework, dead ends, or inconsistent entry points | High | Decision workshop with Team 242 + UX; document single pattern for in-context create. |
| **Mass convert** without failure and recovery spec | Data trust issues, support burden | Med–High | Define partial failure, audit need, and rollback messaging with PM/Eng. |
| Incomplete **entitlement** list | Wrong users see actions or support confusion | Med | Close “check for any others” with Security/PM before design lock. |

### UX_READINESS_JSON

```json
{
  "score": 39,
  "readiness": "Not Ready",
  "categoryScores": {
    "personas": 12,
    "workflows": 11,
    "goals": 11,
    "edgeCases": 4,
    "permissions": 6,
    "accessibility": 5,
    "metrics": 0
  },
  "gatesTriggered": ["no_success_metric_or_measurable_outcome_table_empty"],
  "missing": [
    "Success KPIs populated",
    "Step-by-step E2E workflows for add / create / convert",
    "Error, empty, loading, partial-failure states",
    "Complete entitlement list",
    "Req 1.2 completion"
  ],
  "topRisks": [
    "Empty success metrics block validation",
    "Create Product entry pattern undecided vs catalog dependency",
    "Mass convert partial success unspecified"
  ]
}
```

---

## Research Summary

**Not run.** Per UX PRD Discovery Pipeline Step 3, when readiness is **Not Ready**, research retrieval is skipped. After the PRD is updated (especially measurable success criteria and E2E flows), re-run the pipeline to pull Marvin insights for billing, add product, catalog, and configuration conversion.

---

## Recommendation

**Return the PRD for clarification before discovery begins** — in particular: populate **Success KPIs**, add **step-by-step workflows** for the three outcomes, and resolve **Create New Product** placement with Team 242. Do **not** treat this pack as discovery-complete for wireframes or epics until readiness is **Ready** or **Conditionally Ready** (typically ≥60 with gates cleared).
