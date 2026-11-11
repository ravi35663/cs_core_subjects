# Advanced skill techniques

## Metadata fields

| Field | Required | Purpose |
|---|---|---|
| `name` | Yes | Lowercase letters, numbers, hyphens. Max 64 characters. Match the folder name. |
| `description` | Yes | Tells Claude when to use the skill. Max 1,024 characters. Used for matching. |
| `allowed-tools` | No | Limits which tools Claude can use while the skill is active. |
| `model` | No | Sets the Claude model used for the skill. |

Example:

```markdown
---
name: codebase-onboarding
description: Explains how this codebase works for new developers. Use when someone asks how the system works, where code lives, or how to get started.
allowed-tools: Read, Grep, Glob, Bash
model: sonnet
---
```

Without `allowed-tools`, the skill adds no restriction. Claude uses the normal permission rules.

## Writing a good description

A description must answer two questions:
1. **What** does the skill do?
2. **When** should Claude use it?

If the skill does not trigger, add the words you actually use when you ask. Claude matches on the description only.

- Bad: `description: Helps with docs.`
- Good: `description: Writes README and API docs for this repo. Use when asked to document a file, write a README, or describe an API.`

## Restricting tools

Use `allowed-tools` for read-only or security-sensitive work. With `Read, Grep, Glob, Bash`, Claude can read and search, but it cannot edit or write files while the skill is active.

## Progressive disclosure

Skills share the context window with your conversation. Keep `SKILL.md` short and move detail into supporting files that Claude reads only when needed.

```text
architecture-skill/
├── SKILL.md          # core instructions, under 500 lines
├── references/
│   └── architecture-guide.md
├── scripts/
│   └── validate-env.js
└── assets/
    └── diagram.png
```

- `scripts/`: executable code
- `references/`: extra documentation
- `assets/`: images, templates, data

Link each file with a clear trigger in `SKILL.md`:

```markdown
If the user asks how the system is designed, read `references/architecture-guide.md`.
Do not load it for other questions.
```

If `SKILL.md` grows past 500 lines, split the content into reference files.

## Scripts

A script in the skill folder runs without its code entering context. Only its output uses tokens. Tell Claude to **run** the script, not read it:

```markdown
To check the environment, run `node scripts/validate-env.js` and report any failure.
```

Use scripts for checks that must be consistent, such as environment validation or data transforms, because tested code is more reliable than generated code.

## Important points

- **`name` and `description` are required.** The description decides when the skill loads.
- **Restrict tools** with `allowed-tools` for read-only or sensitive work.
- **Keep `SKILL.md` under 500 lines** and move detail into `references/`.
- **Tell Claude when to read each file**, so it loads only what it needs.
- **Run scripts; do not read them,** to save context.
- **Restart Claude Code** after changing a skill.
- **Skills are guidance.** For a rule that must never be broken, use a hook.