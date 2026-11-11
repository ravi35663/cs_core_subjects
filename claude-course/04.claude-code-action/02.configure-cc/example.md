## Snippet 2: Examples

### A. Lean, specific rules (`.claude/CLAUDE.md`)

```markdown
# Project rules

- Put new DSA implementations in `02.dsa/<topic-folder>/`, one problem per file.
- Use `const` by default. Use `let` only when the value is reassigned.
- Use named exports, not default exports.
- Use 4-space indentation.
- Do not edit anything under `claude-course/`. It is copied course material.

@.claude/conventions/testing.md
```

Bad version to avoid: `Follow best practices and write clean code.` You cannot check it, so Claude cannot follow it reliably.

### B. Hard rule as a hook (`.claude/settings.json`)

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/block-push-main.js"
          }
        ]
      }
    ]
  }
}
```

The hook script, saved as `.claude/hooks/block-push-main.js`:

```javascript
// Reads the tool call from stdin and blocks any "git push" that targets main.
const fs = require('fs');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const command = input.tool_input?.command ?? '';

if (/git\s+push\b.*\bmain\b/.test(command)) {
    console.error('Blocked: pushing to main is not allowed. Push to dev and open a PR.');
    process.exit(2); // exit code 2 blocks the action and shows the message to Claude
}
process.exit(0);
```

### C. The four locations

```text
Managed policy   (org-wide, you cannot exclude it)
  Windows: C:\ProgramData\ClaudeCode\CLAUDE.md

User             (all your projects)
  ~/.claude/CLAUDE.md

Project          (shared, committed to git)
  ./CLAUDE.md  or  ./.claude/CLAUDE.md

Local            (only you, gitignored, this repo only)
  ./CLAUDE.local.md
```

Add `CLAUDE.local.md` to `.gitignore` so it stays personal:

```bash
echo "CLAUDE.local.md" >> .gitignore
```

Example of a local note:

```markdown
# Local notes (not shared)

- I am refactoring the heap in `test.js`. Keep the public method names unchanged.
```

### D. Imports (`CLAUDE.md`)

```markdown
# Project

@.claude/conventions/code-style.md
@.claude/conventions/testing.md
@.claude/conventions/workflow.md
```

Imports keep the file organized. Everything still loads at launch, so keep each imported file short too.

### E. The revision loop

When Claude gets something wrong, do not only fix the output. Tell Claude:

```text
That broke the naming rule. Add a rule to CLAUDE.md that says
functions use descriptive camelCase names such as frequencyCounter,
not single letters, then keep the file short.
```

### F. Check what loaded

Run `/memory` in Claude Code to see which CLAUDE.md files were loaded in the session.