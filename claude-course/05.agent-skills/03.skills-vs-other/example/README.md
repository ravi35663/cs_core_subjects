# Examples: one file per customization type

| Folder or file | Type | Loads when | Can enforce a rule? |
|---|---|---|---|
| `CLAUDE.md` | CLAUDE.md | Every conversation | No |
| `.claude/skills/dsa-check/SKILL.md` | Skill | When the request matches the description | No |
| `.claude/agents/code-reviewer.md` | Subagent | When invoked, in its own context | No |
| `.claude/settings.json` + `.claude/hooks/block-push-main.js` | Hook | When the event fires | Yes (exit 2) |
| `.mcp.json` | MCP server | When the server connects | Depends on the server |

These files sit inside the course folder, so Claude Code does not load them for this repo. To try one, copy it to the project root and restart Claude Code.
