# Permission modes

Permission modes decide what Claude can run without asking you. Press **shift-tab** to cycle through them. The status bar shows the current mode.

| Mode | What runs without asking | Use it for |
|---|---|---|
| **Manual** | Reads only. Everything else asks. | Careful, hands-on work |
| **Accept edits** | Reads, file edits, and common file system commands. | Iterating on code you review afterwards |
| **Plan** | Reads only. Proposes changes, edits nothing. | Research and planning |
| **Auto** | Everything, with a classifier reviewing each action first. | Hands-off work |
| **Don't ask** | Only pre-approved tools. Everything else is auto-denied. | Unattended CI, scheduled, or overnight runs |
| **Bypass permissions** | Everything, no checks. Same as `--dangerously-skip-permissions`. | Only inside an isolated container or VM |

**Auto mode:** A separate classifier model checks each action's intent before it runs. It blocks production deploys and migrations, force pushes, piping downloaded code into a shell, sending sensitive data externally, and destroying session files. It allows local edits, installing from your lock file, read-only requests, and pushing to your own branch.

**The classifier checks intent, not correctness.** Broken code that is not dangerous passes. Pair auto mode with a **Stop hook** that runs your tests:
- Auto mode guards each action while Claude runs.
- The Stop hook checks the result when Claude finishes.

**Don't ask** is for pipelines with no one to approve prompts. Anything not on the allow list is denied, so the pipeline keeps moving.

**Example `.claude/settings.json`:**

```json
{
  "permissions": {
    "defaultMode": "acceptEdits",
    "allow": ["Bash(git status:*)", "Bash(git log:*)", "Bash(node:*)"],
    "deny": ["Bash(rm -rf:*)", "Bash(git push --force:*)"]
  },
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

- `defaultMode` sets the starting mode for this project. Shift-tab still changes it during a session.
- `allow` runs without asking. `deny` is always blocked.
- The Stop hook runs `scripts/check.js` each time Claude finishes, so a failing check shows up immediately.

**Key points:**
- Match the mode to the job. Start careful, then loosen as trust grows.
- Use **bypass** only in an isolated container or VM.
- Auto mode's block and allow lists change over time. Check the docs for the current lists.