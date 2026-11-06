# `.claude/` — Claude Code project configuration

This folder tells Claude Code how to work in this repository. Claude Code reads these files automatically when you start a session in this folder. This README is for people; Claude does not load it.

## Files at a glance

| File | Committed to git? | Loaded | Purpose |
|---|---|---|---|
| `CLAUDE.md` | yes | every session | Project memory: repo layout, commands, conventions, what not to touch. |
| `settings.json` | yes | every session | Team-wide permissions (what Claude may run without asking, and what it must never run). |
| `settings.local.json` | **no** (gitignored) | every session | Your personal permission overrides. Same format as `settings.json`. |
| `skills/dsa-problem/SKILL.md` | yes | when relevant | Instructions for adding a DSA implementation to `02.dsa/`. |
| `skills/course-notes/SKILL.md` | yes | when relevant | Instructions for writing `claude-course/` lesson notes. |
| `agents/code-reviewer.md` | yes | when used | A read-only subagent that reviews changes without editing files. |
| `commands/new-dsa.md` | yes | when you type `/new-dsa` | A custom slash command: `/new-dsa <topic-folder> <file-name>`. |
| `README.md` | yes | never | This guide. |

## Each file in detail

### `CLAUDE.md` — project memory
- Read at the start of every session, so Claude knows the repo without exploring it each time.
- Keep it short. Add a line whenever you correct Claude on the same thing twice.
- You can also keep a personal `~/.claude/CLAUDE.md` for preferences that apply to every project.

### `settings.json` — permissions
- `permissions.allow`: commands Claude may run without asking (here: read-only git, `ls`, `node`).
- `permissions.deny`: commands Claude must never run (here: `rm -rf`, force-push, hard reset, reading `.env` files).
- Rules are matched by prefix, e.g. `Bash(git log:*)` allows any `git log ...`.
- Committed, so everyone who clones the repo gets the same rules.

### `settings.local.json` — personal overrides
- Same format as `settings.json`, but only on your machine. Git ignores it (see the root `.gitignore`).
- Use it for rules you want just for yourself, so you do not change the shared file.

### `skills/*/SKILL.md` — skills
- A skill is a folder with a `SKILL.md`. The frontmatter `description` tells Claude when to use it.
- Only the name and description load up front; the full instructions load when the skill is needed. This saves context.
- `dsa-problem` and `course-notes` are project-specific workflows for this repo.

### `agents/code-reviewer.md` — subagent
- A subagent runs in its own context window and returns only a summary, which keeps the main session clean.
- `tools:` limits what it can use. This one can read and search, and run only read-only commands.
- Ask for it by name, e.g. "use the code-reviewer agent to review my changes".

### `commands/new-dsa.md` — slash command
- A file in `commands/` becomes a slash command named after the file.
- `$ARGUMENTS` is replaced by whatever you type after the command.
- Example: `/new-dsa 14.heap max-heap-demo`.

## Adding to this setup later
- **New recurring mistake?** Add a line to `CLAUDE.md`.
- **Want a check that must always run** (e.g., format after every edit)? Use a *hook* in `settings.json`. Hooks run deterministically; `CLAUDE.md` instructions do not. There is no formatter or test script in this repo yet, so no hooks are set up.
- **Need an external tool** (e.g., a database or Linear)? Add an MCP server with `claude mcp add`. Project-shared MCP servers go in `.mcp.json` at the repo root, not in this folder.

## Testing the setup
1. Open Claude Code in this repo and run `/memory` to check `CLAUDE.md` loaded.
2. Run `/agents` to see `code-reviewer`, and `/skills` to see the two skills.
3. Ask Claude to run `git status`: it should run without a prompt. Ask it to run `rm -rf test` (in a throwaway folder): it should be refused.
