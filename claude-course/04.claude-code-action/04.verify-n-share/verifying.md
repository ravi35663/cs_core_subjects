# Verifying unattended Claude Code work

## Principle

**Verify in proportion to how much you did not watch.**

| Run type | Verification |
|---|---|
| Short session you watched | A quick glance |
| Unattended run or CI job | Full check: diff, gates, cold review |

## Why auto mode still needs checking

Auto mode's classifier blocks dangerous actions. It does **not** judge whether the code is correct. Keep unattended runs in auto mode, not bypass, and keep the same verification bar.

## Steps

1. **Read the diff first, not the summary.** A tidy summary can hide an unexpected file change.
   ```bash
   git status
   git diff --stat
   git diff
   ```
   Check the planned files first, then look for anything outside the plan.
2. **Run `/code-review`** for a first pass.
3. **Turn the checks into hooks** so they run every time, whether or not you remember to ask.
4. **Get a cold second opinion.** Start a fresh session or sub-agent with no memory of how the code was built. Use the `code-reviewer` agent in this repo.
5. **For headless runs,** check the JSON result and the exit code, not the prose.

## Example 1: Stop hook (gate the turn on tests)

`.claude/settings.json`:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/gate-tests.js" }
        ]
      }
    ]
  }
}
```

`.claude/hooks/gate-tests.js`:

```javascript
// Runs the check script. If it fails, exit 2 sends the failure back to Claude so it keeps working.
const { spawnSync } = require('child_process');

const result = spawnSync('node', ['scripts/check.js'], { encoding: 'utf8' });

if (result.status !== 0) {
    console.error('Checks failed. Fix these before finishing:\n' + result.stdout);
    process.exit(2);
}
process.exit(0);
```

## Example 2: PostToolUse hook (check after every edit)

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/syntax-check.js" }
        ]
      }
    ]
  }
}
```

`.claude/hooks/syntax-check.js`:

```javascript
// Checks syntax of the edited .js file. Exit 2 feeds the error back to Claude.
const fs = require('fs');
const { spawnSync } = require('child_process');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const file = input.tool_input?.file_path ?? '';

if (file.endsWith('.js')) {
    const result = spawnSync('node', ['--check', file], { encoding: 'utf8' });
    if (result.status !== 0) {
        console.error(result.stderr);
        process.exit(2);
    }
}
process.exit(0);
```

## Example 3: Verify a headless run

```bash
claude -p "Update the heap tests" --output-format json > result.json
echo "exit: $?"
jq -r '.is_error, .result' result.json
git diff --stat
```

Check that the exit code is 0, `is_error` is false, and the diff matches what you asked for.

## Example 4: Cold review prompt

```text
Use the code-reviewer agent. Review the changes in git diff HEAD~1.
Check correctness, complexity, and any file outside 02.dsa/14.heap/.
Report blocking issues first.
```

## Important points

- **A summary is not proof.** Read the diff.
- **Gates must be hooks.** Hooks run every time. Instructions can be skipped.
- **Exit 2 blocks and feeds the error back.** Exit 1 does not block.
- **Use a fresh reviewer** for anything important. It has no stake in the original approach.
- **Check what changed outside the plan.** That is where surprises hide.
- **Hook scripts run with your permissions.** Review them before committing.
- **Test each hook** with sample input before relying on it.