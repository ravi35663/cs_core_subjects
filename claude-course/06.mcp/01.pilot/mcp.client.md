# MCP client: message flow and how to use an MCP service

## What the client does

The MCP client is the bridge between your app and MCP servers. It handles the message exchange and protocol details, so your app only asks for tools and runs them.

## Transports

MCP does not depend on one transport:

| Transport | Typical use |
|---|---|
| **stdio** (standard input/output) | Client and server on the same machine. Most common. |
| **HTTP** | Server on another machine or in the cloud |
| **WebSocket** | Long-lived two-way connection |

## Key messages

| Request | Result | Purpose |
|---|---|---|
| `ListToolsRequest` | `ListToolsResult` | "What tools do you provide?" |
| `CallToolRequest` | `CallToolResult` | "Run this tool with these arguments." |

## Full flow

Example: a user asks, "What repositories do I have?"

1. **User query:** the user sends the question to your server.
2. **Tool discovery:** your server asks the client for the available tools.
3. **List tools:** the client sends `ListToolsRequest` to the MCP server and gets `ListToolsResult`.
4. **Claude request:** your server sends the query and the tools to Claude.
5. **Decision:** Claude decides to call a tool.
6. **Execution request:** your server asks the client to run that tool.
7. **Call tool:** the client sends `CallToolRequest`. The MCP server calls the GitHub API.
8. **Results:** GitHub's data returns as `CallToolResult`.
9. **Back to Claude:** your server sends the result to Claude.
10. **Final answer:** Claude writes the reply.
11. **Delivery:** your server shows the answer to the user.

## Using an MCP service in your client

### Step 1: Install the SDK

```bash
npm install @modelcontextprotocol/sdk
```

### Step 2: Connect to the server

This example starts a GitHub MCP server over stdio. Save it as `mcp-client.mjs`.

```javascript
// Connects to an MCP server, lists its tools, and calls one.
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const client = new Client({ name: 'dsa-app', version: '1.0.0' });

const transport = new StdioClientTransport({
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-github'],
    env: { GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_TOKEN }
});

async function main() {
    await client.connect(transport);

    // Step 3: discover tools
    const { tools } = await client.listTools();
    console.log(tools.map(tool => tool.name));

    // Step 4: call one tool (name and arguments depend on the server)
    const result = await client.callTool({
        name: 'list_repositories',
        arguments: {}
    });
    console.log(result.content);

    await client.close();
}

main();
```

Run it with `node mcp-client.mjs`. Set `GITHUB_TOKEN` first.

### Step 3: Pass the tools to Claude

Convert each tool to Claude's tool format and send it with the user's query:

```javascript
const claudeTools = tools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema
}));
```

### Step 4: Run the tool Claude asks for

When Claude replies with a `tool_use` block, pass its name and input to `callTool`, then return the result to Claude as a `tool_result`.

```javascript
const output = await client.callTool({
    name: block.name,
    arguments: block.input
});
```

### Step 5: Use an MCP server in Claude Code (no code)

```bash
claude mcp add github -- npx -y @modelcontextprotocol/server-github
claude mcp list
```

Claude Code then calls the server's tools directly. The steps above are for your own app.

## Important points

- **Transport is a setting.** Use stdio locally. Use HTTP for a remote server.
- **Always list tools first.** Do not guess tool names or argument shapes.
- **Pass secrets as environment variables,** not in code or config files.
- **Close the client** with `client.close()` when finished.
- **Check the server's README** for its tool names and arguments.
- **Review a server before you connect it.** It can act on the service it wraps.