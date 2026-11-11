## Snippet 1: Short explanation

**Why verification first:** Checking Claude's work usually depends on you remembering to ask for it. A verification skill removes that dependency. When a change finishes, the skill's description matches the task, so the skill runs on its own. It runs the tests, reads the diff, checks that no test was weakened to make things pass, and reports pass or fail with evidence.

**Done means the gates were run and observed.** Reading the diff and thinking "looks right" is not enough. The results must be stated explicitly.

**Any repeated procedure can be a skill.** A release checklist, a migration recipe, or a pre-PR check all qualify. Rule of thumb: if you have typed the same multi-step instruction twice, make it a skill.

**A skill folder can hold more than instructions:**
- `reference.md` holds detailed material. `skill.md` links to it, and Claude reads it only when it needs the depth.
- Scripts such as `check.js` are executed, not loaded into context. A skill can carry its own tooling.
- Keep `skill.md` lean. The side files hold the depth and the tools.

**Which place owns which rule:**
- Conventions that always apply (naming, file locations) go in `CLAUDE.md`.
- Procedures tied to a task type go in a skill.
- A rule Claude must not be able to skip goes in a hook. `CLAUDE.md` and skills are instructions Claude follows. A hook is code that runs.

**Recap:** A skill is a folder with a `SKILL.md` that has a name, a trigger description, and a procedure. Only the descriptions load up front, so packaging many procedures costs little. Build the verification skill first, check it into `.claude/skills/`, and the whole team gets the same checks automatically.