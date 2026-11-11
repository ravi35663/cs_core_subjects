# Plugins: using and packaging Claude Code setups

## What a plugin is

A plugin is one installable unit that bundles what you would otherwise share by hand:
- Skills, subagents, and commands
- Hooks and MCP server configs
- Optional extras: language server (LSP) configs, background monitors, themes, and a narrow slice of `settings.json`

One version, one install.

## Using plugins

**Install one directly:**

```bash
/plugin install org-name@plugin-name
```

Then run `/reload-plugins` to apply it.

**Add a team marketplace once:**

```bash
/plugin marketplace add your-org/claude-plugins
```

After that, installs resolve through the marketplace, which gives you discovery, versions, and updates in one place. Browse the marketplaces in the **Discover** tab.

## Read before you install

A plugin runs code on your machine with your privileges. Its hooks fire on every matching tool call, even if you never read them.

Before you install, check:
- What hooks it adds, especially `PreToolUse` and `Stop`
- What network calls, if any, its hooks or MCP servers make
- What subagents it promotes, and whether it changes default behavior
- The context cost Claude Code shows

Marketplace review catches some problems but not all. Install only from sources you trust.

## How plugin parts behave

- **Hooks stack.** Plugin hooks and your hooks both run. Neither replaces the other.
- **Names are namespaced.** Skills and commands appear under the plugin name, so they do not clash with yours.
- **Only two `settings.json` keys are honored:** the status line key and the agent key.
- **The agent key changes default behavior.** It promotes a subagent to the main thread with its own prompt, tools, and model.

Manage or remove installed plugins from the plugin panel.

## Packaging your own plugin

Your existing `.claude` layout is already the plugin layout:

```text
svg-splitter-review/
├── .claude-plugin/
│   └── plugin.json        # optional manifest
├── skills/
│   └── verify-change/
│       └── SKILL.md
├── agents/
│   └── code-reviewer.md
├── hooks/
│   └── hooks.json
└── .mcp.json
```

Claude Code finds components by folder convention, so you do not restructure anything.

**Manifest example** (`.claude-plugin/plugin.json`):

```json
{
  "name": "svg-splitter-review",
  "version": "0.1.0",
  "description": "Reviews the SVG Splitter repo",
  "author": {
    "name": "Lewis Menelaws"
  }
}
```

- The manifest is optional, but `name` is required if you use one.
- Skills are namespaced by plugin name, for example `svg-splitter-review:verify-change`.
- Bump `version` on every change so teammates get updates.

## Important points

- **Read before you install.** A plugin's hooks and agents run with your privileges.
- **Install only from trusted marketplaces.**
- **Check the agent key.** It can change default behavior for everyone who enables the plugin.
- **Package once it works.** One manifest, one install, one version to track.
- **Test a plugin locally** before you share it with the team.
- **This repo is not a plugin yet.** Package `.claude/` only when a setup is worth sharing across machines.