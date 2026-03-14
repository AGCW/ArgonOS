# Timeline Widget Framework

**Category:** Core Widget Framework  
**Design System:** Asio Neon  
**Last Updated:** 2026-03-12

---

## Purpose

The Timeline framework structures UI surfaces where users need to **read a chronological sequence of events, activities, or changes** associated with a record, user, or system. It is the primary pattern for history, audit trails, activity feeds, and event logs in ArgonOS.

The defining characteristic of the Timeline is **time as the primary axis** — every item is anchored to a timestamp, and reading order is chronological (newest first by default).

---

## When to Use

| Use This Framework When... | Do NOT Use When... |
|----------------------------|--------------------|
| Events are timestamped and ordered by time | You're tracking progress toward a goal (use Form > Stepper variant) |
| The user needs to understand what happened and when | You have a set of records to manage with actions (use Datagrid) |
| The sequence includes actor attribution ("who did what") | The sequence is a list of steps to follow (use Form > Stepper) |
| You need to display system or human-generated activity | The items are unordered or alphabetical (use Datagrid or List) |
| An audit or compliance record is required | |

---

## Widget Sizing

**Valid sizes:** L, XL  
**Default:** L  
**Not valid for this framework:** XXS, XS, S, M, XXL

Timeline widgets need vertical space to display a readable sequence of events. Sizes below L are too short to render a meaningful event list. XXL is not valid because the Timeline framework does not expand into full-width layouts — at that scale, a Datagrid is a better fit.

| Size | Dimensions (xl) | When to Use |
|------|----------------|-------------|
| L | 768 × 376px | Recent activity feed showing 4–6 events with timestamp, actor, and a brief description. Use when the timeline is **secondary context** — one widget among several on a dashboard, giving quick situational awareness without being the focus. |
| XL | 768 × 768px | Full event history or audit trail showing 10+ events with richer per-event detail (expandable notes, sub-events, or linked records). Use when the timeline is the **primary surface** — the main reason the user opened this view. |

**Content-to-size rules:**
- If the user needs a quick "what happened recently" read alongside other widgets → L
- If the user is investigating a specific record's full history or compiling an audit trail → XL
- Do not use L when the event list requires scrolling past 6–8 items to reach relevant content — upgrade to XL
- Do not use XL when the timeline is supplementary; it will dominate the layout disproportionately

---

## Anatomy

The Timeline framework is composed of 3 named zones. Zone 1 and Zone 3 are required. Zone 2 (time range controls) is required when the timeline spans more than 24 hours of data.

```
┌─────────────────────────────────────────────────────────┐
│  Zone 1: Widget Header                                   │
│  [Title]  [Record Context]        [Time Range Filter]   │
├─────────────────────────────────────────────────────────┤
│  Zone 2: Filter Bar (optional)                           │
│  [Event Type Chips]              [Actor Filter]         │
├─────────────────────────────────────────────────────────┤
│  Zone 3: Event Stream                                    │
│                                                          │
│  ●  2026-03-12 · 2:34 PM                                │
│  │  [Event Title]    [Actor Badge]    [Status/Tag Chip] │
│  │  [Event detail / description text]                   │
│  │                                                       │
│  ●  2026-03-11 · 9:12 AM                                │
│  │  [Event Title]    [Actor Badge]    [Status/Tag Chip] │
│  │  [Event detail / description text]                   │
│  │                                                       │
│  ●  [Load more events]                                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Zone Definitions

**Zone 1 — Widget Header**
Contains the widget title (e.g., "Activity Log", "Change History") and optional record context (e.g., a badge showing which ticket or entity the timeline belongs to). The time range filter (Dropdown or ToggleButton group) lives at the right end of Zone 1.

**Zone 2 — Filter Bar**
Optional. Appears below Zone 1 when users need to filter by event type or actor. Uses Chip components for active filters. When no filters are active, Zone 2 can be collapsed or hidden.

**Zone 3 — Event Stream**
The core of the framework. Events are arranged vertically on a timeline spine (a vertical connector line with dot indicators). Each event entry consists of:
- **Timestamp** — date and time, rendered as secondary text
- **Event Title** — the human-readable name of the action (e.g., "Status changed", "Comment added")
- **Actor** — the user or system that performed the action, rendered as a Badge or Avatar + name
- **Status/Tag Chip** — optional; shows the resulting state or category of the event
- **Detail text** — optional; a single short sentence or expandable section for additional context

---

## Variants

### 1. Activity Feed
A real-time or near-real-time stream of mixed event types. Items can be added without a full page reload.

- **Use when:** Showing ongoing activity for a record (e.g., a ticket's comment and status history).
- **Sort:** Newest first (top).
- **Load more:** Pagination via "Load more" button at the bottom of the stream — not traditional page pagination.
- **Zones:** 1, 3.

### 2. Audit Trail
A compliance-grade event log. All events are system-generated or system-verified. Read-only. May include a "Download" or "Export" action in Zone 1.

- **Use when:** A record of who changed what and when is required for compliance or accountability.
- **Sort:** Newest first (top). May offer oldest-first toggle.
- **Key requirement:** Actor attribution is mandatory on every entry.
- **Zones:** 1, 2 (actor filter), 3.

### 3. Notification Feed
A personal feed of events targeted at the current user. Items may include a "mark as read" or "dismiss" action. Unread items are visually differentiated.

- **Use when:** Surfacing what has changed that the user hasn't seen yet.
- **Unread indicator:** Rendered using the `Badge` component on the entry or a highlighted dot on the timeline spine.
- **Zones:** 1 (with unread count Badge), 3.
- **Asio Neon component:** Also consider `Notification` component for simple single-item notifications.

### 4. Grouped Timeline
Events are grouped by day (or another time bucket). A group header row separates event clusters.

- **Use when:** The timeline spans multiple days and grouping helps orientation.
- **Group header:** A sticky label (e.g., "Today", "Yesterday", "March 11") separating each cluster.
- **Zones:** 1, 2 (optional), 3.

### 5. Milestone Timeline
A forward-looking or mixed (past + future) sequence of significant milestones. Not a raw event log — milestones are curated and planned.

- **Use when:** Showing project phases, scheduled events, or onboarding steps that have a historical and future component.
- **Status per milestone:** Use `Status` component to indicate completed / current / upcoming.
- **Zones:** 1, 3.

---

## Asio Neon Components

| Zone | Component | Story Reference |
|------|-----------|-----------------|
| Zone 1 | `Badge` (record context label) | `asio-neon-components-badge-✔` |
| Zone 1 | `Dropdown` (time range filter) | `asio-neon-form-components-dropdown-✔` |
| Zone 1 | `Button` (export action, audit trail only) | `asio-neon-components-button-✔` |
| Zone 2 | `Chip` (event type + actor filter chips) | `asio-neon-components-chip-✔` |
| Zone 3 | `List` (event stream container) | `asio-neon-components-list-🧪` |
| Zone 3 | `Avatar` + name text (actor attribution) | `asio-neon-components-avatar-✔` |
| Zone 3 | `Badge` (unread count, Notification variant) | `asio-neon-components-badge-✔` |
| Zone 3 | `Status` (milestone status, Milestone variant) | `asio-neon-components-status` |
| Zone 3 | `Chip` (event type tag per entry) | `asio-neon-components-chip-✔` |
| Zone 3 | `Stepper` (Milestone variant only) | `asio-neon-components-stepper-🧪` |
| Zone 3 | `Notification` (Notification Feed variant) | `asio-neon-components-notification` |

---

## AI Selection Signals

Apply the Timeline framework when the designer's description includes any of the following keywords or patterns:

- "activity log" or "activity feed"
- "audit trail" or "audit log"
- "change history" or "version history"
- "recent events" or "recent activity"
- "event log" or "system log"
- "what happened" / "who did what"
- "notification feed" or "notification center"
- "history of [record]"
- "timeline of [events]"
- "chronological" or "in order"

**Do not apply the Timeline framework if:** The sequence describes steps for the user to complete (→ Form > Stepper). The sequence has no timestamps (→ Datagrid or List). The sequence is a plan or roadmap with no historical anchor (→ depends on context).

---

## Do's and Don'ts

### Do
- Always show timestamps on every entry — date and time, not relative only (e.g., "2 hours ago").
- Use `Status` component for event outcomes (e.g., "Resolved", "Escalated") — never plain text color.
- Include actor attribution on every entry in Audit Trail and Activity Feed variants.
- Use `Chip` to tag event types (e.g., "Comment", "Status Change", "Assignment") so users can visually scan event categories.
- Show a skeleton or loading state while events are being fetched.
- Show an empty state with context ("No activity in the last 30 days") when the feed is empty.

### Don't
- Don't use the Timeline for forward-looking step sequences — use the Form framework's Stepper variant.
- Don't show more than 20 events at once without a "Load more" mechanism or pagination.
- Don't omit timestamps — if a timestamp isn't available, the surface is not a timeline.
- Don't use generic icons for all event types — use distinct icons or Chip labels to differentiate event categories.
- Don't collapse actor attribution behind a hover state in Audit Trail — it must always be visible.

---

## States

| State | Trigger | Rendering |
|-------|---------|-----------|
| Loading | Event fetch in progress | Skeleton list items (3–5 placeholder rows) |
| Empty (no events) | No events match the current time range | Empty state illustration + "No events found" + time range hint |
| Empty (filtered) | Active event-type or actor filter returns 0 | "No results for this filter" + "Clear filters" action |
| Error | Event fetch failed | Alert (error variant) above Zone 3 |
| Unread items (Notification variant) | User has unseen events | Badge count on header + highlighted dot on unread entries |
| Real-time update (Activity Feed variant) | New event arrives | Item prepended to top of stream, optionally with a "New activity" nudge banner |
