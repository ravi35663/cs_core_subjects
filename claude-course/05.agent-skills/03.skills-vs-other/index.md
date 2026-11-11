# Claude Code customization: when to use what

## Comparison table

| | **CLAUDE.md** | **Skill** | **Subagent** | **Hook** | **MCP server** |
|---|---|---|---|---|---|
| **Purpose** | Always-on project rules | Task-specific expertise | Delegated work in its own context | Automatic action on an event | Connect to external tools and data |
| **When it loads or runs** | Every conversation | When the request matches the description | When Claude or you invoke it | When the event fires (tool call, stop, save) | When the server is connected |
| **Trigger type** | Always | Request-driven | Task-driven | Event-driven | Tool call from Claude |
| **Context** | Adds to main context | Adds to main context | Separate, isolated context | No context; runs as code | Adds tool definitions to context |
| **Best for** | Coding style, constraints, stack choices | PR checklists, commit formats, procedures | Long, separate tasks; different tool access | Blocking, formatting, logging, tests | Databases, issue trackers, APIs |
| **Can enforce a rule?** | No (guidance) | No (guidance) | No (guidance) | Yes (can block with exit 2) | Depends on the server |
| **Where it lives** | `CLAUDE.md`, `.claude/CLAUDE.md` | `.claude/skills/<name>/SKILL.md` | `.claude/agents/<name>.md` | `settings.json` `hooks` key | `.mcp.json` or `claude mcp add` |
| **Key parameters** | Length, clarity | `name`, `description`, `allowed-tools`, `model` | `tools`, `description` | `matcher`, event name, exit code | Server command, transport |
| **Cost to context** | Every turn | Only description until used | None in main context | None | Tool definitions every turn |

## What each one does

- **CLAUDE.md:** Rules that always apply, such as "use `const` by default." Keep it short.
- **Skill:** Expertise for one kind of task. Only the name and description load until the skill matches.
- **Subagent:** A separate worker with its own context. It returns a result, and its steps do not clutter your main session.
- **Hook:** Code that runs at a fixed point. It can block an action (exit 2) or react to one (PostToolUse).
- **MCP server:** Gives Claude access to outside systems, such as a database or an issue tracker.

## Example from this repo

- **CLAUDE.md:** `.claude/CLAUDE.md` holds the repo layout and "do not touch `claude-course/**`."
- **Skill:** `.claude/skills/` holds task procedures such as `dsa-problem`.
- **Subagent:** `.claude/agents/code-reviewer.md` reviews changes without editing files.
- **Hook:** A `PreToolUse` hook can block `git push` to `main`.
- **MCP server:** None yet. Add one with `.mcp.json` when you need an external tool.

## Which one to pick

- **Always true?** Use CLAUDE.md.
- **Only true for some tasks?** Use a skill.
- **Needs its own workspace or different tools?** Use a subagent.
- **Must run on an event or never be skipped?** Use a hook.
- **Needs an outside system?** Use an MCP server.

## Important points

- **Combine them.** A typical setup uses all five.
- **Do not put a rule that must never break in CLAUDE.md or a skill.** Use a hook.
- **Keep CLAUDE.md lean.** Move task-specific detail into skills.
- **Subagents do not share your conversation.** Give them the full task in their prompt.
- **MCP servers add tool definitions to every turn.** Connect only the ones you use.
- **Check where each item loads** with `/memory` (CLAUDE.md) and `/skills` (skills).