# ArgonOS — Core Widget Framework

**Version:** 1.0  
**Design System:** Asio Neon (ConnectWise)  
**Audience:** UX Designers · AI-assisted design sessions

---

## What Is a Widget Framework?

A Widget Framework is a **structural pattern** that defines how a specific type of UI surface is organized — its anatomy (zones), its valid variants, the Asio Neon components it uses, and when to apply it. It is not a finished design; it is the skeleton that a finished design is built on.

Five core frameworks cover the primary UI surfaces in ArgonOS:

| Framework | Purpose | Key Signal |
|-----------|---------|------------|
| [Datagrid](./datagrid.md) | Browse, filter, and act on rows of structured data | "list of records", "table of results", "manage items" |
| [Timeline](./timeline.md) | Display chronological events, activity, or history | "activity log", "audit trail", "history", "recent events" |
| [Summary](./summary.md) | Show KPIs, metrics, and at-a-glance status | "dashboard card", "metric", "KPI", "health indicator" |
| [Form](./form.md) | Structured data entry, configuration, or settings | "create new", "edit", "configure", "settings panel" |
| [Insight](./insight.md) | Analyze trends, visualize data, and report | "chart", "trend", "analytics", "performance over time" |

---

## AI Selection Guide

Use this decision tree when a designer describes a feature to determine the correct Widget Framework before producing any design output.

```
What is the user primarily trying to do?
│
├─ Browse, search, sort, or take bulk actions on a list of records
│   └─ → DATAGRID
│
├─ See what happened, when, and by whom (events over time)
│   └─ → TIMELINE
│
├─ Get a quick read on status, health, or numbers at a glance
│   └─ → SUMMARY
│
├─ Fill in, configure, or submit structured information
│   └─ → FORM
│
└─ Understand a trend, compare performance, or view analytics
    └─ → INSIGHT
```

### Disambiguation Rules

- If a surface shows **both a metric and a list of its contributing records**, use **Summary + Datagrid** (two separate widgets).
- If a form contains a **step-by-step flow** (3+ steps), the Form framework applies with the Stepper variant.
- If a timeline shows **progress toward a goal** (not past events), use the **Form > Stepper** variant instead.
- If an insight view also includes a **drill-down table**, the Insight framework owns the surface; the embedded table is part of its anatomy, not a separate Datagrid widget.
- When in doubt, ask: is the user **doing** something (Form), **seeing** something summarized (Summary/Insight), or **browsing** something (Datagrid/Timeline)?

---

## How to Use These Specs

### For UX Designers
1. Identify which Widget Framework applies to the surface you're designing.
2. Open the spec for that framework to understand its **anatomy zones** and **variants**.
3. Select the variant that matches your use case.
4. Use only the **Asio Neon components** listed in the spec for that zone — do not substitute.
5. Apply the **Do's and Don'ts** before finalizing.

### For AI-Assisted Sessions
When a designer provides a PRD feature description:
1. Reference this README to select the correct framework.
2. Open the matching spec file to apply the correct anatomy, components, and variant.
3. Produce design output (wireframe description, component list, layout spec) aligned to that framework.
4. Flag any deviation from the framework with a reason.

---

## Framework Status

| Framework | Status | Asio Neon Components |
|-----------|--------|----------------------|
| Datagrid | Stable | DataGrid ✔, Search, Pagination ✔, OverflowMenu, Button ✔, Chip ✔ |
| Timeline | Stable | List 🧪, Status, Badge ✔, Chip ✔, Stepper 🧪 |
| Summary | Stable | Card ✔, Badge ✔, Status, CircularProgress ✔, LinearProgress ✔, Chip ✔ |
| Form | Stable | TextInput ✔, Dropdown ✔, Select ✔, Checkbox ✔, Radio ✔, Switch ✔, DatePicker ✔, Button ✔, Alert ✔, Stepper 🧪 |
| Insight | Stable | Card ✔, ToggleButton ✔, Chip ✔, DataGrid 🧪, Status, Badge ✔ |

> ✔ = Asio Neon stable component · 🧪 = Asio Neon experimental component

---

## Widget Sizing Grid

**Source:** [UXTT-Widgets](https://www.figma.com/design/6gHlNEUBGcVMC7NJSlffXG/UXTT-Widgets?node-id=0-1) (authoritative sizing reference)

All widgets must conform to the 7-tier sizing grid. Sizes are defined in columns and rows on an 8-column, 16px-gap grid. At `breakpoints.xl` (1552px content area), each column is 180px wide.

| Size | Columns | Rows | Width (xl) | Height (xl) | Character |
|------|---------|------|------------|-------------|-----------|
| XXS | 2 | 1 | 376px | 180px | Minimal stat/indicator |
| XS | 4 | 1 | 768px | 180px | Compact summary strip |
| S | 8 | 1 | 1552px | 180px | Full-width banner |
| M | 2 | 2 | 376px | 376px | Small card |
| L | 4 | 2 | 768px | 376px | Medium card |
| XL | 4 | 4 | 768px | 768px | Large data card |
| XXL | 8 | 5 | 1552px | 964px | Full-width deep widget |

> Full responsive breakpoint pixel tables (xl through xs) are in `/design-system/neon-tokens.md`.

---

## Framework → Size Pairing

Every widget must be assigned a size from its framework's valid set. Sizes outside the valid set must not be used. The content and use case determine the appropriate size within the valid set.

| Framework | Valid Sizes | Default | Size Selection Principle |
|-----------|------------|---------|--------------------------|
| Summary | XXS, XS, M | XS | Number of KPIs and depth of supporting data determine size. Single stat → XXS. Row of metrics → XS. KPI with trend/breakdown → M. |
| Timeline | L, XL | L | Number of events and primacy of the timeline determine size. Secondary/recent feed (4–6 events) → L. Primary audit trail (10+ events) → XL. |
| Datagrid | XL, XXL | XXL | Whether data browsing is the primary task determines size. Secondary/embedded panel → XL. Primary management surface → XXL. |
| Form | L, XL | L | Field count and structural complexity determine size. Short form (2–4 fields) → L. Long or multi-section form (5+ fields) → XL. |
| Insight | L, XL, XXL | XL | Analytical depth and number of chart zones determine size. Single chart → L. Chart + table or multi-metric → XL. Full dashboard → XXL. |

---

## Versioning

This framework library is versioned alongside ArgonOS. Changes to a framework spec require review before updating, as specs are used as AI context. Do not introduce component substitutions without updating both the spec and the Asio Neon component reference.
