# Hooks

## Why hooks

A CLAUDE.md rule is a request. Claude usually follows it, but on a long unattended run "usually" is not enough. A **hook** is deterministic code that runs at a fixed point in Claude's loop. It turns "Claude usually listens" into "Claude cannot skip it."

## Benefits

- **Guaranteed:** the check runs every time, not when Claude remembers.
- **Blocking:** a hook can stop an action before it happens.
- **Auditable:** a hook can log every tool call or every file change.
- **Automatic:** formatting, tests, and notifications happen without a prompt.
- **Cheap on context:** the hook's code does the work, so the model does not have to read the rule each time.

## Where hooks live

Hooks go under the `"hooks"` key in a settings file:

| File | Scope | Committed? |
|---|---|---|
| `~/.claude/settings.json` | All your projects | No |
| `.claude/settings.json` | This repo, shared with the team | Yes |
| `.claude/settings.local.json` | This repo, only you | No (gitignored) |

Hook scripts usually sit in `.claude/hooks/`.

## Key events

| Event | When it fires | Use it for |
|---|---|---|
| `PreToolUse` | Before a tool runs | Blocking or rewriting a call |
| `PostToolUse` | After a tool runs | Formatting, linting, logging |
| `Stop` | When Claude wants to finish | "Tests must pass before you're done" |
| `SessionStart` | When a session starts | Restoring context (matcher `compact` runs after compaction) |
| `InstructionsLoaded` | When a CLAUDE.md or rule file loads | Auditing what is in context |

## Exit codes

- **0:** success. Plain text is ignored, except on `SessionStart` and `UserPromptSubmit`, where it is added to context.
- **2:** blocking error. Stderr goes back to Claude. This is the code that blocks.
- **Any other code (including 1):** non-blocking. Claude continues anyway. Use 2 to stop something.

`PostToolUse` runs after the tool has already run, so it cannot prevent the call. It can only feed text back to Claude.

## Example 1: Block pushes to `main` (PreToolUse)

`.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/block-push-main.js" }
        ]
      }
    ]
  }
}
```

`.claude/hooks/block-push-main.js`:

```javascript
// Blocks any command that pushes to main.
const fs = require('fs');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const command = input.tool_input?.command ?? '';

if (/git\s+push\b.*\bmain\b/.test(command)) {
    console.error('Blocked: push to dev and open a PR instead.');
    process.exit(2);
}
process.exit(0);
```

## Example 2: Redact a secret instead of blocking (PreToolUse + updatedInput)

`.claude/hooks/redact-secret.js`:

```javascript
// Replaces a live-looking Stripe key in a Bash command with a placeholder, then lets it run.
const fs = require('fs');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const toolInput = input.tool_input;
const command = toolInput.command ?? '';
const redacted = command.replace(/sk_live_[A-Za-z0-9]+/g, 'sk_live_REDACTED');

if (redacted !== command) {
    // updatedInput replaces the whole input, so copy every field, then change the command.
    console.log(JSON.stringify({
        hookSpecificOutput: {
            hookEventName: 'PreToolUse',
            permissionDecision: 'allow',
            updatedInput: { ...toolInput, command: redacted }
        }
    }));
}
process.exit(0);
```

Register it with the same `PreToolUse` / `matcher: "Bash"` pattern as Example 1.

## Example 3: Run tests before Claude finishes (Stop)

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "node scripts/check.js" }
        ]
      }
    ]
  }
}
```

If `check.js` exits 2 when a check fails, Claude is told it is not done yet.

## Example 4: Restore context after compaction (SessionStart, matcher `compact`)

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "compact",
        "hooks": [
          { "type": "command", "command": "echo 'Reminder: DSA files go in 02.dsa/<topic>/, one problem per file.'" }
        ]
      }
    ]
  }
}
```

Plain text on stdout is added back into context, so the rule survives compaction.

## Other real-life uses

- **Auto-format after edits:** `PostToolUse` with matcher `Edit|Write` runs a formatter. (This repo has no formatter yet.)
- **Audit log:** `PostToolUse` appends each tool call to a log file.
- **Notify on finish:** `Stop` triggers a desktop notification when a long run ends.

## Important points

- Hooks are code, so they run with your permissions. Review them before you commit them.
- Test each hook with a sample JSON input before relying on it.
- `updatedInput` replaces the whole input object. Copy every field you are not changing.
- Use `PreToolUse` to stop things. Use `PostToolUse` to react to them.
- Use exit 2 to block. Exit 1 does not block.
- Keep hooks fast. They run on every matching event.
- This repo has no hooks yet. Add them to `.claude/settings.json` when you need them.