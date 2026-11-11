# Building a Claude Code skill from scratch

## What a skill is

A skill is a folder with a `SKILL.md` file. The file has:
- **Frontmatter** (between `---` lines): `name` and `description`.
- **Body:** the instructions Claude follows when the skill is used.

## Step 1: Create the folder

The folder name must match the skill name.

```bash
mkdir -p ~/.claude/skills/pr-description
```

`~/.claude/skills/` makes the skill personal, so it works in every project.

## Step 2: Write `SKILL.md`

`~/.claude/skills/pr-description/SKILL.md`:

```markdown
---
name: pr-description
description: Writes pull request descriptions. Use when creating a PR, writing a PR, or when the user asks to summarize changes for a pull request.
---

When writing a PR description:

1. Run `git diff main...HEAD` to see all changes on this branch.
2. Write the description in this format:

## What
One sentence on what this PR does.

## Why
Short context on why the change is needed.

## Changes
- Specific changes, grouped by related work
- Any files deleted or renamed
```

- **`name`** identifies the skill.
- **`description`** is the match criteria. Claude uses it to decide when to load the skill.
- **Body** is the instructions.

## Step 3: Test it

1. Restart Claude Code. Skills load at startup.
2. Check that `pr-description` appears in the skills list (`/skills`).
3. Make changes on a branch, then ask: "write a PR description for my changes."
4. Claude asks you to confirm loading the skill, then reads the full `SKILL.md` and follows the template.

## How matching works

- At startup, Claude loads only each skill's **name and description**.
- Each request is compared with those descriptions by meaning, not exact words.
- A match asks you to confirm before the full `SKILL.md` loads into context.

Write descriptions that name the situations and the user's words. A description that only says "PR helper" will rarely match.

## Priority when names clash

Highest to lowest:

1. **Enterprise:** managed settings
2. **Personal:** `~/.claude/skills`
3. **Project:** `.claude/skills` in a repo
4. **Plugins:** installed plugins

An enterprise `code-review` skill overrides your personal one with the same name. Use specific names, such as `frontend-review` or `backend-review`, to avoid clashes.

## Update or remove

- **Update:** edit `SKILL.md`.
- **Remove:** delete the skill's folder.
- Restart Claude Code after any change.

## Example: project skill for this repo

`.claude/skills/dsa-check/SKILL.md`:

```markdown
---
name: dsa-check
description: Runs the DSA files changed on this branch with node and reports which ones fail. Use when the user asks to check, test, or verify DSA changes.
---

1. Run `git diff --name-only main...HEAD` and keep files under `02.dsa/` ending in `.js`.
2. Run each file with `node <file>`.
3. Report each file as OK or FAIL, with the error for any failure.
```

Commit it so the team shares it.

## Important points

- **Name the folder after the skill.**
- **Write the description for matching.** It is the trigger.
- **Restart Claude Code** after creating, editing, or deleting a skill.
- **Use specific names** to avoid priority clashes.
- **Personal** skills follow you. **Project** skills go in git for the team.
- **Keep `SKILL.md` lean.** Advanced options such as `allowed-tools` and multi-file skills come next.