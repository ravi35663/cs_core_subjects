# Claude Code Quick Reference

## 1. /loop: repeat a prompt

**Syntax:** `/loop [interval] <prompt>`
- With an interval: `/loop 5m <prompt>` (runs every 5 minutes)
- Without one: `/loop <prompt>` (Claude picks the timing)
- Stop: press **Escape**

**Examples:**
```
/loop 1m check git status and tell me if any files changed
/loop 2m run node 02.dsa/1.basic/1.approaches/frequency_count.js and tell me if the output changed
/loop check whether revision.js has a TODO comment, and stop once you find one
```

## 2. Worktrees: separate copies for parallel work

**Syntax (terminal):** `claude -w <name>`
- Each worktree is its own copy of the files, so sessions can't overwrite each other.
- A session's worktree is removed automatically when it exits without changes.
- Put git-ignored files you need in each copy in `.worktreeinclude` at the repo root.

**Examples:**
```
claude -w login-fix        # work on a login fix in its own copy
claude -w docs-update      # update docs at the same time, separately
claude -w refactor-utils   # refactor utilities without touching other work
```

`.worktreeinclude` example:
```
.env.local
config/local.json
```

## 3. /goal: keep working until "done"

**Syntax:** `/goal <condition you can check from the output>`
- Cancel: `/goal clear`

**Examples:**
```
/goal all tests in src/billing pass, and the type checker reports zero errors
/goal npm run lint reports zero errors
/goal the file revision.js prints "done" when run with node
```

## 4. Rewind: go back to a checkpoint

**Open the menu:** press **Escape twice** on an empty prompt. Every prompt you send creates a checkpoint.

**Options:**
- Restore code and conversation: roll back files and chat
- Restore conversation: roll back only the chat
- Restore code: roll back only the files
- Summarize from here: shrink everything after the checkpoint
- Summarize up to here: shrink everything before the checkpoint

**Examples:**
```
Wrong approach from 10 minutes ago?   → Escape twice, pick "Restore code and conversation"
Side question got long?               → Escape twice, pick "Summarize from here"
Long setup done, want to keep code?   → Escape twice, pick "Summarize up to here"
```

## 5. /compact: shrink the chat

**Syntax:** `/compact <what the summary should keep>`

**Examples:**
```
/compact Focus on the --version flag implementation
/compact Keep the list of failing tests and the fixes we tried
/compact Keep the API changes and drop the debugging steps
```

## 6. Other useful actions

**Plan mode (plan first, edit later):**
- Press **Shift+Tab** to switch modes until Plan mode is on.
- Example: `Plan how to rename the helper functions in 02.dsa. Don't edit anything yet.`

**Other commands:**
```
/clear                      # start a fresh chat (files stay the same)
/init                       # create a CLAUDE.md for the project
/memory                     # view the instruction files Claude loaded
/agents                     # list subagents (e.g., code-reviewer)
/help                       # list all commands
```

**Mention a file in your prompt:**
```
Explain what @02.dsa/14.heap/index.js does
```

**Stop anything running:** press **Escape**

> Commands can change between versions. If one doesn't work, run `/help`.