# Part 2: Build, test, and publish an MCP server and client in Node.js

## Why build an MCP server?

- **Reuse:** Write the integration once. Claude Code, Claude Desktop, and your own app can all use it.
- **Standard:** Every MCP client speaks the same protocol, so you do not write custom glue for each app.
- **Separation:** Your business logic stays in one place. Apps only call its tools.
- **Sharing:** Publish to npm, and any team runs it with `npx`.

## Step 1: Create the project

```bash
mkdir doc-mcp && cd doc-mcp
npm init -y
npm install @modelcontextprotocol/sdk zod
```

Edit `package.json` to use ES modules and add a command name:

```json
{
  "name": "doc-mcp-server",
  "version": "0.1.0",
  "type": "module",
  "bin": { "doc-mcp-server": "./src/server.js" },
  "files": ["src"],
  "main": "src/server.js"
}
```

## Step 2: Write the server

Create `src/server.js`:

```javascript
#!/usr/bin/env node
// Document MCP server: one tool to read a document, one to edit it.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const docs = {
    'plan.md': 'The plan outlines the steps for the project implementation.',
    'report.pdf': 'The report details the state of a 20m condenser tower.'
};

const server = new McpServer({ name: 'doc-server', version: '0.1.0' });

server.registerTool(
    'read_doc_contents',
    {
        description: 'Read the contents of a document.',
        inputSchema: { doc_id: z.string().describe('Id of the document to read') }
    },
    async ({ doc_id }) => {
        if (!(doc_id in docs)) throw new Error(`Doc with id ${doc_id} not found`);
        return { content: [{ type: 'text', text: docs[doc_id] }] };
    }
);

server.registerTool(
    'edit_document',
    {
        description: 'Replace a string in a document with a new string.',
        inputSchema: {
            doc_id: z.string(),
            old_str: z.string().describe('Text to replace. Must match exactly.'),
            new_str: z.string()
        }
    },
    async ({ doc_id, old_str, new_str }) => {
        if (!(doc_id in docs)) throw new Error(`Doc with id ${doc_id} not found`);
        docs[doc_id] = docs[doc_id].replace(old_str, new_str);
        return { content: [{ type: 'text', text: `Updated ${doc_id}` }] };
    }
);

await server.connect(new StdioServerTransport());
// Note: stdio servers talk to the client over stdout.
// Log with console.error, never console.log, or you corrupt the protocol.
```

The `zod` schemas become the tool's input schema. This is the Node version of Python's type hints.

## Step 3: Write a client

Create `src/client.js`:

```javascript
// Connects to the server, lists its tools, and calls one.
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const client = new Client({ name: 'doc-app', version: '0.1.0' });
const transport = new StdioClientTransport({
    command: 'node',
    args: ['src/server.js']
});

await client.connect(transport);

const { tools } = await client.listTools();
console.log('Tools:', tools.map(tool => tool.name));

const result = await client.callTool({
    name: 'read_doc_contents',
    arguments: { doc_id: 'report.pdf' }
});
console.log(result.content[0].text);

await client.close();
```

Run it:

```bash
node src/client.js
```

## Step 4: Test with the MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/server.js
```

Open the URL it prints. Click **Connect**, then **List Tools**, then run `read_doc_contents` with `plan.md`. Check each result before you publish.

## Step 5: Use it in Claude Code (local test)

Add `.mcp.json` to a test project:

```json
{
  "mcpServers": {
    "doc-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/doc-mcp/src/server.js"]
    }
  }
}
```

Use the absolute path so it works from any folder.

## Step 6: Prepare for publishing

1. Create an account at npmjs.com and run `npm login`.
2. Pick a name. A scoped name such as `@your-name/doc-mcp-server` avoids clashes.
3. Check exactly which files will be published:

```bash
npm pack --dry-run
```

4. Test the command locally before publishing:

```bash
npm link
doc-mcp-server        # runs the server; it waits for input, so press Ctrl+C
```

## Step 7: Publish

```bash
npm publish --access public
```

For a scoped name, `--access public` is required the first time. For later changes, bump the version first:

```bash
npm version patch
npm publish --access public
```

## Step 8: Use the published server in another codebase

In any project:

```json
{
  "mcpServers": {
    "doc-mcp": {
      "command": "npx",
      "args": ["-y", "@your-name/doc-mcp-server"]
    }
  }
}
```

`-y` lets `npx` install the package without asking. Anyone who runs this gets the same tools.

## Benefits of this approach

| Benefit | Why it matters |
|---|---|
| One codebase, many clients | Claude Code, Claude Desktop, and your own app share it |
| Versioned releases | Teams update with `npm update`, and roll back if needed |
| Testable | The Inspector and the client script check it before release |
| Reusable across projects | Install it anywhere, like any npm package |

## Checklist

- [ ] `"type": "module"` in `package.json`
- [ ] `#!/usr/bin/env node` at the top of the server file
- [ ] Logs go to `console.error`, not `console.log`
- [ ] Inspector run before publishing
- [ ] `npm pack --dry-run` shows only the intended files
- [ ] Version bumped before each publish