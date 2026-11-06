/*
=>  EXPLORE → PLAN → CODE → COMMIT WORKFLOW
1) EXPLORE:
    -   Use Plan Mode (Shift + Tab).
    -   Claude reads the codebase without modifying files.
    -   Understands existing architecture, dependencies, and implementation.
    -   You can also use the Explore subagent for codebase summaries.

2) PLAN:
    -   Ask Claude to investigate the requirement and create an implementation plan.
    -   Review the plan and ask for revisions if needed.
    -   Correct issues before any code is written.
    -   Define clear success criteria.

   -    Example:
            "Add WebP conversion to the image upload pipeline.
            Identify where conversion should happen, required dependencies, and the recommended 
            implementation approach."

3) CODE:
    -    Approve the plan and let Claude implement it.
    -    Choose Approval or Auto-Accept mode.
    -    Provide clear success criteria.
    -    Provide reliable test suites for continuous validation.
    -    Install additional tools when needed (e.g., Claude in Chrome for browser-based UI testing).
    -    If Claude repeatedly faces the same issue, ask it to save the solution in CLAUDE.md.

4)  COMMIT:
    -   Test the implementation yourself.
    -   Run a code-reviewer subagent for an independent review.
    -   Fix any identified issues.
    -   Ask Claude to generate a commit message matching your style.
    -   Commit and push the changes.

5)  KEY TAKEAWAY:
    -   Explore: Understand the codebase and gather context.
    -   Plan: Decide how to implement and define success criteria.
    -   Code: Implement, test, and troubleshoot.
    -   Commit: Review, finalize, and commit the changes.

   -    Always follow Explore → Plan → Code → Commit instead of jumping directly into coding.
*/

/*
=>  CONTEXT MANAGEMENT IN CLAUDE CODE
1)  Context Window:
    -   Context is Claude's working memory.
    -   Every prompt, file read, command, and tool result consumes context.
    -   Context has a limited capacity, so use it efficiently.

2)  Context Compaction:
    -   When context approaches its limit, Claude automatically compacts it.
    -   Compaction summarizes important information and removes unnecessary details to free up space.
    -   Some details may be lost during compaction.

3) Important Commands:
    -   /compact  : Summarizes the conversation and frees context space.
    -   /clear    : Clears the current conversation and starts a fresh session.
    -   /context  : Shows context usage and its breakdown.

4) When to Use Which:
    -   /compact: Continue working on the same feature while freeing context.
    -   /clear: Start a completely new feature without previous conversation context.
    -   CLAUDE.md: Store project instructions, architecture, commands, and important information that 
        Claude should remember across sessions.

5) Tips to Save Context:
    -   Be specific: Clear prompts reduce unnecessary codebase exploration.
    -   Manage MCP servers: Disable unrelated servers to reduce context usage.
    -   Use Skills: Load relevant capabilities when needed instead of loading all MCP tools upfront.
    -   Use Subagents: Delegate independent tasks (e.g., finding auth endpoints). They have separate context windows and return summarized results.
    -   Use /context regularly to monitor context consumption.

6. KEY TAKEAWAY:
   -    Use /compact to continue existing work.
   -    Use /clear for a fresh task.
   -    Use CLAUDE.md for persistent project knowledge.
   -    Write specific prompts, manage MCP servers, and delegate tasks to subagents to keep context 
        efficient.
*/
/*
=>  CODE REVIEW IN CLAUDE CODE:
1) Review with a Subagent:
    -    Ask Claude to use a code-reviewer subagent before pushing a PR.
    -    Subagents have separate context windows and provide an independent review.
    -    Give the reviewer read-only permissions so it can identify issues without modifying files.
    -    Keep the subagent configuration in your repository so the entire team can use the same reviewer.

2) commit-push-pr Skill:
    -   Automates the complete workflow:
        Commit → Push → Create PR.
   -    If Slack MCP is configured and channels are listed in CLAUDE.md, Claude can automatically share 
        the PR link in the team channel.

3)  Resume a PR Session:
   -    When Claude creates a PR using `gh pr create`, the session is automatically linked to that PR.
   -    Resume the previous session using:
        `claude --from-pr <PR_NUMBER>`
   -    Useful for addressing review comments and fixing build failures.

4) KEY TAKEAWAY:
   -    Subagent: Perform independent, read-only code reviews.
   -    /commit-push-pr: Automate commit, push, and PR creation.
   -    --from-pr: Resume an existing PR session.
*/