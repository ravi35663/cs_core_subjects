**The problem:** CLAUDE.md grows as you add a rule for each problem you hit. Eventually Claude ignores parts of it. This is how the file works, not a bug. CLAUDE.md is guidance, not enforced configuration. Every line competes for Claude's attention, so the longer the file, the less reliably any one rule is followed. The goal is a tight file, not a complete one.

**1. Ask whether CLAUDE.md is the right tool.**
Soft conventions belong in CLAUDE.md. Hard lines that must never be crossed belong in a pre-tool-use hook. A hook is code that runs before Claude acts and can block the action. For example, "never push to main" should be a hook, because "most of the time" is not enough for something dangerous.

**2. Know the four locations.**
Claude loads all four together at launch, and they stack:
- **Managed policy:** the org-level file the platform team controls. You cannot exclude it.
- **User:** your personal preferences, used in every project on your machine.
- **Project:** shared with the team and checked into the repo.
- **Local:** ignored by git, only for you, in one repository. Good for personal notes such as architectural decisions while you work on your own branch.

**3. Split long files with imports.**
Use `@path/to/file.md` to break a long file into parts. Imports are expanded inline at launch, so they make the file easier to organize but do not reduce the context Claude loads.

**4. Make rules stick through phrasing.**
- Be specific and checkable. "Put new API routes in `src/api/handlers`, one per file" beats "follow best practices."
- Name the replacement. "Use named exports, not default exports" beats "don't use default exports."
- Treat emphasis like a budget. Words like "IMPORTANT" and "YOU MUST" only work when few things use them. Save them for the two or three rules that hurt most when broken.

**5. Keep the file under revision.**
Treat a wrong action as a bug report against CLAUDE.md. Ask Claude to add the rule, and delete any line you cannot justify.

**Bottom line:** move hard rules to hooks, organize with imports, make rules specific and checkable, spend emphasis sparingly, and keep revising. The leaner the file, the more of it Claude follows.