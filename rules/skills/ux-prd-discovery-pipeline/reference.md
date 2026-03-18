# UX PRD Discovery Pipeline — Reference

## DISCOVERY_CONTEXT Schema

Structured object passed between pipeline steps. Used implicitly; agent maintains this in conversation.

```json
{
  "readiness": {
    "score": 85,
    "readiness": "Ready",
    "personas": ["Admin user", "End user"],
    "workflows": ["Create report", "Export data"],
    "topRisks": ["Risk 1", "Risk 2"],
    "missing": ["Edge case X"],
    "categoryScores": {
      "personas": 12,
      "workflows": 18,
      "goals": 14,
      "edgeCases": 10,
      "permissions": 12,
      "accessibility": 6,
      "metrics": 8
    }
  },
  "research": {
    "themes": ["Theme A", "Theme B"],
    "painPoints": ["Pain point 1", "Pain point 2"],
    "evidenceSummary": "3–5 bullet summary",
    "queriesUsed": ["query1", "query2"]
  },
  "redundancy": {
    "findings": [],
    "severity": "LOW"
  }
}
```

## MCP Tool References

### Marvin (user-marvin)

| Tool | Use |
|------|-----|
| `search` | Fast keyword search. Use `search_type: "insights"` for published insights. |
| `ask` | Natural language Q&A over research. 10–55s. Use when synthesis needed. |

### Atlassian (plugin-atlassian-atlassian)

| Tool | Use |
|------|-----|
| `getConfluencePage` | Fetch PRD content. `contentFormat: "markdown"`. |
| `getPagesInConfluenceSpace` | List PRDs in space for redundancy check. |
| `search` | Rovo search across Confluence/Jira. |

