---
name: dsa-problem
description: Add a new data-structure or algorithm implementation to 02.dsa in the repo's existing style (header comment, implementation, runnable examples). Use when the user asks to add, write, or document a DSA topic, problem, or data structure.
---

# Adding a DSA implementation

## Where it goes
- Topic folders live under `02.dsa/` and are numbered (`1.basic`, `11.trees`, `14.heap`). Put the file in the matching topic folder.
- If the topic is new, create the next free number after the highest existing one, and tell the user.
- Prefer a descriptive kebab-case or snake_case file name, matching neighbours (e.g., `frequency_count.js`, `min-binary-heap`).

## File structure
1. **Header block comment** that explains the idea in plain English:
   ```js
   /*
   => Name of the technique / structure :  -
       -   What it is and when to use it.
       -   Time and space complexity.
   */
   ```
2. **Implementation** with descriptive names. 4-space indentation, `const` by default.
3. **Example calls** at the bottom, so `node <file>.js` prints something useful.
4. Keep it self-contained: no imports from other repo files, no dependencies.

## Checklist before finishing
- [ ] File is in the correct numbered topic folder.
- [ ] Header comment states complexity.
- [ ] Run it: `node 02.dsa/<topic>/<file>.js`, and confirm the output is correct.
- [ ] Edge cases handled (empty input, single element, duplicates) where relevant.
- [ ] Nothing else in the repo was modified unless the user asked.

## Report back
Give the file path, the complexity, and the output of the run.
