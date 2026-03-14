# Form Widget Framework

**Category:** Core Widget Framework  
**Design System:** Asio Neon  
**Last Updated:** 2026-03-12

---

## Purpose

The Form framework structures UI surfaces where users **create, edit, configure, or submit structured information**. It is the primary pattern for any data-entry, settings, or configuration surface in ArgonOS.

The defining characteristic of the Form is **user intent to write** — the user is the source of the data, and the system's job is to make that entry clear, guided, and error-resistant.

---

## When to Use

| Use This Framework When... | Do NOT Use When... |
|----------------------------|--------------------|
| The user is creating a new record or entity | The user is browsing or filtering existing records (use Datagrid) |
| The user is editing the attributes of a record | The user is reading a summary of metrics (use Summary) |
| The user is configuring a setting or preference | The user is viewing a chart or trend (use Insight) |
| The user is completing a guided, multi-step process | The surface shows a sequence of past events (use Timeline) |
| The user must submit data to the system for processing | |

---

## Widget Sizing

**Valid sizes:** L, XL  
**Default:** L  
**Not valid for this framework:** XXS, XS, S, M, XXL

Form widgets require enough vertical space to render fields with their labels, helper text, validation messages, and action buttons without crowding. Sizes below L are too compact for usable form layouts. XXL is not valid — a form that requires full-width deep layout should be reconsidered as a multi-step flow or a dedicated page rather than a widget.

| Size | Dimensions (xl) | When to Use |
|------|----------------|-------------|
| L | 768 × 376px | Short form with 2–4 fields in a single-step layout. Use for quick configuration, inline editing, or narrow-scope data entry where the user can complete the task in under 60 seconds. Action buttons (Submit / Cancel) are visible without scrolling. |
| XL | 768 × 768px | Longer form with 5+ fields, or a form with logical sections separated by visual grouping (section headers, dividers). Use for structured data entry workflows where field relationships require visual hierarchy, or when a Stepper variant is used for multi-step flows. |

**Content-to-size rules:**
- If the form has 2–4 fields and a single submit action → L
- If the form has 5+ fields OR uses field grouping/sections → XL
- If the form uses the Stepper variant (multi-step flow) → XL (stepper header + step content + action bar need the height)
- Do not use XL to add padding or breathing room — only use it when field count or structure genuinely requires it
- If the form would require scrolling even at XL, it is too complex to be a widget; redesign as a full-page experience

---

## Anatomy

The Form framework is composed of 4 named zones. Zones 1, 3, and 4 are required in all variants. Zone 2 (section structure) is required when the form has more than 6 fields or distinct logical groupings.

```
┌─────────────────────────────────────────────────────────┐
│  Zone 1: Form Header                                     │
│  [Title]  [Subtitle / context]       [Close / Cancel]   │
├─────────────────────────────────────────────────────────┤
│  Zone 2: Section Structure (if multi-section)            │
│  ── Section Label ────────────────────────────────────  │
│                                                          │
│  Zone 3: Field Area                                      │
│                                                          │
│  [Label]               [Label]                          │
│  [Input field]         [Input field]                    │
│                                                          │
│  [Label]                                                │
│  [Dropdown / Select]                                    │
│                                                          │
│  [Checkbox group or Radio group]                        │
│                                                          │
│  [Validation message if error]                          │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  Zone 4: Action Bar                                      │
│  [Secondary action: Cancel]    [Primary action: Save]   │
└─────────────────────────────────────────────────────────┘
```

### Zone Definitions

**Zone 1 — Form Header**
Identifies what the form is for and provides an exit path. Required. Contains: form title, optional subtitle or contextual hint, and a Cancel or Close control (text button or × icon). Do not place field-level controls in Zone 1.

**Zone 2 — Section Structure**
Groups related fields under a labeled section divider. Required when the form contains logical subsections (e.g., "Basic Info", "Notifications", "Permissions"). A section label is a non-interactive divider row — it is not a heading for navigation. Use sparingly; do not create a section for fewer than 3 fields.

**Zone 3 — Field Area**
The primary work area. Contains all input components. Fields are laid out in a single-column or two-column grid. Labels are always above their input (never inline or to the left). Required fields are marked with an asterisk (*). Error messages appear directly below the offending field, not in a summary at the top.

**Zone 4 — Action Bar**
The submission and exit controls. Always rendered at the bottom of the form (or sticky-bottom inside a Drawer). Contains:
- **Primary action** (right-aligned): Submit, Save, Apply — uses the Button `primary` variant.
- **Secondary action** (left-aligned or adjacent): Cancel or Back — uses the Button `tertiary` or text variant.
- In multi-step forms (Wizard variant), replace with Back / Next / Finish controls.

---

## Variants

### 1. Single-Step Form
The standard form. All fields visible at once. One primary submit action.

- **Use when:** The form has fewer than 10 fields and no hard logical dependencies between field groups.
- **Zones:** 1, 3, 4.
- **Layout:** Single column (default). Two-column allowed for short related field pairs (e.g., First Name / Last Name).

### 2. Multi-Section Form
A longer form divided into labeled sections. All sections are visible and scrollable at once.

- **Use when:** The form has 10+ fields that naturally cluster into 2–4 distinct topics.
- **Zones:** 1, 2, 3, 4.
- **Layout:** Single column. Section dividers provide visual separation, not navigation.

### 3. Wizard (Multi-Step Form)
A step-by-step form flow using the `Stepper` component to guide the user through distinct stages.

- **Use when:** The form involves sequential steps with conditional logic, 3+ discrete stages, or decisions that affect subsequent fields.
- **Stepper:** Horizontal or vertical, placed above Zone 3 or in a left sidebar.
- **Navigation:** Zone 4 shows Back + Next (intermediate steps) and Back + Finish (final step).
- **Validation:** Each step is validated before the Next button allows progression.
- **Zones:** 1, 2 (Stepper acts as section structure), 3, 4.

### 4. Settings Panel
A persistent configuration surface, usually accessed from a main page (not a modal). Settings are saved individually (per-field) or as a group.

- **Use when:** The user is adjusting preferences or configuration that persists across sessions.
- **Save behavior:** Either per-field auto-save (with a `Switch` or `Toggle`) or a single "Save changes" action at the bottom.
- **Layout:** Single column, often inside a tabbed or sectioned page.
- **Zones:** 1 (page title, not a modal header), 2, 3, 4.

### 5. Modal Form
A focused form presented in a `Dialog` overlay. Blocks the underlying page. Used for quick-create or edit flows that should not disrupt context.

- **Use when:** The form has fewer than 8 fields and the user should stay on the current page after completion.
- **Size:** Dialog should not exceed 600px width or 80vh height. If the form is larger, use a Drawer or full page instead.
- **Zones:** 1 (with × close), 3, 4 (sticky-bottom inside Dialog).
- **Asio Neon component:** `Dialog` as the container.

### 6. Drawer Form
A form presented in a side `Drawer` that slides in from the right. The underlying page remains partially visible.

- **Use when:** The form is medium complexity (up to 15 fields) and context from the underlying page (e.g., a selected row) is useful while editing.
- **Size:** Fixed width (360–480px).
- **Zones:** 1 (with × close), 2 (optional), 3, 4 (sticky-bottom).
- **Asio Neon component:** `Drawer` as the container.

---

## Asio Neon Components

| Zone | Component | Story Reference |
|------|-----------|-----------------|
| Zone 1 | `Button` (Cancel / Close, tertiary) | `asio-neon-components-button-✔` |
| Zone 2 | Section divider (Typography / `hr`) | `asio-neon-assets-typography-✔` |
| Zone 2 | `Stepper` (Wizard variant) | `asio-neon-components-stepper-🧪` |
| Zone 3 | `TextInput` (text, email, phone) | `asio-neon-form-components-text-input-✔` |
| Zone 3 | `Textarea` (long text) | `asio-neon-form-components-textarea-✔` |
| Zone 3 | `NumberInput` (numeric fields) | `asio-neon-form-components-number-input-✔` |
| Zone 3 | `Password` (password fields) | `asio-neon-form-components-password-✔` |
| Zone 3 | `Dropdown` (single select, searchable) | `asio-neon-form-components-dropdown-✔` |
| Zone 3 | `Select` (simple select) | `asio-neon-form-components-select-✔` |
| Zone 3 | `Checkbox` (boolean or multi-select group) | `asio-neon-form-components-checkbox-✔` |
| Zone 3 | `Radio` / `RadioGroup` (mutually exclusive) | `asio-neon-form-components-radio-✔` |
| Zone 3 | `Switch` (on/off toggle) | `asio-neon-form-components-switch-✔` |
| Zone 3 | `DatePicker` (single date) | `asio-neon-form-components-date-picker-✔` |
| Zone 3 | `DateRangePicker` (date range) | `asio-neon-form-components-date-range-picker-✔` |
| Zone 3 | `TimePicker` (time selection) | `asio-neon-form-components-time-picker-✔` |
| Zone 3 | `TransferList` (dual-list selection) | `asio-neon-form-components-transfer-list` |
| Zone 3 | `Slider` (range input) | `asio-neon-components-slider-✔` |
| Zone 3 | `Alert` (inline validation summary) | `asio-neon-components-alert-✔` |
| Zone 4 | `Button` (primary — Submit/Save) | `asio-neon-components-button-✔` |
| Zone 4 | `Button` (tertiary — Cancel/Back) | `asio-neon-components-button-✔` |
| Container (Modal) | `Dialog` | `asio-neon-components-dialog-✔` |
| Container (Drawer) | `Drawer` | `asio-neon-components-drawer-🧪` |

---

## Field Selection Guide

| User Needs To... | Use This Component |
|------------------|--------------------|
| Enter free text (short) | `TextInput` |
| Enter free text (long / multiline) | `Textarea` |
| Enter a number | `NumberInput` |
| Choose one from a long list (searchable) | `Dropdown` |
| Choose one from a short list (≤6 options) | `RadioGroup` |
| Choose one from a list without search | `Select` |
| Choose multiple from a list | `Checkbox` group |
| Choose many from a large set | `TransferList` |
| Toggle a boolean on/off | `Switch` |
| Pick a single date | `DatePicker` |
| Pick a date range | `DateRangePicker` |
| Pick a time | `TimePicker` |
| Set a value within a defined range | `Slider` |
| Enter a password | `Password` |

---

## AI Selection Signals

Apply the Form framework when the designer's description includes any of the following keywords or patterns:

- "create new [record]" or "add [record]"
- "edit [record]" or "update [record]"
- "configure" or "configuration panel"
- "settings" or "preferences"
- "fill in" or "enter" or "input"
- "submit" or "save changes"
- "wizard" or "step-by-step" or "guided flow"
- "multi-step" or "onboarding flow"
- "required fields" or "validation"
- "modal form" or "side panel"

**Disambiguation:** If the user is viewing data without changing it, do not apply the Form framework. If the surface has a Stepper but shows historical completed stages (not user tasks), use the Timeline framework instead.

---

## Do's and Don'ts

### Do
- Always place field labels above their input, never beside it.
- Mark required fields with an asterisk (*) and document what "required" means in the form context.
- Validate on blur (when the user leaves a field) and on submit — not on every keystroke.
- Show error messages directly below the offending field in red, using the Asio Neon error token color.
- Use `Alert` (error variant) at the top of Zone 3 only for form-level errors (e.g., "Server error, try again").
- Disable the primary submit button only when the form is actively submitting (show a loading spinner in the button) — not during user input.
- In the Wizard variant, always allow Back navigation so users are not trapped.

### Don't
- Don't use a Dropdown for fewer than 4 options — use `RadioGroup` instead.
- Don't use `Switch` for anything that requires a confirmation step — use a `Checkbox` with an explicit "I understand" label.
- Don't put more than 2 actions in Zone 4. If you need a third action (e.g., "Save as Draft"), it is a secondary button between Cancel and Save.
- Don't auto-submit on field change (no on-change submission without an explicit confirm action).
- Don't clear the form on Cancel without confirming with the user if the form has been partially filled.
- Don't display all validation errors only in Zone 1 — always bring the user back to the specific field.

---

## States

| State | Trigger | Rendering |
|-------|---------|-----------|
| Pristine | Form loaded, no user input | All fields empty or pre-filled with defaults |
| Dirty | User has changed at least one field | Cancel/Close prompts for confirmation before dismissing |
| Validation error | Submit attempted with invalid fields | Red border on offending fields + error messages below each |
| Submitting | Submit button clicked | Primary button disabled + loading spinner inside button |
| Success | Submission confirmed | Form closes (Modal/Drawer) or redirects; Toast notification confirms |
| Server error | API returns an error | Alert (error) at top of Zone 3 with error message; form remains open |
| Read-only | User lacks edit permissions | All fields rendered as read-only text, no Zone 4 action bar |
