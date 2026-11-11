# Model Context Protocol (MCP)

## What MCP is

MCP is a communication layer. It gives Claude context and tools without you writing the integration code yourself. It moves tool definitions and execution from your server to dedicated **MCP servers**.

## The problem it solves

Example: a chat app lets users ask Claude, "What open pull requests are there across all my repositories?" Claude needs tools that call the GitHub API.

GitHub has many features: repositories, pull requests, issues, projects, and more. Without MCP, you would write, test, and maintain a tool schema and function for each one.

## How it works

```text
Your app (MCP client)
        │
        ▼
GitHub MCP server  ──►  GitHub API
(tools: get_repos, list_pull_requests, ...)
```

- **MCP client:** your application. It connects to servers.
- **MCP server:** wraps one outside service, such as GitHub. It exposes **tools**, **prompts**, and **resources** in a standard format.
- Your app talks to the MCP server. The server handles the service's details.

## Common questions

| Question | Answer |
|---|---|
| Who writes MCP servers? | Anyone. Service providers often publish official ones, such as AWS. |
| How is it different from calling an API directly? | Direct calls need your own tool definitions. An MCP server provides them ready-made. |
| Is MCP the same as tool use? | No. Tool use is how Claude calls a tool. MCP supplies the tool schemas and implementations. They work together. |

## Example: connect a server in Claude Code

`.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

- The token comes from an environment variable. Do not put it in the file.
- Once connected, Claude can call the server's tools, such as listing pull requests.

## Important points

- **MCP supplies tools; tool use is how Claude calls them.**
- **Use an official server** when one exists, and check who maintains it.
- **Keep secrets out of `.mcp.json`.** Use environment variables.
- **Connect only the servers you need.** Each one adds tool definitions to every turn.
- **Review a server before you connect it.** It can read and act on the service it wraps.