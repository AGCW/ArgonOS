# Discovery Pack: PRD Recent Ticket Drawer

**PRD Source:** [PRD: Recent Ticket Drawer](https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1009123550/PRD%20Recent%20Ticket%20Drawer)  
**Pipeline Run:** March 12, 2026  
**Redundancy Check:** Skipped (single PRD provided)

---

## Part 1: UX Readiness Evaluation

### UX Readiness Score

- **Score:** 78/100
- **Readiness:** Conditionally Ready
- **Top drivers:**
  - Strong personas (Technician, PSA Administrator) and clear end-to-end scenarios with explicit triggers and outcomes
  - Workflows and edge cases (empty state, error handling, inaccessible tickets) are well specified
  - Success metrics are qualitative only (no telemetry for MVP); accessibility and role-difference details are partial

---

### Category Scores

| Category | Score | Max | Notes |
|----------|-------|-----|------|
| A) Personas & target users | 12 | 15 | Primary personas (Technician, PSA Admin) described with needs; constraints (frequency, skill) implied but not explicit |
| B) Workflows / journeys | 16 | 20 | Scenarios step-by-step; entry/exit/triggers defined; cross-feature handoffs noted |
| C) User goals / JTBD | 11 | 15 | Goals tied to workflow; outcomes stated; "user knows it worked when" not explicit |
| D) Edge cases & states | 12 | 15 | Empty state, error handling, inaccessible tickets covered; recovery paths partial |
| E) Roles & permissions | 10 | 15 | Permission model respected; role matrix not explicit; UI behavior by role implied |
| F) Accessibility | 6 | 10 | WCAG AA mentioned; focus order, keyboard, SR not specified |
| G) Success metrics | 5 | 10 | Qualitative only (QA, feedback); no measurable UX/product metrics for MVP |

---

### Missing Requirements

- **[Personas]** Constraints (environment, frequency, skill level) — Needed for design decisions — Evidence: "not found"
- **[Goals]** Explicit "user knows it worked when" — Needed for success criteria — Evidence: "not found"
- **[Edge Cases]** Recovery path when history API fails — PRD says "fallback message" but not content or behavior — Evidence: "If history API fails → show fallback message"
- **[Roles]** Role matrix or permission rules — Needed for accessibility and role-based UI — Evidence: "Permission model fully respected" but no matrix
- **[Accessibility]** Focus order, keyboard navigation, screen reader expectations — WCAG AA cited but interaction details missing — Evidence: "WCAG AA compliance for colors, focus states, aria-labels"
- **[Success Metrics]** Measurable product/UX metrics — MVP explicitly excludes analytics — Evidence: "no telemetry required for MVP"

---

### UX Questions

**Personas & Context**
- What is the typical number of tickets a technician acts on per session? Does this vary by role or tenant size?
- Are there environment constraints (e.g., small screens, shared workstations) that affect drawer placement?

**Workflows**
- When the drawer is open and the user clicks a recent ticket, should the drawer stay open or close? (PRD says "per UX decision"—needs resolution.)
- What is the exact list of "actions" that add a ticket to recent? (Note, time entry, status update—is there a full list?)

**Edge Cases & States**
- What is the exact fallback message when the history API fails?
- For "degraded tile" when metadata cannot be fetched—what fields are shown vs. hidden?

**Roles & Permissions**
- Is there a permission that controls visibility of the Recent Ticket Drawer, or is it available to all users with ticket access?
- How should the drawer behave for users who have no permission to view any recent tickets?

**Accessibility**
- What is the expected focus order when the drawer opens (drawer trigger → first item → last item → close)?
- Are there keyboard shortcuts for opening/closing the drawer? (Out of scope for MVP—confirm for future.)

**Success Metrics**
- Post-MVP: What adoption or satisfaction metrics will be used to validate success?

---

### Design Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Drawer placement conflicts with user mental model | Medium | Med | Validate placement against Marvin evidence (top-right, slide-out preferred); align with Figma |
| Inaccessible tickets create confusion despite disabled state | Medium | Med | PRD and risk table acknowledge; ensure clear visual pattern and aria-labels |
| Qualitative-only success metrics delay product validation | Low | High | Accept for MVP; define post-GA metrics (Pendo, adoption) before launch |
| Hover preview out of scope but users expect it | Low | Med | Marvin: Jodie misses hover for quick context; capture as enhancement backlog |

---

## Part 2: Research Evidence Pack

### Research Summary

- Technicians strongly support a "Recent Tickets" feature for quick access to previously worked-on tickets.
- Slide-out panel / drawer from the top-right is preferred to preserve the main filtered ticket list.
- Users report losing context when navigating back (filters reset, tab overload) and want to avoid repeated search/list navigation.
- Some users miss hover-over previews for at-a-glance ticket context; PRD explicitly out of scope for MVP.
- Jack (Service Technician persona) needs streamlined tools to access information swiftly and manage multiple clients.

---

### Evidence Pack

| Title / Source | What it contains | Why it matters | Strength |
|----------------|------------------|----------------|----------|
| **'Recent Tickets' Boosts Tech Efficiency, User Satisfaction** (Marvin #118315) | Sarah, a technician, values the Recent Tickets feature for quick access. She approves of top-right placement, aligning with PSA design patterns and preserving the main filter view. | Direct validation of PRD concept and placement | **High** |
| **Slide-Out Panels Preferred for Recent Tickets** (Marvin #118145) | Interviewees prefer a slide-out panel for Recent Tickets to prevent losing sight of the main ticket list, maintaining context while accessing recent items. | Supports drawer pattern over inline list | **High** |
| **Streamlining Ticket Navigation: Solving Filter Frustrations** (Marvin #118421) | John Shelton prefers same-page ticket interactions to prevent tab overload. Navigating back causes filters to reset—a major frustration. | Validates PRD problem: navigation friction | **High** |
| **Users Miss Quick-View Updates in Recent Tickets** (Marvin #118275) | Jodie Lemery misses the previous system's hover-over feature for ticket titles to quickly view the latest update without clicking in. | Out-of-scope enhancement; capture for backlog | **Med** |
| **Improve Asio Tab Naming on Browsers and Preserve Context** (Marvin #99592) | Heavy users struggle with generic tab labels and lost session context, hindering multi-tab workflows. MSP engineers want ticket IDs/subjects on tabs and restored context. | Supports need for quick ticket switching | **Med** |
| **Jack, Service Technician Engineer** (Marvin #83888) | Jack needs streamlined tools to access information swiftly, manage multiple clients, and reduce notification overload. | Persona alignment with PRD | **Med** |
| **Same-Page Ticketing Boosts Workflow Efficiency** (Marvin #118147) | Partner prefers ticket overviews to open in the same page, not pop-outs, for quick viewing and back-button return to list. | Context: PRD opens in new tab from details—validate with users | **Med** |

---

### Recurring Pain Points

**Technician / Multi-ticket workflow**
- Repeated navigation to ticket list slows work
- Switching between related tickets is common
- Losing context when navigating backward
- Filters reset on back navigation
- Tab overload when opening many tickets

**Recent Tickets feature**
- Top-right placement and slide-out panel preferred
- Must not replace or alter main filtered ticket list
- Hover preview for quick context desired (out of scope for MVP)

---

### Gaps & Next Research

**Unanswered questions**
1. Does opening a recent ticket in a new tab (from details) match user expectation, or do some prefer same-page navigation?
2. What is the ideal number of recent tickets (10 vs. configurable)? PRD fixes at 10.
3. Are there role-specific differences in how technicians vs. admins use recent tickets?

**Suggested research**
- **Usability test:** Validate drawer placement, empty state, and inaccessible-ticket treatment with 3–5 technicians.
- **Minimum viable study:** 30-minute session—observe technician opening drawer, selecting a recent ticket, and reacting to disabled items.

---

## Part 3: Consolidated Discovery Pack Summary

### Readiness

**Conditionally Ready.** The PRD has strong workflows, personas, and edge-case coverage. Gaps are mainly in success metrics (qualitative for MVP), accessibility details, and role/permission specifics. UX can proceed with discovery while closing the listed UX questions with PM/Eng.

### Research Validation

Marvin evidence strongly supports the Recent Ticket Drawer concept. Top-right slide-out placement aligns with user preferences. The PRD problem statement (navigation friction, context loss) is validated. Hover preview is a known gap; keep in enhancement backlog.

### Recommended Next Steps

1. **Before wireframes:** Resolve drawer open/close behavior when a ticket is selected; confirm full action list for "recent."
2. **During design:** Validate placement and empty state with quick usability test.
3. **Post-MVP:** Define Pendo/adoption metrics and prioritize hover preview in backlog.

---

## JSON Outputs (for tooling)

### UX_READINESS_JSON

```json
{
  "score": 78,
  "readiness": "Conditionally Ready",
  "categoryScores": {
    "personas": 12,
    "workflows": 16,
    "goals": 11,
    "edgeCases": 12,
    "permissions": 10,
    "accessibility": 6,
    "metrics": 5
  },
  "gatesTriggered": [],
  "missing": ["Persona constraints", "User success criteria", "API fallback message content", "Role matrix", "Focus order/keyboard details", "Measurable metrics"],
  "topRisks": ["Drawer placement validation", "Inaccessible ticket confusion", "Qualitative-only metrics", "Hover preview expectation"]
}
```

### RESEARCH_RETRIEVAL_JSON

```json
{
  "sourceOfTruth": ["Marvin"],
  "queriesUsed": ["technician ticket navigation workflow context switching", "PSA ticket details recent issues", "technician multi-ticket workflow pain points"],
  "evidenceItems": [
    {"title": "'Recent Tickets' Boosts Tech Efficiency, User Satisfaction", "sourceType": "Marvin", "relevanceScore": 95, "whyRelevant": "Direct validation of concept and placement", "strength": "High"},
    {"title": "Slide-Out Panels Preferred for Recent Tickets", "sourceType": "Marvin", "relevanceScore": 95, "whyRelevant": "Supports drawer pattern", "strength": "High"},
    {"title": "Streamlining Ticket Navigation: Solving Filter Frustrations", "sourceType": "Marvin", "relevanceScore": 90, "whyRelevant": "Validates navigation friction problem", "strength": "High"},
    {"title": "Users Miss Quick-View Updates in Recent Tickets", "sourceType": "Marvin", "relevanceScore": 75, "whyRelevant": "Out-of-scope enhancement", "strength": "Med"},
    {"title": "Improve Asio Tab Naming on Browsers and Preserve Context", "sourceType": "Marvin", "relevanceScore": 70, "whyRelevant": "Multi-tab workflow pain", "strength": "Med"}
  ],
  "themes": ["Recent Tickets valued", "Slide-out preferred", "Context loss on navigation", "Filter reset frustration"],
  "gaps": ["New tab vs same-page preference", "Ideal recent count", "Role-specific usage"],
  "minimalNextResearch": "30-min usability test: drawer placement, empty state, disabled items with 3–5 technicians"
}
```
