# Asio Neon Design System Tokens

**Source:** Figma — [Asio-Neon](https://www.figma.com/design/a1eKyRtlUCKWmryjQPA4Q2/Asio-Neon)
**Extracted:** 2026-03-13
**Font family:** Inter (all weights)

---

## Color Tokens

### Text
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Text/_text-primary` | `#101120` | Default body text |
| `Colors/Text/_text-secondary` | `#767786` | Muted / supporting text |
| `Colors/Text/_text-on-color` | `#f1f1f2` | Text on dark/colored backgrounds |

### Background
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Background/_background` | `#ffffff` | Default page/surface background |
| `Colors/Background/_background-hover` | `#99999c29` | Hover state on transparent surfaces |

### Button — Primary
| Token | Value |
|-------|-------|
| `Colors/Button/_button-primary` | `#2e3f80` |
| `Colors/Button/_button-primary-hover` | `#222e5e` |
| `Colors/Button/_button-primary-active` | `#394e9e` |
| `Colors/Button/_button-disabled` | `#c6c6c6` |

### Button — Secondary
| Token | Value |
|-------|-------|
| `Colors/Button/_button-secondary` | `#2e3f80` |
| `Colors/Button/_button-secondary-hover` | `#222e5e` |
| `Colors/Button/_button-secondary-active` | `#394e9e` |

### Button — Danger
| Token | Value |
|-------|-------|
| `Colors/Button/_button-danger-primary` | `#d32f2f` |
| `Colors/Button/_button-danger-secondary` | `#ef5350` |
| `Colors/Button/_button-danger-hover` | `#c62828` |
| `Colors/Button/_button-danger-active` | `#aa241d` |

### Layer / Surface
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Layer/_layer-01` | `#f6f6f9` | Subtle container/card background |
| `Colors/Layer/_layer-hover-03` | `#e7e7ea` | Hover state on layer surfaces |
| `Colors/Layer/_layer-active-03` | `#c5c6cb` | Active/pressed state on layers |

### Border
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Border/_border-subtle-02` | `#ececee` | Subtle dividers and outlines |

### Icon
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Icon/_icon-on-color` | `#ecedee` | Icons on dark/colored backgrounds |
| `Colors/Icon/_icon-disabled` | `#23242a40` | Disabled icon state (40% opacity) |

### Interactive States
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Focus/_focus` | `#394e9e` | Keyboard focus ring |
| `Colors/Link/_link-primary` | `#006a8e` | Anchor and link text |

### Miscellaneous
| Token | Value | Use |
|-------|-------|-----|
| `Colors/Skeleton/_skeleton-background` | `#dadae4` | Loading skeleton fill |
| `Colors/Miscellaneous/_alert-text` | `#101120` | Alert/notification text |
| `Colors/Miscellaneous/_transparent` | `#ffffff00` | Transparent fill |

---

## Typography Tokens

All type uses **Inter** from Google Fonts / the Figma library.

### Headings
| Token | Family | Style | Size | Weight | LineHeight | LetterSpacing |
|-------|--------|-------|------|--------|------------|---------------|
| `Headings/Light/H2` | Inter | Light | 48px | 300 | 100% | 0 |
| `Headings/Light/H4` | Inter | Light | 24px | 300 | 100% | 0 |
| `Headings/Bold/H4` | Inter | Bold | 24px | 700 | 100% | 0 |

### Body / UI Text
| Token | Family | Style | Size | Weight | LineHeight | LetterSpacing |
|-------|--------|-------|------|--------|------------|---------------|
| `Text/16-Semibold` | Inter | Semi Bold | 16px | 600 | 22px | 0 |
| `Text/14-semibold` | Inter | Semi Bold | 14px | 600 | 18px | 0 |

---

## Spacing Tokens

| Token | Value (px) | Use |
|-------|-----------|-----|
| `Spacing/spacing-03` | 8px | Base spacing unit (gaps, padding) |

> Note: Spacing tokens follow a standard 4px base grid. `spacing-03` = 8px suggests the pattern: spacing-01=4px, spacing-02=6px, spacing-03=8px, spacing-04=12px, spacing-05=16px, spacing-06=24px, spacing-07=32px (inferred from common patterns until additional tokens are extracted).

---

## Widget Sizing Grid

**Source:** Figma — [Widgets-Templates-Library](https://www.figma.com/design/RjGqxhhalCsqQhC91omYUi/Widgets-Templates-Library?node-id=3-80)
**Grid:** 8 columns, consistent across all breakpoints
**Row height:** 180px | **Gap:** 16px

### Size Tiers

| Size | Columns (Width) | Rows (Height) | Notes |
|------|----------------|---------------|-------|
| XXS | 2 cols | 1 row | Minimal stat/indicator widget |
| XS | 4 cols | 1 row | Compact summary widget |
| S | 8 cols | 1 row | Full-width banner widget |
| M | 2 cols | 2 rows | Small card widget |
| L | 4 cols | 2 rows | Medium card widget |
| XL | 4 cols | 4 rows | Large card with data |
| XXL | 8 cols | 5 rows (or 100%) | Full-width deep widget |

### Breakpoints

| Token | Viewport Approx. | Grid Columns |
|-------|-----------------|--------------|
| `$breakpoints.xl` | 1920px (1552px content) | 8 cols |
| `$breakpoints.l` | 1440px | 8 cols |
| `$breakpoints.m` | 1280px | 8 cols |
| `$breakpoints.s` | 1024px | 8 cols |
| `$breakpoints.xs` | 768px | 8 cols |

> The column/row ratios for all 7 widget size tiers are **identical across all breakpoints**. Column pixel widths scale with viewport; relative sizing stays the same.

### Pixel Widths at $breakpoints.xl (1552px content area, 8 cols, 16px gaps)

| Size | Approx. Width | Approx. Height |
|------|--------------|----------------|
| XXS | 368px | 180px |
| XS | 752px | 180px |
| S | 1552px | 180px |
| M | 368px | 376px |
| L | 752px | 376px |
| XL | 752px | 768px |
| XXL | 1552px | 964px |

> Formula: col width = (1552 - 7×16) / 8 = 180px per col. Width = (cols × 180) + ((cols-1) × 16). Height = (rows × 180) + ((rows-1) × 16).

---

## How This Connects to Widget Frameworks

Each of the 5 core widget frameworks should be sized using the grid above:

| Framework | Recommended Default Size |
|-----------|--------------------------|
| Summary (KPI/metric card) | XS or M |
| Timeline (activity/events) | L or XL |
| Datagrid (table/list) | XL or XXL |
| Form (structured input) | L or XL |
| Insight (chart/analytics) | L, XL, or XXL |
