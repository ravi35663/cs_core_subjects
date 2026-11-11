# Claude on pull requests

## Why the PR

The PR is where review happens, changes land, and much of the repetitive work lives. Two options fit here, and they solve different problems.

| Option | What it is | Use it for |
|---|---|---|
| **Code Review** | Anthropic-hosted service via the Claude GitHub app | Automatic PR review, nothing to build |
| **GitHub Action** | `anthropics/claude-code-action@v1` in your workflow | Custom CI: implementing changes, scheduled jobs |

Start with Code Review. Move to the Action when Claude needs to *do* something in CI, not just comment.

## Code Review (managed)

**Setup:** An org admin enables it in Claude Code admin settings under **Code review → Configure**. The admin installs the Claude GitHub app, picks repos, and chooses when it runs:
- When a PR opens
- On every push
- Only when someone comments `@claude review`

**What it does:**
- Reviews the diff against your full codebase, not just the changed lines.
- Posts inline comments on the exact lines, tagged by severity, with a summary table in the check run.
- Deduplicates and ranks findings, so you read a short list of real issues.

**Limits:**
- Never approves or blocks a PR. A human decides.
- No managed autofix. It posts findings only.
- Research preview, on team and enterprise plans.

**Applying a finding:** Pull the branch and run `/code-review`. Add `--fix` to apply the findings to your working tree.

## GitHub Action (DIY)

**Setup:** Run `/install-github-app` in Claude Code. You need repo admin. It installs the GitHub app and sets the Anthropic API key secret.

**Inputs you will use:**

| Input | Purpose |
|---|---|
| `anthropic_api_key` | API key (optional if you use a provider below) |
| `github_token` | Defaults to `secrets.GITHUB_TOKEN` |
| `trigger_phrase` | Comment trigger, default `@claude` |
| `use_bedrock` / `use_vertex` | Switch provider |
| `prompt` | Instruction for the run |
| `claude_args` | CLI arguments passed to Claude Code |

**Example 1: Respond to `@claude` on PRs and issues**

`.github/workflows/claude.yaml`:

```yaml
name: Claude
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  claude:
    if: contains(github.event.comment.body, '@claude')
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          trigger_phrase: "@claude"
          prompt: "Implement what the comment asks. Keep changes small and explain them in a comment."
          claude_args: "--max-turns 5 --model claude-sonnet-5-5"
```

Someone comments `@claude implement the spec in the linked issue`. Claude pushes commits and replies with what it did.

**Example 2: Scheduled daily report (read-only)**

```yaml
name: Daily DSA check
on:
  schedule:
    - cron: "0 9 * * *"   # 09:00 UTC daily
  workflow_dispatch:       # manual run from the Actions tab

jobs:
  report:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: write
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: "Run node on each file in 02.dsa and report any that fail. Do not edit files."
          claude_args: "--max-turns 5 --allowedTools Bash,Read,Grep,Glob"
```

## Tuning with `claude_args`

- `--max-turns N`: hard cap on the agent loop.
- Permission mode: unattended jobs cannot answer prompts, so set the mode to avoid stopping.
- `--allowedTools`: give only what the job needs. Use read-only tools for reports.

## Important points

- Code Review is for review. The Action is for work.
- Never approve or merge automatically. Keep a human on the decision.
- Give the workflow the least permissions it needs (`permissions:` block).
- Store the API key as a repo secret, never in the YAML.
- Always set `--max-turns` on unattended runs.
- Model IDs change. Check the current ID before you use one in `claude_args`.
- This repo has no GitHub workflows yet. A good first one is the read-only daily check above.