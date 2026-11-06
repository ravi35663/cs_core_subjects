# Project: data-structure-javascript

A personal learning repository. Code is mostly standalone JavaScript snippets and notes, organised by topic, not a single application.

## Layout
- `00.languages/` — JavaScript fundamentals (one numbered folder per concept).
- `02.dsa/` — Data structures and algorithms, numbered by topic (`1.basic`, `11.trees`, `14.heap`, ...). Each topic folder holds sub-folders or `.js` files with a header comment and an implementation.
- `claude-course/` — Notes from AI and Claude courses (`01.ai-fluency`, `02.claude-101`, `03.claude-code-101`). Lessons are block comments inside `index.js`.
- `01.backend/`, `03.frontend/`, `04.system-design/`, `05.dbms/`, `05.cloud-service/`, `06.tools/`, `level-up/` — other topics; `level-up/` holds full sample projects.
- `_roadmap/`, `revision.js`, `test.js` — planning and scratch files.

## Commands
- There is no root `package.json`, test runner, linter, or build step.
- Run a single file with `node <path/to/file.js>`.
- Some sub-projects (e.g., under `level-up/`) have their own `package.json`; run commands from inside that project folder.

## Conventions
- Keep each file self-contained and runnable with `node`.
- Start topic files with a `/* ... */` block comment explaining the concept, then the implementation, then example calls.
- Match the existing style: 4-space indentation, `const` by default, descriptive function names (e.g., `frequencyCounter`).
- Do not rename or renumber existing topic folders; the numbering is part of the learning path.
- Write notes and comments in plain English. No emojis in code files.

## Do not touch without asking
- `claude-course/**` — course material copied from external sources.
- `**/dist/**`, `**/generated/**` — build output and generated Prisma code.
- `.DS_Store`, `.vscode/settings.json` (only the `cSpell.words` list is maintained by hand).

## Git
- Main branch is `main`; day-to-day work is on `dev`.
- Do not commit or push unless asked.

## Skills and agents in this repo
- Use the `dsa-problem` skill when adding a new DSA implementation.
- Use the `course-notes` skill when writing course lessons in block-comment form.
- Use the `code-reviewer` subagent for read-only reviews of changes.
