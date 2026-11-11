---
name: dsa-check
description: Runs the DSA files changed on this branch with node and reports which ones fail. Use when the user asks to check, test, or verify DSA changes.
---

# DSA check (skill example)

Purpose: task-specific procedure. It loads only when the request matches the description.

1. Run `git diff --name-only main...HEAD` and keep files under `02.dsa/` that end in `.js`.
2. Run each file with `node <file>`.
3. Report each file as OK or FAIL, with the error for any failure.
