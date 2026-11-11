### A. Layout

```text
.claude/skills/verify-change/
├── SKILL.md
├── reference.md
└── scripts/check.js
```

### B. Trigger description

Bad: `description: Helps with code.`

Good:

```yaml
description: Verify a finished code change before reporting it done. Use after any refactor, bug fix, or new implementation. Runs the checks, reads the diff for weakened tests, and reports pass or fail with evidence.
```

### C. `SKILL.md`

```markdown
---
name: verify-change
description: Verify a finished code change before reporting it done. Use after any refactor, bug fix, or new implementation. Runs the checks, reads the diff for weakened tests, and reports pass or fail with evidence.
---

# Verify a change

Do not say "done" until every step has run.

1. Run `node scripts/check.js`.
2. Run `git diff`. Look for edited tests, changes outside the task's files, and edits under `claude-course/`.
3. Check the style rules in `reference.md`.
4. Report:
   - Run results:
   - Diff concerns (or "none"):
   - Verdict: PASS or FAIL, with reason
```

### D. `scripts/check.js`

```javascript
// Runs each changed DSA .js file with node and reports the exit code.
const { execSync, spawnSync } = require('child_process');

const files = execSync('git diff --name-only HEAD', { encoding: 'utf8' })
    .split('\n')
    .filter(file => file.startsWith('02.dsa/') && file.endsWith('.js'));

let failed = false;
for (const file of files) {
    const result = spawnSync('node', [file], { encoding: 'utf8' });
    console.log(`${result.status === 0 ? 'OK  ' : 'FAIL'} ${file} (exit ${result.status})`);
    if (result.status !== 0) failed = true;
}
process.exit(failed ? 1 : 0);
```

### E. Use it

```text
Refactor the max-heap in 02.dsa/14.heap/ to use let where needed, then make sure it still runs.
```

The skill should run on its own when Claude finishes.

### F. Check it loaded

Run `/skills` in Claude Code.