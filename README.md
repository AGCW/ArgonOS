# ArgonOS

UX discovery pipeline for PRDs. Helps designers kick off the discovery process from a Confluence PRD URL.

## Discovery Launcher

A simple UI to start the UX discovery pipeline. Enter a PRD URL and the launcher opens Cursor with a pre-filled prompt—confirm in chat to run the full pipeline (readiness evaluation, research retrieval, Discovery Pack).

### How to use

1. **Start the launcher** (choose one):
   - Run `npm run discovery` or `npm run ui`, then open http://localhost:3000
   - Or open `ui/index.html` directly in your browser

2. **Enter your PRD URL** (Confluence format):
   ```
   https://[site].atlassian.net/wiki/spaces/[SPACE]/pages/[PAGE_ID]/[title]
   ```

3. **Optional:** Add a Confluence space key to run the redundancy check across PRDs in that space.

4. **Click "Start Discovery"** — Cursor opens with the prompt. Confirm in chat to run the pipeline.

### Requirements

- Cursor IDE with this project open (ArgonOS)
- Atlassian and Marvin MCP plugins configured
- Confluence PRD URL
