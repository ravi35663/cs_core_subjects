# Sharing skills: repository, plugin, and enterprise

## Why share

A skill used by one person helps one person. Shared, it makes the whole team review, write, and check work the same way.

## The three methods

| | **Repository** | **Plugin** | **Enterprise (managed settings)** |
|---|---|---|---|
| **Where it lives** | `.claude/skills/` in the repo | `skills/` folder in a plugin project | Managed settings set by an admin |
| **Who gets it** | Anyone who clones the repo | Anyone who installs from a marketplace | Everyone in the organization |
| **How updates arrive** | Pull from Git | Update the plugin version | Admin pushes the change |
| **Priority** | Project (3rd) | Plugins (4th, lowest) | Enterprise (1st, highest) |
| **Best for** | Team standards, project workflows | Skills useful beyond your team | Mandatory standards, security, compliance |

## Example 1: Repository skill

```text
my-repo/
└── .claude/
    └── skills/
        └── pr-review/
            └── SKILL.md
```

Commit it. Teammates get it on their next pull.

## Example 2: Plugin skill

```text
my-plugin/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── accessibility-audit/
        └── SKILL.md
```

Publish the plugin to a marketplace. Other users install it themselves.

## Example 3: Managed settings (enterprise)

```json
{
  "strictKnownMarketplaces": [
    { "source": "github", "repo": "acme-corp/approved-plugins" },
    { "source": "npm", "package": "@acme-corp/compliance-plugins" }
  ]
}
```

`strictKnownMarketplaces` limits plugins to the sources the admin approves.

## Subagents and skills

- A subagent starts with a **fresh context**. It does not see your skills automatically.
- **Built-in agents** (Explorer, Plan, Verify) cannot use skills.
- **Custom subagents** in `.claude/agents/` can use skills, but only the ones you list.
- Skills load **when the subagent starts**, not on demand.

## Example 4: Custom subagent with skills

Create the skills first in `.claude/skills/`. Then add `.claude/agents/frontend-reviewer.md`:

```markdown
---
name: frontend-reviewer
description: Reviews frontend code for accessibility and performance. Use after changing UI files.
tools: Bash, Glob, Grep, Read
model: sonnet
skills: accessibility-audit, performance-check
---

Review the changed UI files. Apply the loaded skills to every finding.
Report issues as Blocking, Suggestions, or OK.
```

You can also run `/agents` in Claude Code to create one interactively. Then add the `skills` line yourself if it is missing.

## Which method to choose

- **One team, one repo:** commit to `.claude/skills/`.
- **Useful to other teams or the community:** publish a plugin.
- **Must apply everywhere:** use managed settings.
- **Delegated work needs specific expertise:** create a custom subagent and list its skills.

## Important points

- **Subagents do not inherit skills.** List them in the `skills` field.
- **Built-in agents cannot use skills.** Use a custom agent instead.
- **Create the skill before listing it.** A missing name will not load.
- **Enterprise skills override the same name** in personal, project, and plugin locations.
- **Restrict plugin sources** with `strictKnownMarketplaces` for compliance.
- **Commit `.claude/` to Git** so the team shares it.
- **Check that skills loaded** by running the subagent on a small task first.