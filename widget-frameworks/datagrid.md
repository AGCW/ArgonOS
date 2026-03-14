# Datagrid Widget Framework

**Category:** Core Widget Framework  
**Design System:** Asio Neon  
**Last Updated:** 2026-03-12

---

## Purpose

The Datagrid framework structures UI surfaces where users need to **browse, search, filter, sort, and act on a set of structured records** presented in rows and columns. It is the primary pattern for any "list management" surface in ArgonOS.

Use the Datagrid framework when the data has identifiable rows (records) and the user's goal is to find, review, compare, or take action on one or more of them.

---

## When to Use

| Use This Framework When... | Do NOT Use When... |
|----------------------------|--------------------|
| The data set has 2+ columns of comparable attributes | You're showing a chronological feed (use Timeline) |
| The user needs to search or filter the data | You have only 1–3 scalar metrics (use Summary) |
| The user needs to take actions on individual rows | You're collecting user input (use Form) |
| Bulk selection or bulk actions are required | The data is better read as a trend or chart (use Insight) |
| The user needs to export or sort the data set | |

---

## Widget Sizing

**Valid sizes:** XL, XXL  
**Default:** XXL  
**Not valid for this framework:** XXS, XS, S, M, L

Datagrid widgets are data-dense surfaces that require both horizontal space (for columns) and vertical space (for rows). Sizes below XL do not provide enough room for a usable grid with toolbar, data rows, and pagination.

| Size | Dimensions (xl) | When to Use |
|------|----------------|-------------|
| XL | 768 × 768px | Compact list view with a limited number of visible rows (typically 4–6) and a reduced column set. Use when the Datagrid is **embedded in a broader layout** alongside other widgets, or when it serves as a secondary panel rather than the primary task surface. Pagination is still required if the data set exceeds visible rows. |
| XXL | 1552 × 964px | Primary management surface with a full column set, complete toolbar (search, filters, bulk actions), and full pagination controls. Use when **data browsing is the primary job** — the user came to this view specifically to find, review, or act on records. |

**Content-to-size rules:**
- If the Datagrid is one of several widgets on a dashboard and shows a supporting list → XL
- If the Datagrid IS the page — the user's entire task is working with this list → XXL
- If the data requires more than 5 visible columns at once → XXL (XL will force too much horizontal truncation)
- Do not use XL for bulk-action workflows — the reduced height limits selection visibility; use XXL

---

## Anatomy

The Datagrid framework is composed of 4 named zones. Every instance of this framework must include zones 1–3. Zone 4 is required when the data set can exceed the visible viewport.

```
┌─────────────────────────────────────────────────────────┐
│  Zone 1: Widget Header                                   │
│  [Title]  [Description]          [Primary Action Btn]   │
├─────────────────────────────────────────────────────────┤
│  Zone 2: Toolbar                                         │
│  [Search]  [Filter Chips]        [Column/View Controls] │
├─────────────────────────────────────────────────────────┤
│  Zone 3: Data Surface                                    │
│  ┌────────┬──────────┬──────────┬──────────┬──────────┐ │
│  │ Col A  │  Col B   │  Col C   │  Col D   │ Actions  │ │
│  ├────────┼──────────┼──────────┼──────────┼──────────┤ │
│  │ Row 1  │          │          │          │    ⋯     │ │
│  │ Row 2  │          │          │          │    ⋯     │ │
│  │ Row 3  │          │          │          │    ⋯     │ │
│  └────────┴──────────┴──────────┴──────────┴──────────┘ │
├─────────────────────────────────────────────────────────┤
│  Zone 4: Footer                                          │
│  [Rows per page]            [Page X of Y]  [< 1 2 3 >] │
└─────────────────────────────────────────────────────────┘
```

### Zone Definitions

**Zone 1 — Widget Header**
The surface-level header. Contains the widget title, an optional supporting description, and the primary action button (e.g., "Add New", "Import"). Do not use Zone 1 for filtering or search — those belong in Zone 2.

**Zone 2 — Toolbar**
All controls for narrowing and adjusting the data view. Contains the Search field (left-aligned), active filter chips, and view/column controls (right-aligned). The toolbar collapses to an icon bar on narrow viewports.

**Zone 3 — Data Surface**
The DataGrid itself. Rows represent individual records. The rightmost column should be reserved for row-level actions exposed via OverflowMenu. The first column may optionally contain a checkbox for bulk selection.

**Zone 4 — Footer**
Pagination controls. Required when the data set supports pagination. Contains rows-per-page control (left) and page navigation (right).

---

## Variants

### 1. Read-Only List
The simplest form. No bulk selection, no inline editing. Row actions via OverflowMenu only.

- **Use when:** The user's primary job is browsing or reviewing (e.g., an audit log that can't be edited).
- **Zones:** 1, 2 (Search only), 3, 4.
- **Toolbar:** Search field only. No filter chips unless filtering is supported.

### 2. Selectable List
Rows can be individually or bulk-selected. A contextual action bar appears when rows are selected.

- **Use when:** The user needs to act on multiple records at once (e.g., delete, assign, export).
- **Zones:** 1, 2, 3 (with checkbox column), 4.
- **Selection bar:** Appears above Zone 3 when 1+ rows are selected. Contains count + bulk action buttons.

### 3. Filterable List
Extends any base variant with active filter chip support in Zone 2.

- **Use when:** The data set has 3+ meaningful categorical attributes users will want to filter on.
- **Filter chips:** Rendered as `Chip` components in Zone 2. Each chip shows the active filter label and a dismiss (×) control.
- **Filter trigger:** A "Filter" button opens a Dropdown or side panel with filter options.

### 4. Inline Actions List
Each row exposes 1–2 icon actions directly in the row, plus a full OverflowMenu for secondary actions.

- **Use when:** The most common row action (e.g., "Edit", "View") benefits from being always-visible.
- **Rule:** Expose no more than 2 inline actions. All others go in the OverflowMenu.

### 5. Expandable Row List
Rows can be expanded to reveal additional detail without navigating away.

- **Use when:** Each record has subordinate data that is contextually useful (e.g., a ticket row that expands to show its sub-tasks).
- **Expansion trigger:** Chevron icon in the leftmost column.
- **Expanded content:** Renders below the parent row, full width of the grid.

---

## Asio Neon Components

| Zone | Component | Story Reference |
|------|-----------|-----------------|
| Zone 1 | `Button` (primary) | `asio-neon-components-button-✔` |
| Zone 2 | `Search` | `asio-neon-components-search` |
| Zone 2 | `Chip` (filter chips) | `asio-neon-components-chip-✔` |
| Zone 2 | `Dropdown` (filter trigger) | `asio-neon-form-components-dropdown-✔` |
| Zone 3 | `DataGrid` | `asio-neon-components-datagrid-🧪` |
| Zone 3 | `OverflowMenu` (row actions) | `asio-neon-components-overflow-menu` |
| Zone 3 | `Status` (status column values) | `asio-neon-components-status` |
| Zone 3 | `Badge` (count/label column values) | `asio-neon-components-badge-✔` |
| Zone 4 | `Pagination` | `asio-neon-components-pagination-✔` |
| Zone 4 | `TablePagination` | `asio-neon-components-tablepagination-✔` |
| Loading state | `DataGrid > Skeleton` | `asio-neon-components-datagrid-🧪--skeleton` |
| Empty state | `DataGrid > No Data` | `asio-neon-components-datagrid-🧪--no-data` |

---

## AI Selection Signals

Apply the Datagrid framework when the designer's description includes any of the following keywords or patterns:

- "list of [records/items/entities]"
- "table of results"
- "manage [items]" or "view all [items]"
- "search and filter"
- "sort by column"
- "bulk [action]" (delete, assign, export, archive)
- "row actions" or "actions per record"
- "pagination" or "show X per page"
- "export to CSV" or "export data"
- "column visibility" or "custom columns"

---

## Do's and Don'ts

### Do
- Always include Zone 2 with at least a Search field when the data set can exceed 10 rows.
- Use `Status` component for any column that represents a state or condition (not raw text).
- Use `OverflowMenu` for all row-level secondary actions to keep rows scannable.
- Show a Skeleton state (`DataGrid > Skeleton`) while data is loading — never show an empty grid.
- Show an empty state (`DataGrid > No Data`) when a filter returns zero results, with a clear message and a way to reset.

### Don't
- Don't use the Datagrid for fewer than 3 rows of static content — use a simple List component instead.
- Don't expose more than 2 inline actions per row — the rest must go in the OverflowMenu.
- Don't use DataGrid for 1-column lists — use the `List` component instead.
- Don't put filters inside Zone 1 (the Widget Header) — all filter controls belong in Zone 2 (Toolbar).
- Don't use free-text color coding on status values — always use the `Status` component for semantic color.

---

## States

| State | Trigger | Rendering |
|-------|---------|-----------|
| Loading | Data fetch in progress | `DataGrid > Skeleton` variant |
| Empty (no data) | Dataset has 0 records | `DataGrid > No Data` variant + explanatory message |
| Empty (filtered) | Active filters return 0 results | `DataGrid > Empty Search` variant + "Clear filters" action |
| Error | Data fetch failed | Alert component (error variant) above Zone 3 |
| Row selected | User selects 1+ rows | Selection count badge + contextual action bar |
| Row expanded | User expands a row | Expanded content zone below parent row |
