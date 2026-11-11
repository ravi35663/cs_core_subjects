/*
=>  Working on long Claude Code tasks:
    -   Long tasks are different from quick ones. A big refactor or a new feature can take hours, and 
        the more you have to correct Claude, the longer it takes. 

    -   Two habits help most: 
        -   **plan the work before Claude starts**
        -   **steer it while it runs**.

1)  Plan first (plan mode):
    -   Plan mode makes Claude research the code in read-only mode, then give you a plan. 
    -   It reads the code, works out what needs to change, and shows you the steps before it edits 
        anything.

    -   **Read the plan carefully.**: The more complete the plan, the fewer surprises later.
    -   **Ask for changes to the plan.** Fixing a plan is much cheaper than fixing the code after 
        Claude has run.

    -   *Example:* "Before you change anything, add a step to update the tests, and don't touch the 
        `dist/` folder."

2)  Steer while Claude works:
    1) Compact: shrink the conversation
        -   `/compact` summarizes the chat, keeps the summary, and deletes the old messages. This frees 
            space so Claude can keep going.

        -   The risk is that the summary drops something important. So don't run `/compact` alone. 
            Add instructions after it to say what the summary should keep.

        -   *Example:*
            ```
                /compact Focus on the --version flag implementation
            ```
        -   Debugging is done and you only care about the flag work now, so the summary keeps just that.

    2) Rewind: undo a wrong turn:
        -   If Claude goes the wrong way, you don't need to argue it back on track. Rewind returns you to 
            an earlier checkpoint. Every prompt you send creates one. To open the menu, 
            press **Escape twice** on an empty prompt.

        ->  Check in the image.png

        | Option | What it does |
        |---|---|
        | Restore code and conversation | Rolls back both the files and the chat |
        | Restore conversation | Rolls back only the chat |
        | Restore code | Rolls back only the files |
        | Summarize from here | Summarizes everything after the checkpoint. Useful after a side conversation. |
        | Summarize up to here | Summarizes everything before the checkpoint. Useful for a long setup you want to shrink while keeping the implementation intact. |

3)  Let Claude run on its own:
    1) Goal: keep working until "done"
        -   `/goal` sets a finish line. You describe what "done" looks like, and Claude keeps working 
            across turns until an evaluator confirms it. It won't stop just because it thinks it's finished.

        -   *Example:*
            ```
            /goal all tests in src/billing pass, and the type checker reports zero errors
            ```
        -   To cancel it, run `/goal clear`.
        -   The evaluator only reads the transcript, so write a condition you can check from Claude's output, 
            such as the result of a test run.

    2) Loop: repeat on a schedule
        -   `/loop` runs a prompt again and again between turns, either at a fixed interval or at a pace 
            Claude chooses. It's useful for watching something outside the chat, like a CI run or a deploy, 
            and acting when it changes.

        -   To stop it, press **Escape**.

4) Run parallel work with worktrees:
    -   When several agents work on the same codebase, they can overwrite each other's files. 
    -   A **worktree** gives each session its own separate copy of the file tree, so their changes 
        can't collide. A worktree that a session no longer needs is removed automatically when the 
        session exits.

    -   A `.worktreeinclude` file at the repo root lists git-ignored files to copy into each new 
        worktree. Use it for things like a local env file you need everywhere but don't commit.

    -   *Example `.worktreeinclude`:*
        ```
            .env.local
            config/local.json
        ```
=> Summary:
    1. Plan first, then steer.
    2. Tell `/compact` what to keep.
    3. Use Rewind to fix a wrong turn.
    4. Use `/goal` when you can describe "done" better than the steps.
    5. Use worktrees for parallel work.
*/