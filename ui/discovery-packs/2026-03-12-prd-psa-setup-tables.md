# Discovery Pack: PRD PSA Setup Tables

**PRD Source:** [PRD: PSA Setup Tables](https://connectwisedev.atlassian.net/wiki/spaces/PT/pages/752288148/PRD%20PSA%20Setup%20Tables)  
**Pipeline Run:** March 12, 2026  
**Redundancy Check:** Skipped (single PRD provided)

---

## Part 1: UX Readiness Evaluation

### UX Readiness Score

- **Score:** 37/100
- **Readiness:** Not Ready
- **Top drivers:**
  - Primary persona exists (Onboarding/Administration) and partner segmentation is defined, but workflows are generic and lack step-by-step detail
  - Success KPIs are named but targets/metrics are empty; accessibility is completely absent
  - Edge cases, error states, and recovery paths are not addressed; detailed requirements table is empty

---

### Category Scores

| Category | Score | Max | Notes |
|----------|-------|-----|------|
| A) Personas & target users | 8 | 15 | Primary persona (Onboarding/Administration) described; partner segmentation (Existing vs New); constraints implied from usage ("intermittently after onboarding") |
| B) Workflows / journeys | 7 | 20 | Generic "Viewing Information" and edit scenarios; no step-by-step workflow; scope table provides context; entry/exit/triggers not defined |
| C) User goals / JTBD | 7 | 15 | Main goal: "partners to be able to complete onboarding and configuration of PSA fully in Asio"; "user knows it worked when" not found |
| D) Edge cases & states | 2 | 15 | Data integrity concerns noted; error states, empty states, recovery paths not found |
| E) Roles & permissions | 8 | 15 | "Setup Tables follow PSA permissions - users can be given permission to view and or edit one, many or all setup tables"; role matrix not explicit |
| F) Accessibility | 0 | 10 | Section exists but empty ("Accessibility: "); no WCAG, keyboard, SR, or contrast requirements |
| G) Success metrics | 5 | 10 | KPI names exist ("Setup Tables are present in Asio", "Onboarding can be completed in Asio Alone"); Target/Metric columns empty |

---

### Gates Triggered

| Gate | Status | Evidence |
|------|--------|----------|
| No primary persona OR target user segment | **PASS** | Persona 1: "Responsible for Onboarding and Administration" |
| No end-to-end workflow / scenario | **FAIL** | Key Scenarios are generic ("see list", "edit"); no step-by-step flow; Use Case table empty |
| No success metric or measurable outcome | **FAIL** | KPI table has names but Target/Metric/Current columns are blank |

---

### Missing Requirements

- **[Workflows]** End-to-end step-by-step workflow — Needed for design and validation — Evidence: "Viewing Information" and "edit setup tables" are generic; Use Case 1 template is empty
- **[Workflows]** Entry points, exits, triggers — Needed for UX flows — Evidence: "not found"
- **[Goals]** Explicit "user knows it worked when" — Needed for success criteria — Evidence: "not found"
- **[Edge Cases]** Error states, empty states — Needed for resilient design — Evidence: "not found"
- **[Edge Cases]** Recovery paths and messaging expectations — Needed for failure handling — Evidence: "not found"
- **[Roles]** Role matrix or explicit permission rules — Needed for role-based UI — Evidence: "Setup Tables follow PSA permissions" but no matrix
- **[Accessibility]** Accessibility requirements (WCAG, keyboard, SR, contrast) — Required for inclusive design — Evidence: "Accessibility: " (empty)
- **[Success Metrics]** Target values and current baselines for KPIs — Needed for validation — Evidence: KPI table Target/Metric columns blank

---

### UX Questions

**Personas & Context**
- What is the typical frequency of setup table changes after onboarding? (PRD says "intermittently"—need specifics for design.)
- Are there skill-level constraints (e.g., power users vs. occasional admins) that affect UI complexity?

**Workflows**
- What is the step-by-step flow for "complete onboarding in Asio"? (Which tables, in what order, with what dependencies?)
- Where do users enter setup (navigation, wizard, dashboard)? Where do they exit?
- What triggers a user to open a specific setup table (e.g., new company type needed, new project status)?

**Edge Cases & States**
- What happens when Company/Site/Contact data is out of sync? What does the user see?
- What is the empty state when a user has no setup tables (e.g., new tenant)?
- What error messages and recovery paths exist for failed saves or invalid inputs?

**Roles & Permissions**
- Is there a role matrix (Admin vs. Tech vs. View-only) for setup tables?
- How does UI behavior differ when a user can view but not edit a setup table?

**Accessibility**
- What accessibility level is required (WCAG 2.1 AA)?
- Are keyboard navigation, focus order, and screen reader support in scope?

**Success Metrics**
- What are the target values for "Setup Tables are present in Asio" and "Onboarding can be completed in Asio Alone"?
- What is the current baseline (e.g., % of onboarding done in Asio today)?

---

### Design Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Generic workflows lead to misaligned UX | High | High | Define step-by-step onboarding flow and validate with partners before design |
| Empty success metrics prevent validation | Medium | High | Populate KPI targets and baselines before development |
| Accessibility gaps create compliance risk | Medium | Med | Add WCAG and interaction requirements to PRD |
| Data sync (Company/Site/Contact) confusion | Medium | Med | Specify sync status UI and error states |
| 35+ setup tables with varying complexity (Simple vs Complex) — inconsistent patterns | Medium | Med | Define design system for setup tables; prioritize high-impact tables |

---

## Part 2: Research Retrieval

**Status:** Skipped per pipeline gate.

Research Retrieval was not run because the PRD is **Not Ready**. Per the UX Discovery Pipeline, PRDs with readiness "Not Ready" should be returned for clarification before discovery begins.

**Recommendation:** Address the missing requirements and UX questions above, then re-run the pipeline to retrieve relevant Marvin insights (e.g., PSA setup, Asio onboarding, partner configuration pain points).

---

## Part 3: Pipeline Recommendation

**Return PRD for clarification before discovery begins.**

Priority actions for PM/Eng:
1. Add at least one end-to-end workflow (step-by-step) for onboarding or setup table configuration
2. Populate Success KPI targets and current baselines
3. Add accessibility requirements (WCAG level, keyboard, SR)
4. Fill the Detailed Requirements table (Req ID 1.1.1+) and Use Case 1 template
5. Specify error states, empty states, and recovery paths for key flows

---

*Generated by UX PRD Discovery Pipeline*
