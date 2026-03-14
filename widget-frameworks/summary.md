# Summary Widget Framework

**Category:** Core Widget Framework  
**Design System:** Asio Neon  
**Last Updated:** 2026-03-12

---

## Purpose

The Summary framework structures UI surfaces that present **key metrics, KPIs, and at-a-glance status information** — giving users an immediate read on the health, volume, or state of something without requiring them to navigate elsewhere or interpret raw data.

Summary widgets are the answer to: "What is the current state of this thing, right now?" They surface the signal, not the data behind it.

---

## When to Use

| Use This Framework When... | Do NOT Use When... |
|----------------------------|--------------------|
| You have 1–8 scalar values that summarize a system or process | You need to show trends over time (use Insight) |
| The primary value is a number, percentage, or status label | You have rows of records to browse (use Datagrid) |
| The user needs a quick situational read before taking action | The user needs to enter or edit data (use Form) |
| The surface acts as a navigation entry point to deeper detail | The data requires explanatory visualization (use Insight) |
| Multiple metrics need to be compared side-by-side | |

---

## Widget Sizing

**Valid sizes:** XXS, XS, M  
**Default:** XS  
**Not valid for this framework:** S, L, XL, XXL

The appropriate size is determined by the number of KPIs being displayed and the depth of supporting data. Use the smallest size that accommodates the content without truncation.

| Size | Dimensions (xl) | When to Use |
|------|----------------|-------------|
| XXS | 376 × 180px | Single stat: one primary number, one label, and an optional status icon or trend arrow. Use when the widget is one of many in a dense dashboard row and space is at a premium. |
| XS | 768 × 180px | 2–4 KPI metrics arranged horizontally in a compact strip. Use for a dashboard header row that gives a quick multi-metric read before users drill deeper. |
| M | 376 × 376px | Single KPI card with secondary supporting data — trend sparkline, period-over-period delta, or a small breakdown list. Use when depth matters and the metric needs context to be actionable. |

**Content-to-size rules:**
- If you are showing only 1 value → XXS or M (M if supporting data is present)
- If you are showing 2–4 values at equal weight → XS
- If you are showing 5–8 values → use multiple XS or M widgets, not one enlarged widget
- Do not stretch a Summary widget to L or XL to fill space — if that much room is needed, reconsider whether Summary is the right framework

---

## Anatomy

The Summary framework uses a Card-based layout. A single Summary widget instance is one card. Multiple instances are arranged in a responsive grid (Summary Grid). Each card has 3 internal zones.

```
┌───────────────────────────────────────┐
│  Zone 1: Card Header                  │
│  [Metric Label]         [Status Chip] │
├───────────────────────────────────────┤
│  Zone 2: Primary Value                │
│                                       │
│       2,847                           │
│  [Trend indicator]  [Delta label]     │
│                                       │
├───────────────────────────────────────┤
│  Zone 3: Supporting Context           │
│  [Progress bar or ring]  [Drill link] │
└───────────────────────────────────────┘
```

**Summary Grid** (multi-card layout):
```
┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
│  Card 1    │  │  Card 2    │  │  Card 3    │  │  Card 4    │
│            │  │            │  │            │  │            │
└────────────┘  └────────────┘  └────────────┘  └────────────┘
```

### Zone Definitions

**Zone 1 — Card Header**
The label that names what is being measured (e.g., "Open Tickets", "SLA Compliance", "Active Devices"). Rendered in secondary text size. An optional `Chip` or `Status` component on the right end indicates the health state of the metric (e.g., "On Track", "At Risk", "Critical").

**Zone 2 — Primary Value**
The featured metric. Rendered at a large type size. Directly below the primary value, an optional **trend indicator** (an up/down arrow icon + percentage delta) communicates change versus the previous period. The delta uses color tokens: success (green) for positive trend, warning (amber), error (red) for negative.

**Zone 3 — Supporting Context**
Optional but strongly recommended. Contains one or more supporting elements:
- A `LinearProgress` or `CircularProgress` bar showing utilization, completion rate, or capacity.
- A secondary label (e.g., "of 5,000 total" or "vs. last month").
- A text link to drill into the underlying detail (e.g., "View all tickets →").

---

## Variants

### 1. Single Metric Card
A standalone card representing exactly one KPI. The atomic unit of the Summary framework.

- **Use when:** One metric needs dedicated real estate on a dashboard or panel.
- **Zones:** 1 (label only), 2 (value + trend), 3 (optional).
- **Card size:** Flexible. Minimum width 180px. Spans 1 grid column.

### 2. Metric Strip
A horizontal row of 2–4 single metric cards sharing the same visual weight. The most common layout for dashboard headers.

- **Use when:** You need to compare 2–4 top-level KPIs simultaneously.
- **Layout:** Equally-spaced cards in a CSS grid (1 row × N columns).
- **Max cards:** 4. If more than 4 metrics are needed, split into 2 rows or use a Detail Grid variant.

### 3. Detail Grid
A 2-column or 3-column grid of cards, each showing slightly more context (progress bar, secondary stat, link).

- **Use when:** The dashboard surface has vertical space and each metric needs supporting context.
- **Layout:** 2–3 column grid. Cards may vary in height.
- **Zones per card:** All 3 zones required.

### 4. Status Roll-Up
A compact card that shows the health of multiple sub-components in a single card. Each sub-component is a row with its own Status indicator.

- **Use when:** You need to communicate the health of a composite system (e.g., "Service Health" showing 5 sub-services each with a pass/fail status).
- **Structure:** Zone 1 (card title), then a list of rows — each row has a label + `Status` component.

### 5. Comparative Card
A card that shows the same metric for two different entities side-by-side (e.g., current period vs. previous period, or Team A vs. Team B).

- **Use when:** The primary user task is comparison between two related values.
- **Structure:** Zone 1 (metric label), then two columns in Zone 2 — each with its own value and label.

---

## Asio Neon Components

| Zone | Component | Story Reference |
|------|-----------|-----------------|
| Card container | `Card` | `asio-neon-components-card-✔` |
| Zone 1 | `Chip` (health state tag) | `asio-neon-components-chip-✔` |
| Zone 1 | `Status` (health state indicator) | `asio-neon-components-status` |
| Zone 1 | `Badge` (count label or category) | `asio-neon-components-badge-✔` |
| Zone 2 | Large text (metric value — typography token) | `asio-neon-assets-typography-✔` |
| Zone 3 | `LinearProgress` (utilization bar) | `asio-neon-form-components-linear-progress-✔` |
| Zone 3 | `CircularProgress` (completion ring) | `asio-neon-components-circularprogress-✔` |
| Zone 3 | `Link` (drill-down link) | `asio-neon-components-link-✔` |
| Loading state | `Card` with skeleton content | Skeleton pattern per Asio Neon guidelines |

---

## AI Selection Signals

Apply the Summary framework when the designer's description includes any of the following keywords or patterns:

- "dashboard card" or "KPI card"
- "at-a-glance" or "quick view"
- "metric" or "KPI" or "indicator"
- "health" or "health score" or "health status"
- "X out of Y" (utilization or capacity)
- "percentage complete" or "% of total"
- "summary section" or "overview panel"
- "scorecard"
- "status at the top of the page"
- "[number] open / closed / pending"

**Disambiguation:** If the metric has a time axis and requires a chart to interpret, use the **Insight** framework instead. If the Summary card's drill-link goes to a full table of records, that destination is a **Datagrid** widget — the Summary card itself remains a Summary widget.

---

## Do's and Don'ts

### Do
- Limit Zone 2 to one primary value per card. If you need two values, create two cards.
- Use `Status` or `Chip` in Zone 1 to communicate health immediately — don't rely on the user interpreting the number alone.
- Use trend indicators with signed deltas ("+12%", "−4%") so change direction is explicit.
- Apply the Asio Neon typography token for the primary value — do not use arbitrary font sizes.
- Show a skeleton state while metric data loads. Never show "0" or an empty value as a loading placeholder.
- Provide a drill-down `Link` in Zone 3 whenever the metric has underlying records the user may want to investigate.

### Don't
- Don't put more than 4 cards in a Metric Strip row — it becomes unreadable at smaller viewports.
- Don't use progress bars for metrics that are not inherently bounded (min/max). A count of open tickets is not a progress bar — use a plain value.
- Don't use red/amber/green as the only communication of health — always pair color with a text label (`Status` or `Chip`) for accessibility.
- Don't put comparative data (current vs. previous) in the trend indicator if the comparison is the primary message — use the Comparative Card variant instead.
- Don't nest a full chart inside a Summary card — that is an Insight widget, not a Summary widget.

---

## States

| State | Trigger | Rendering |
|-------|---------|-----------|
| Loading | Metric data being fetched | Card skeleton (label placeholder + value placeholder) |
| No data | Metric has no value yet (new setup, no history) | Zone 2 shows "—" or "N/A" with a helper tooltip explaining why |
| Error | Metric fetch failed | Card shows an error icon + "Could not load" text in Zone 2 |
| Alert threshold | Value crosses a defined warning or critical threshold | Zone 1 `Status` chip changes to warning/error state |
| Positive trend | Delta is positive vs. previous period | Trend indicator: up arrow + success color token |
| Negative trend | Delta is negative vs. previous period | Trend indicator: down arrow + error color token |
