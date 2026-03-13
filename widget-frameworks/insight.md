# Insight Widget Framework

**Category:** Core Widget Framework  
**Design System:** Asio Neon  
**Last Updated:** 2026-03-12

---

## Purpose

The Insight framework structures UI surfaces where users need to **analyze trends, understand patterns, compare performance, and draw conclusions from data over time or across dimensions**. It is the primary pattern for analytics, reporting, and data visualization surfaces in ArgonOS.

The defining characteristic of the Insight widget is the **visualization-first layout**: the primary content is a chart or graph, supported by controls for adjusting the view and supplementary data for deeper interpretation. Unlike the Summary framework (which shows a current state), the Insight framework reveals *how something has changed* and *why*.

---

## When to Use

| Use This Framework When... | Do NOT Use When... |
|----------------------------|--------------------|
| The data has a time axis and shows change over time | You have a single scalar metric (use Summary) |
| The user's goal is to identify a trend or pattern | The user needs to browse rows of records (use Datagrid) |
| Comparison across categories or periods is the primary task | The user needs to enter data (use Form) |
| The visualization is the primary way to communicate the data | The surface shows a feed of events (use Timeline) |
| The user needs to switch between chart types or time ranges | |

---

## Anatomy

The Insight framework is composed of 4 named zones. Zones 1, 2, and 3 are required. Zone 4 (data table) is optional and appears when users need to inspect the underlying values.

```
┌─────────────────────────────────────────────────────────┐
│  Zone 1: Widget Header                                   │
│  [Title]  [Description]      [Date Range]  [Export]     │
├─────────────────────────────────────────────────────────┤
│  Zone 2: View Controls                                   │
│  [Metric Toggle / View Toggle]         [Granularity]    │
├─────────────────────────────────────────────────────────┤
│  Zone 3: Visualization Area                              │
│                                                          │
│   ▲                                                      │
│   │    ╭──╮                                             │
│   │   ╭╯  ╰──╮          ╭──╮                           │
│   │  ╭╯      ╰──────────╯  ╰──╮                        │
│   └──────────────────────────────────▶                  │
│                                                          │
│  [Legend]                           [Annotation]        │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  Zone 4: Data Table (optional)                           │
│  [Toggle: Show / Hide table]                            │
│  [Tabular breakdown of charted values]                  │
└─────────────────────────────────────────────────────────┘
```

### Zone Definitions

**Zone 1 — Widget Header**
Names the insight surface and provides global controls. Required. Contains: insight title, optional description or context, date range selector (Dropdown or ToggleButton group for preset periods like "Last 7 days", "Last 30 days", "Custom"), and an optional Export action button.

**Zone 2 — View Controls**
Controls that change *what* or *how* the visualization displays — without changing the time range. Optional but strongly recommended for any insight that has more than one dimension. Contains:
- **Metric Toggle** (`ToggleButton`): Switch between metrics shown in the chart (e.g., "Revenue" vs. "Volume").
- **View Toggle** (`ToggleButton`): Switch between chart types (e.g., "Line" vs. "Bar").
- **Granularity** (`Dropdown`): Change the time bucket (e.g., "Daily" / "Weekly" / "Monthly").

**Zone 3 — Visualization Area**
The chart itself. The chart library is outside the scope of this framework spec — the Insight framework defines the *surrounding structure*, not the internal charting implementation. Zone 3 must also include:
- **Legend:** Identifies data series. Rendered below the chart (not overlaid on it).
- **Annotations:** Optional inline labels for significant data points (e.g., a deployment marker, a campaign start date).

**Zone 4 — Data Table**
An optional expandable table showing the raw values behind the chart. Controlled by a show/hide toggle at the top of Zone 4. When visible, uses the Asio Neon `DataGrid` or a simple `Table` component. Renders below Zone 3.

---

## Variants

### 1. Trend Chart
The default Insight variant. Displays one or more metrics plotted over time as line or area series.

- **Use when:** The user's primary question is "How has X changed over time?"
- **Chart type:** Line chart (default), Area chart (when emphasizing volume).
- **Zones:** 1, 2, 3, 4 (optional).
- **Legend:** One entry per data series. Max 5 series before readability degrades.

### 2. Comparison Chart
Displays the same metric for two or more distinct categories or time periods side-by-side.

- **Use when:** The user's primary question is "How does X compare to Y?"
- **Chart type:** Grouped bar chart (categories), or dual-axis line chart (two metrics).
- **Zone 2:** Metric toggle selects which two entities to compare.
- **Zones:** 1, 2, 3, 4 (optional).

### 3. Distribution Chart
Shows how a metric is distributed across categories or segments.

- **Use when:** The user's primary question is "What is the breakdown of X by category?"
- **Chart type:** Bar chart (horizontal or vertical), Donut/Pie chart for part-to-whole.
- **Rule:** Limit to 8 categories before grouping into an "Other" segment.
- **Zones:** 1, 3, 4 (optional). Zone 2 (granularity) is typically not applicable.

### 4. Performance Scorecard
A hybrid variant: Summary cards on top (Zone 0, Summary framework) + Trend chart below (Zones 1–3, Insight framework). The summary cards provide the headline numbers; the chart explains the trend behind them.

- **Use when:** A reporting page needs both a quick-read KPI and the trend that produced it.
- **Structure:** Summary widget cards arranged horizontally above a full-width Insight widget.
- **Note:** This is a page-level composition, not a single widget. The Summary and Insight widgets each operate within their own framework.

### 5. Embedded Analytics
A compact Insight widget embedded within a record detail page (e.g., a ticket detail page that includes a "Resolution Time Trend" chart for that ticket's category).

- **Use when:** Contextual analytics are more useful inline than on a separate reports page.
- **Size:** Compact height (200–280px). Zone 2 is minimal (date range only). Zone 4 is hidden by default.
- **Zones:** 1 (title + date range only), 3, optionally 4.

---

## Asio Neon Components

| Zone | Component | Story Reference |
|------|-----------|-----------------|
| Widget container | `Card` | `asio-neon-components-card-✔` |
| Zone 1 | `Dropdown` (date range presets) | `asio-neon-form-components-dropdown-✔` |
| Zone 1 | `Button` (Export action) | `asio-neon-components-button-✔` |
| Zone 1 | `Chip` (active filter tag) | `asio-neon-components-chip-✔` |
| Zone 2 | `ToggleButton` (metric / view toggle) | `asio-neon-components-togglebutton-✔` |
| Zone 2 | `Dropdown` (granularity selector) | `asio-neon-form-components-dropdown-✔` |
| Zone 3 | Chart library (outside Asio Neon scope) | — |
| Zone 3 | `Badge` (annotation labels on chart) | `asio-neon-components-badge-✔` |
| Zone 3 | `Status` (data series health indicators) | `asio-neon-components-status` |
| Zone 4 | `DataGrid` (underlying data table) | `asio-neon-components-datagrid-🧪` |
| Zone 4 | `Table` (simple breakdown table) | `asio-neon-components-table-✔` |
| Loading | Skeleton content inside card | Skeleton pattern per Asio Neon guidelines |
| Empty | Empty state (no data for period) | `Card` + empty state message |

---

## AI Selection Signals

Apply the Insight framework when the designer's description includes any of the following keywords or patterns:

- "chart" or "graph" or "visualization"
- "trend" or "over time" or "historical"
- "analytics" or "reporting" or "report"
- "performance" or "performance over time"
- "compare [X] to [Y]" or "benchmark"
- "distribution" or "breakdown by"
- "time series" or "date range"
- "line chart", "bar chart", "area chart", "donut chart"
- "export to PDF" or "export chart"
- "weekly/monthly/quarterly view"

**Disambiguation:** If the user only wants to see a single number and its trend delta, use the **Summary** framework (a trend indicator in a Summary card is not an Insight widget). If the chart is accompanied by a full interactive table with row-level actions, the table is a separate **Datagrid** widget — the chart itself remains an Insight widget.

---

## Do's and Don'ts

### Do
- Always include a date range control in Zone 1 — never hard-code the visible time range.
- Use `ToggleButton` in Zone 2 for view switching (chart type, metric) — do not use a Dropdown for 2–3 options.
- Annotate significant data points (deployments, incidents, campaigns) directly on the chart in Zone 3.
- Provide a "No data for this period" empty state in Zone 3 — never show an empty chart area.
- Show a skeleton loading state while data fetches — never render a chart with no data as a placeholder.
- Include a legend for any chart with 2+ data series.
- Keep the Zone 4 data table hidden by default — offer it as an opt-in for users who need the raw values.

### Don't
- Don't show more than 5 data series on a single chart without a mechanism to show/hide individual series.
- Don't use a Pie or Donut chart for more than 5 segments — use a horizontal bar chart instead.
- Don't use dual-axis charts unless both axes have the same unit type (or you've provided very clear axis labels).
- Don't apply arbitrary colors to data series — use the Asio Neon chip color tokens for consistency.
- Don't embed a full Insight widget with all 4 zones inside a Summary card — that is a separate page composition.
- Don't put actionable form controls (text inputs, submit buttons) inside the Insight widget — that is a Form widget.

---

## States

| State | Trigger | Rendering |
|-------|---------|-----------|
| Loading | Data fetch in progress | Skeleton chart area (animated placeholder) |
| No data (period) | No data exists for selected date range | Empty state: illustration + "No data for this period" + suggested time range |
| No data (filtered) | Active filter returns no results | Empty state: "No data matches the current filter" + "Clear filter" action |
| Error | Data fetch failed | Alert (error variant) inside Zone 3 |
| Partial data | Some series have data, others do not | Chart renders available series; missing series labeled "(no data)" in legend |
| Annotation hover | User hovers over a chart annotation | Tooltip with annotation detail (event name, date, actor) |
| Data point hover | User hovers over a chart data point | Tooltip with exact value, date, and series label |
| Export in progress | User clicks Export | Button enters loading state; file downloads when ready |
