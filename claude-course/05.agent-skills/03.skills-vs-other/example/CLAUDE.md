# Project rules (CLAUDE.md example)

Purpose: always-on rules. Claude reads this file in every conversation.

## Layout
- `02.dsa/` holds DSA implementations, one topic per numbered folder.
- `claude-course/` is copied course material. Do not edit it.

## Conventions
- Use 4-space indentation.
- Use `const` by default. Use `let` only when a value is reassigned.
- Use named exports, not default exports.
- Put new DSA files in `02.dsa/<topic-folder>/`, one problem per file.

## Constraints
- Do not rename or renumber topic folders.
- Do not commit or push unless the user asks.
