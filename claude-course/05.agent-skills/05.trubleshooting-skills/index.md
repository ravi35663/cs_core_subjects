# Troubleshooting skills

## Start here: run the validator

Run the skills validator first. It catches structural problems before you debug anything else. Use `uv` for the quickest install. Check the course or the tool's docs for the exact command for your OS.

## Problem 1: The skill does not trigger

**Cause:** almost always the description. Claude matches by meaning, so your request must overlap with the description.

Bad:

```yaml
description: Profiling helper.
```

Good:

```yaml
description: Profiles slow code and suggests speedups. Use when the user asks to profile this, asks why something is slow, or asks to make code faster.
```

**Test it:** try variations such as "help me profile this", "why is this slow?", and "make this faster". If one fails, add its words to the description.

## Problem 2: The skill does not load

Check the structure:

```text
Correct:  .claude/skills/pr-description/SKILL.md
Wrong:    .claude/skills/SKILL.md
Wrong:    .claude/skills/pr-description/skill.md
```

- `SKILL.md` must be inside a named folder, not at the skills root.
- The file name must be exactly `SKILL.md`: capital "SKILL", lowercase "md".
- Check the YAML frontmatter between the `---` lines.

Run `claude --debug` and look for messages that mention your skill name.

## Problem 3: The wrong skill is used

**Cause:** two descriptions are too similar.

Make each description name a different task:
- `frontend-review`: "Reviews UI components for accessibility."
- `backend-review`: "Reviews API handlers for security issues."

## Problem 4: A priority conflict hides your skill

If an enterprise, project, or plugin skill has the same name, it wins over your personal skill.

Order, highest first: enterprise, personal, project, plugin.

**Fix:** rename your skill (usually easiest), or ask your admin.

## Problem 5: A plugin's skills are missing

1. Clear the plugin cache.
2. Restart Claude Code.
3. Reinstall the plugin.

If the skills still do not appear, the plugin structure is probably wrong. Run the validator.

## Problem 6: The skill loads but fails when it runs

| Cause | Fix |
|---|---|
| Missing dependency | Install it. Name it in the skill description. |
| Script not executable | Run `chmod +x scripts/<file>` |
| Wrong path separator | Use forward slashes everywhere, even on Windows |

Example: `scripts/check.js`, not `scripts\check.js`.

## Quick checklist

| Symptom | Check |
|---|---|
| Not triggering | Description and trigger words |
| Not loading | Folder name, file name `SKILL.md`, YAML |
| Wrong skill used | Make descriptions more distinct |
| Being overridden | Priority order; rename the skill |
| Plugin skills missing | Clear cache, restart, reinstall |
| Runtime failure | Dependencies, permissions, paths |

## Important points

- **Run the validator first.**
- **The description causes most trigger problems.**
- **Use `claude --debug`** to see load errors.
- **Restart Claude Code** after changes.
- **Rename instead of fighting a priority conflict.**
- **Use forward slashes** in every path.
- **Keep one task per skill** so the descriptions stay distinct.