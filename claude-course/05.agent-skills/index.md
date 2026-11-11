# Claude Code Skills

## What a skill is

A skill is a folder with a `SKILL.md` file. It teaches Claude Code how to handle a specific task. Write it once, and Claude applies it whenever the task comes up. You do not repeat the instructions.

The `SKILL.md` has two parts:
- **Frontmatter:** a `name` and a `description`.
- **Body:** the instructions, checklist, or format to follow.

Example `SKILL.md`:

```markdown
---
name: pr-review
description: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.
---

# PR review

1. Check that the change matches the PR title.
2. Flag missing tests for new logic.
3. Report findings as: Blocking, Suggestions, OK.
```

## How Claude picks a skill

Claude compares your request with every skill's `description`. If one matches, it loads that skill. The description is the trigger, so write it to say **when** to use the skill.

- Bad: `description: Helps with reviews.`
- Good: `description: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.`

## Where skills live

| Location | Scope | Shared? |
|---|---|---|
| `~/.claude/skills/<name>/SKILL.md` | You, across all projects | No |
| `.claude/skills/<name>/SKILL.md` | One repository | Yes, committed to git |

On Windows, personal skills live in `C:/Users/<your-user>/.claude/skills`.

Put team standards in project skills, such as code review rules or brand guidelines. Put your own habits in personal skills, such as your commit message style.

## Skills vs CLAUDE.md vs slash commands

| | When it loads | Who starts it |
|---|---|---|
| **CLAUDE.md** | Every conversation | Automatic |
| **Skill** | Only when the request matches | Automatic |
| **Slash command** | Only when you type it | You |

- Use **CLAUDE.md** for rules that always apply, such as "use strict mode."
- Use a **skill** for specialized knowledge, such as a PR checklist. Only the name and description load up front, so the full checklist costs no context until it is needed.
- Use a **slash command** when you want to start the task yourself.

## When to use a skill

- Code review standards
- Commit message formats
- Brand or style guidelines
- Documentation templates
- Debugging checklists for a framework

**Rule of thumb:** if you explain the same thing to Claude twice, write a skill.

## Example: a personal commit-message skill

`~/.claude/skills/commit-message/SKILL.md`:

```markdown
---
name: commit-message
description: Writes git commit messages in my format. Use when the user asks for a commit message or to commit changes.
---

# Commit message format

- Subject: `<area>: <what changed>`, lowercase, 50 characters or fewer.
- Body: why the change was made, in short sentences.
- Example: `dsa: add max-heap insert and extract`
```

## Important points

- **The description decides when a skill loads.** Make it specific.
- **Keep `SKILL.md` short.** Move long material into other files in the same folder.
- **Commit project skills** to `.claude/skills/` so the team shares them.
- **Keep personal skills** in `~/.claude/skills/` so they follow you across projects.
- **Check that it loaded.** Run `/skills` in Claude Code to list the skills in a session.
- **Skills are guidance.** For a rule that must never be broken, use a hook.