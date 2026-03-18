---
name: ux-prd-discovery-pipeline
description: Orchestrate the UX discovery workflow for a PRD—readiness evaluation and research retrieval from Marvin. Use when the user wants to run the UX discovery pipeline, review a PRD end-to-end, or produce discovery-ready output from a PRD.
---

# UX PRD Discovery Pipeline

## Overview

Single entry point for reviewing a PRD and producing a consolidated Discovery Pack: readiness score and research evidence. Runs PRD Readiness → Research Retrieval (Marvin) in sequence, with structured handoffs.

**Trigger:** "Run the UX discovery pipeline on this PRD", "Review this PRD", or similar.

---

## Workflow (Follow Exactly)

### Step 0: Optional Redundancy Check

**If user provides a Confluence space key** (e.g., "Run pipeline on space UXPRD"):

1. Use `getPagesInConfluenceSpace` (Atlassian MCP) to fetch PRDs in that space
2. Apply PRD Redundancy logic: identify overlap, conflicts, duplicate scope
3. Include redundancy findings in the final Discovery Pack
4. Use the primary/target PRD the user specifies for the rest of the pipeline

**Otherwise:** Skip. Proceed with the PRD the user provides (paste or Confluence URL).

---

### Step 1: Fetch PRD Content

**If user pastes PRD text:** Use it directly.

**If user provides Confluence URL:**
- Extract `cloudId` and `pageId` from URL: `https://[site].atlassian.net/wiki/spaces/[SPACE]/pages/[PAGE_ID]/[title]`
- Call `getConfluencePage(cloudId, pageId, contentFormat="markdown")` (Atlassian MCP)
- Use returned markdown as PRD content

**If user provides page title only:** Use Atlassian `search` tool to find the page, then fetch.

---

### Step 2: Run PRD Readiness

Apply the PRD Readiness Agent rules (already in `.cursor/rules/`):

- Evaluate the PRD for UX completeness
- Produce: UX Readiness Score, Missing Requirements, UX Questions, Design Risks
- Output `UX_READINESS_JSON` (score, readiness, categoryScores, gatesTriggered, missing, topRisks)

**Context management:** Summarize the readiness output in under 500 words before passing to next step. Keep `readiness`, `score`, `missing`, `topRisks`, personas, and workflows.

---

### Step 3: Gate Check

**If `readiness` is "Not Ready":**
- Stop the pipeline
- Return the full readiness report
- Do NOT run Research Retrieval
- Recommend: "Return PRD for clarification before discovery begins"

**If "Ready" or "Conditionally Ready":** Continue to Step 4.

---

### Step 4: Run Research Retrieval

Using personas, workflows, and keywords from the Readiness output:

1. **Marvin search first** (faster): `call_mcp_tool(server="user-marvin", toolName="search", arguments={query: "[persona/workflow keywords]", search_type: "insights"})`
2. **Marvin ask** (when synthesis needed): `call_mcp_tool(server="user-marvin", toolName="ask", arguments={question: "[natural language question about user needs/workflows]"})`
3. Optionally search Confluence via Atlassian MCP for UX research decks

Produce: Research Summary, Evidence Pack, Recurring Pain Points, Gaps & Next Research. Output `RESEARCH_RETRIEVAL_JSON`.

**Context management:** Summarize research output in under 400 words. Keep themes, pain points, and top 3–5 evidence items.

---

### Step 5: Produce Discovery Pack

Return a consolidated output:

**Discovery Pack (Markdown):** Readiness summary + Research summary + Redundancy findings (if Step 0 was run)

---

### Step 5b: Persist Discovery Pack

After producing the Discovery Pack Markdown:

1. **Derive slug** from PRD title (e.g., "Recent Ticket Drawer" → `recent-ticket-drawer`): lowercase, replace spaces/special chars with hyphens
2. **Filename:** `{YYYY-MM-DD}-{slug}.md` (use today's date)
3. **Write** the full Discovery Pack Markdown to `ui/discovery-packs/{filename}` (relative to project root)
4. **Read** existing `ui/discovery-packs/manifest.json`; if missing, use `[]`
5. **Prepend** new entry to the array:
   ```json
   {
     "id": "{YYYY-MM-DD}-{slug}",
     "title": "{PRD title}",
     "prdUrl": "{PRD URL from context}",
     "createdAt": "{ISO 8601 timestamp}",
     "filename": "{filename}"
   }
   ```
6. **Write** the updated manifest back to `ui/discovery-packs/manifest.json`
7. **Keep** returning the pack in chat as usual

---

## Handoff Format: DISCOVERY_CONTEXT

Between steps, maintain this structure (can be implicit in conversation):

```json
{
  "readiness": {
    "score": 0,
    "readiness": "Ready|Conditionally Ready|Not Ready",
    "personas": ["..."],
    "workflows": ["..."],
    "topRisks": ["..."],
    "missing": ["..."]
  },
  "research": {
    "themes": ["..."],
    "painPoints": ["..."],
    "evidenceSummary": "..."
  },
  "redundancy": null
}
```

---

## Token Management

- Summarize each step output before passing to next; keep context under 4K tokens for handoffs
- Do not re-paste the full PRD in later steps—reference the summary

---

## Marvin Latency

- Use `search` first for quick hits
- Use `ask` only when synthesis across multiple sources is needed (10–55s)
- If `ask` times out, proceed with `search` results only

---

## Additional Resources

- For handoff schema details, see [reference.md](reference.md)
- PRD Readiness: `.cursor/rules/prd-readiness-rule.mdc`
- Research Retrieval: `.cursor/rules/research-retrieval-agent.mdc`
