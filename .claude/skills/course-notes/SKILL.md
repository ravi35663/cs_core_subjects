---
name: course-notes
description: Write lesson notes for claude-course/ in the repo's block-comment style (topic sections, bullet points, KEY TAKEAWAY). Use when the user asks to write, summarise, or format course notes or a lesson index.js.
---

# Writing course notes

## Where it goes
- Each lesson is a folder under `claude-course/<course>/<NN.lesson-name>/` with an `index.js`.
- The `index.js` file is a set of block comments, not running code. Keep it runnable with `node` (no syntax errors) even though it only holds comments.

## Format
1. Start with a `/* ... */` block with numbered sections:
   ```
   /*
   1) What is X?
       -   Short definition.
       -   Why it matters.

   2) Key idea:
       -   Bullet points, one idea per line.

   KEY TAKEAWAY:
       -   Three to five bullets that summarise the lesson.
   */
   ```
2. Use an example block (code or a sample prompt) where it helps. Put examples in a separate `/* ... */` block, not mixed into the notes.
3. Use plain ASCII arrows (`->`, `↓`) only when they already appear in the lesson.
4. Keep bullets short. Prefer the course's own wording for terms like "CLAUDE.md", "subagent", "hook".

## Rules
- Do not edit `claude-course/**` source material unless the user asks. Notes are new files or explicit edits.
- Do not invent facts about Claude Code features. If unsure, say so in the note or check the docs first.

## Report back
Give the path of the file written and a one-line summary of its sections.
