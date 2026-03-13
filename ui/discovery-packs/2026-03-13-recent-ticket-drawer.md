# Discovery Pack — PRD: Recent Ticket Drawer

**PRD URL:** https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/1009123550/PRD+Recent+Ticket+Drawer  
**Generated:** 2026-03-13  
**Pipeline:** UX PRD Discovery Pipeline v1  

---

## UX Readiness Score

- **Score: 62/100**
- **Readiness: Conditionally Ready**
- **Top drivers:**
  - (+) Personas, user goals, error/empty states, and cross-feature dependencies are well-defined for an MVP scoped PRD
  - (−) Role/permission matrix is incomplete — Admin vs. Technician UI behavior differences are unstated, and no explicit permission rules govern what triggers access loss
  - (−) Success metrics are contradictory (MVP is explicitly telemetry-free while the rollout section lists Pendo adoption rates), and no quantified targets exist for any phase

---

## Category Scores

| Category | Score | Max |
|---|---|---|
| A) Personas & target users | 10 | 15 |
| B) Workflows / user journeys | 13 | 20 |
| C) User goals / JTBD | 11 | 15 |
| D) Edge cases & states | 11 | 15 |
| E) Roles & permissions | 7 | 15 |
| F) Accessibility | 6 | 10 |
| G) Success metrics | 4 | 10 |
| **Total** | **62** | **100** |

---

## Missing Requirements

- **[B — Workflows]** Drawer discovery and toggle mechanism not defined — How does the technician first locate and open the drawer? The entry point is described as "UX-defined" without even a placeholder description — Evidence: "UX-defined drawer placement (per Figma)" — Why it matters: UX cannot design without knowing the trigger affordance (icon, button, hover target)

- **[B — Workflows]** Drawer close/dismiss behavior not specified — Does the drawer close automatically when a ticket is opened? Does it stay open? Does clicking outside dismiss it? — Evidence: "Drawer remains open/closed per UX decision" — Why it matters: This is a core interaction state that affects the entire drawer design

- **[E — Roles & Permissions]** No role matrix — The PRD lists PSA Administrator and Technician as personas but never specifies whether admins see the same drawer, the same 10-ticket limit, or the same disabled-item behavior — Evidence: "Ensure feature behaves consistently across user roles" is the only Admin UX statement — Why it matters: Without a role matrix UX cannot design admin-specific states

- **[E — Roles & Permissions]** Permission-loss trigger is undefined — The PRD states inaccessible tickets remain visible but disabled, but never defines what causes a ticket to become inaccessible (revoked role, company deactivation, board restriction?) — Evidence: "Technician loses permission to a previously accessed ticket → item remains visible but inaccessible" — Why it matters: The visual disabled state requires knowing how many and what type of inaccessible scenarios are possible

- **[G — Success Metrics]** No quantified success targets for any phase — MVP success is "internal QA validation + support/SE qualitative feedback"; rollout mentions "adoption rates, Pendo" but with no baseline, threshold, or timeframe — Evidence: "No analytics instrumentation for MVP" vs. "Adoption rates, usage analytics (Pendo)" in rollout — Why it matters: UX cannot instrument or iterate without knowing what "success looks like"

- **[F — Accessibility]** Keyboard interaction model is incomplete — Keyboard shortcuts for drawer toggle are explicitly out of scope, but the PRD does not define how keyboard users open/close/navigate the drawer via normal keyboard flow — Evidence: "Keyboard shortcuts for drawer toggle" listed as out-of-scope — Why it matters: Keyboard shortcuts for toggle and keyboard navigation within the drawer are different concerns; WCAG AA requires keyboard operability

- **[C — JTBD]** No "user knows it worked" success signal defined — The PRD defines the empty state message but no completion/confirmation signal when a ticket is successfully added to the recent list or opened — Evidence: Not found — Why it matters: Feedback loops are a core UX pattern; absence could cause re-action confusion

---

## UX Questions

### Personas & Users
1. What is the typical ticket volume a technician handles per day? (Informs whether 10 is sufficient or feels limiting)
2. Do technicians primarily work from a single device/session, or is cross-device continuity a common pattern? (Informs server-side persistence prominence in UX)
3. Is the PSA Administrator expected to use the Recent Ticket Drawer themselves, or only govern it for others?

### Workflows
4. What is the intended entry point affordance for the drawer — an icon in the ticket header, a persistent button, a keyboard shortcut, or something else?
5. When a technician clicks a recent ticket and opens it in a new tab, should the drawer remain open in the background tab or close?
6. What is the expected user flow when a technician is in the grid view (service board) — can they access the Recent Ticket Drawer from there, or only from inside Ticket Details?
7. Is there a defined trigger for when the drawer state (open/closed) persists across page navigations or refreshes?

### Roles & Permissions
8. Does the PSA Administrator role see the drawer differently than a Technician (e.g., can they view another user's recent history)?
9. What specific permission events cause a ticket to become inaccessible in the recent list — revoked role, company deactivation, board restriction, or all of the above?
10. Is the 10-ticket FIFO list scoped per user globally, or per board/company context?

### Edge Cases & States
11. What should the degraded tile display when ticket metadata cannot be fetched — ticket ID only, or a generic placeholder? Who defines this fallback content?
12. What is the expected behavior if ALL 10 recent tickets are inaccessible — is the list shown as fully disabled, or does a special state apply?

### Accessibility
13. What is the expected keyboard navigation flow within the drawer — Tab to open, arrow keys to navigate items, Enter to select, Escape to close?
14. Is the drawer expected to trap focus when open, or allow the user to tab freely behind it?

### Success Metrics
15. What is the baseline navigation friction metric today (e.g., average clicks to return to a previously worked ticket)?
16. What is the minimum adoption threshold in Pendo that would signal the feature is being discovered and used?

---

## Design Risks

- **Risk:** "Open in new tab" decision conflicts with user preference evidence — **Impact:** Technicians who prefer same-page navigation or dual-click flexibility may adopt the drawer less or report tab overload — **Likelihood:** High — **Mitigation:** UX should validate new-tab vs. same-page vs. dual-click with at least 3 technician sessions before finalizing; research from Asio Ticketing V3 (Mar 2026) shows split preferences

- **Risk:** Hover preview is out of scope but actively requested — **Impact:** Users may feel the drawer is incomplete without at-a-glance context; early adopters may submit feedback that the feature doesn't fully solve the problem — **Likelihood:** Med — **Mitigation:** UX should acknowledge this as a known backlog item in the drawer design and consider a tooltip/truncated description as a low-cost near-term signal

- **Risk:** Drawer discovery depends entirely on Figma — the PRD defers entry point to UX without a hypothesis — **Impact:** If the icon/placement is non-intuitive, technicians won't find the drawer and adoption will be near zero — **Likelihood:** Med — **Mitigation:** Define at least one placement hypothesis in the PRD before design starts; reference the insight that top-right placement was positively received (Marvin insight 118315)

- **Risk:** Success is unmeasurable at MVP launch — **Impact:** The team cannot make a data-informed GA/rollback decision because MVP has no telemetry and qualitative feedback is slow — **Likelihood:** High — **Mitigation:** Define at minimum 2 lightweight Pendo metrics (e.g., drawer open rate, click-through rate) for Beta even if full instrumentation is post-GA

- **Risk:** Inaccessible ticket visual treatment is deferred to UX without constraints — **Impact:** If the disabled state is ambiguous (greyed out title only), technicians may repeatedly attempt to open locked tickets, creating confusion and support overhead — **Likelihood:** Med — **Mitigation:** PRD should specify the information hierarchy for disabled tiles (what text, what icon, what tooltip copy) to reduce UX rework late in design

---

## Research Summary

Marvin contains **directly relevant evidence** from the Asio Ticketing - V3 project (published March 2026), with multiple insights specifically about the Recent Tickets feature and related navigation patterns. Evidence is fresh and high-strength.

- The "Recent Tickets" feature is **validated by at least one technician persona** as valuable and correctly placed (top-right); users describe it as boosting efficiency and aligning with existing PSA patterns
- **Slide-out panel design is validated** — interviewees explicitly prefer a slide-out/side panel for Recent Tickets to avoid losing sight of the main ticket list, which aligns directly with the PRD's drawer approach
- **There is a meaningful conflict** on the "open in new tab" behavior: multiple users prefer same-page navigation or dual-click (left = same page, right = new tab) to avoid tab overload and filter reset on back navigation
- **Hover/quick-view is a recurring ask** that is explicitly out of scope in this PRD — technicians miss this capability and it is likely to generate post-launch feedback
- **Context loss and filter reset are documented pain points** directly related to the navigation problem this feature solves
- The primary persona (Jack, Service Technician Engineer, Personas Wave 1) aligns well with the PRD's Technician description

---

## Evidence Pack

| # | Title | Source | What It Contains | Why It Matters | Strength |
|---|---|---|---|---|---|
| 1 | 'Recent Tickets' Boosts Tech Efficiency, User Satisfaction | Marvin / Asio Ticketing - V3 (Mar 2026) | Sarah (technician) validates the Recent Tickets feature; approves top-right placement as aligned with PSA design patterns and preserving filter view | Direct validation of feature value and proposed placement — strongest evidence item | High |
| 2 | Slide-Out Panels Preferred for Recent Tickets | Marvin / Asio Ticketing - V3 (Mar 2026) | Interviewees prefer a slide-out panel for Recent Tickets to prevent losing sight of the main ticket list | Validates the drawer/panel paradigm chosen in the PRD | High |
| 3 | Side Panel Pop-Ups Preserve Grid Focus | Marvin / Asio Ticketing - V3 (Mar 2026) | Jodie Lemery prefers recent tickets in a side panel pop-up rather than updating the main grid, to preserve filtered view | Reinforces panel design and highlights importance of not disrupting the main workspace | High |
| 4 | Same-Page Ticketing Boosts Workflow Efficiency | Marvin / Asio Ticketing - V3 (Mar 2026) | Partner prefers ticket overviews to open in same page, not pop-outs, to align with workflow of quickly viewing and using back navigation | Directly conflicts with PRD's "open in new tab" decision — design risk | High |
| 5 | Streamlining Ticket Navigation: Solving Filter Frustrations | Marvin / Asio Ticketing - V3 (Mar 2026) | John Shelton prefers same-page interactions to prevent tab overload; frustrated that back navigation resets filters | Confirms the navigation friction problem the PRD aims to solve; also raises conflict with new-tab default | High |
| 6 | Dual-Click Ticketing | Marvin / Asio Ticketing - V3 (Mar 2026) | John Shelton advocates for left-click (same page) + right-click (new tab) dual options for workflow flexibility | Suggests a potential middle-ground interaction model the PRD has not considered | High |
| 7 | Optimizing Ticket Link Clicks for User Choice | Marvin / Asio Ticketing - V3 (Mar 2026) | Sarah prefers left-click (same tab) + right-click (new tab) support; recommends keeping existing behavior if only one is possible | Further confirms user expectation for click flexibility; supports dual-click model | High |
| 8 | Users Miss Quick-View Updates in Recent Tickets | Marvin / Asio Ticketing - V3 (Mar 2026) | Jodie Lemery misses hover-over for ticket titles for at-a-glance context without clicking in | Validates out-of-scope hover preview risk — users will feel this gap post-launch | High |
| 9 | Jack, Service Technician Engineer | Marvin / Personas Wave 1 (May 2025) | Jack needs streamlined tools to access information swiftly, manage multiple clients, reduce notification overload | Primary persona alignment — confirms efficiency and multi-client context match the PRD | Med |
| 10 | Improve Asio Tab Naming and Preserve Context | Marvin / Asio Ticketing - V3 (Sep 2025) | Heavy users struggle with generic browser tab labels and lost session context in multi-tab workflows | Contextualizes the "open in new tab" risk — multi-tab fatigue is a real, documented pattern | Med |
| 11 | Jack's Ticket Troubleshooting and Resolution Journey | Marvin / Personas Wave 1 (Jun 2025) | Journey map of a technician resolving tickets reveals pain points in navigation, documentation, and context switching | Reinforces the core problem statement; provides journey context for drawer placement design | Med |

---

## Recurring Pain Points

### Technician Persona
- Repeated back-and-forth navigation between tickets is a documented friction source (multiple sources)
- Filter state reset on back navigation causes loss of work context and forces re-setup
- Tab overload when multiple tickets are opened in new tabs hinders workflow clarity
- Lack of at-a-glance context (hover/quick-view) forces full ticket opens for simple checks
- High ticket volume causes work to slip through the cracks

### Navigation Patterns
- Users have split preferences on same-page vs. new-tab ticket opening — no single universal preference
- Dual-click (left = same page, right = new tab) is an emerging preferred model from multiple users
- Side/slide-out panel placement is consistently preferred over any approach that replaces the main view

---

## Gaps & Next Research

### Unanswered Questions (Prioritized)
1. **New tab vs. same page** — Is the PRD's fixed "new tab" decision validated by the broader technician population, or does the evidence signal it should be dual-click? This is the highest-priority question before finalizing interaction design
2. **10-ticket limit** — Is 10 the right number, or do technicians working high-volume queues (40+ tickets/day) need more? No evidence exists on sufficiency of this limit
3. **Drawer discoverability** — What placement and affordance actually drives discovery? No evidence exists on icon/button formats for the entry point
4. **Inaccessible ticket behavior** — No evidence on how users react to disabled items in a recent list; can cause confusion if not handled carefully
5. **Admin use case** — Completely uninvestigated; is the Admin persona actually a user of this feature or purely a governance actor?

### Suggested Research
- **Method:** Concept validation (5–7 technician interviews, 30 min each)
- **Focus:** Test 2–3 interaction models for ticket opening behavior (new tab / same page / dual-click); validate drawer placement hypothesis; probe on 10-ticket limit sufficiency
- **Minimum viable study:** 5 technician sessions showing the Figma prototype, asking 3 task-based questions: (1) Can you find and open the recent tickets drawer? (2) How do you expect the ticket to open when you click it? (3) How many recently worked tickets would be useful to see?

---

```json
{
  "sourceOfTruth": ["Marvin", "Confluence"],
  "queriesUsed": [
    "technician ticket navigation context switching",
    "recent tickets quick access workflow efficiency",
    "multi-ticket workflow friction navigation bottleneck",
    "slide out panel drawer ticket list context",
    "open ticket new tab same page preference"
  ],
  "evidenceItems": [
    {"title": "'Recent Tickets' Boosts Tech Efficiency, User Satisfaction", "sourceType": "Marvin", "marvinId": 118315, "relevanceScore": 10, "whyRelevant": "Direct feedback on the exact feature being designed", "strength": "High"},
    {"title": "Slide-Out Panels Preferred for Recent Tickets", "sourceType": "Marvin", "marvinId": 118145, "relevanceScore": 10, "whyRelevant": "Validates drawer/panel paradigm", "strength": "High"},
    {"title": "Side Panel Pop-Ups Preserve Grid Focus", "sourceType": "Marvin", "marvinId": 118273, "relevanceScore": 9, "whyRelevant": "Reinforces panel design; highlights non-disruption priority", "strength": "High"},
    {"title": "Same-Page Ticketing Boosts Workflow Efficiency", "sourceType": "Marvin", "marvinId": 118147, "relevanceScore": 9, "whyRelevant": "Conflicts with PRD new-tab decision", "strength": "High"},
    {"title": "Streamlining Ticket Navigation: Solving Filter Frustrations", "sourceType": "Marvin", "marvinId": 118421, "relevanceScore": 9, "whyRelevant": "Confirms navigation problem; conflict with new-tab default", "strength": "High"},
    {"title": "Dual-Click Ticketing", "sourceType": "Marvin", "marvinId": 118422, "relevanceScore": 8, "whyRelevant": "Alternative interaction model not in PRD", "strength": "High"},
    {"title": "Optimizing Ticket Link Clicks for User Choice", "sourceType": "Marvin", "marvinId": 118316, "relevanceScore": 8, "whyRelevant": "Dual-click preference from second user", "strength": "High"},
    {"title": "Users Miss Quick-View Updates in Recent Tickets", "sourceType": "Marvin", "marvinId": 118275, "relevanceScore": 8, "whyRelevant": "Out-of-scope hover preview risk", "strength": "High"},
    {"title": "Jack, Service Technician Engineer", "sourceType": "Marvin", "marvinId": 83888, "relevanceScore": 7, "whyRelevant": "Primary persona validation", "strength": "Med"},
    {"title": "Improve Asio Tab Naming and Preserve Context", "sourceType": "Marvin", "marvinId": 99592, "relevanceScore": 6, "whyRelevant": "Multi-tab fatigue context", "strength": "Med"},
    {"title": "Jack's Ticket Troubleshooting and Resolution Journey", "sourceType": "Marvin", "marvinId": 86903, "relevanceScore": 6, "whyRelevant": "Technician journey context", "strength": "Med"}
  ],
  "themes": [
    "Drawer/panel design validated by users",
    "New-tab vs. same-page opening is a contested decision",
    "Dual-click interaction model emerging",
    "Hover/quick-view is an out-of-scope but actively desired capability",
    "Navigation friction and filter-reset are confirmed pain points"
  ],
  "gaps": [
    "New-tab vs same-page opening preference not settled",
    "10-ticket limit not validated",
    "Drawer entry point/placement not tested",
    "Inaccessible ticket UX reaction not researched",
    "Admin use case entirely uninvestigated"
  ],
  "minimalNextResearch": "5 technician concept-validation sessions (30 min each) testing: (1) drawer discoverability, (2) ticket-opening behavior preference, (3) 10-ticket limit sufficiency using the Figma prototype."
}
```
