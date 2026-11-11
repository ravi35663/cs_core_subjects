# Example: use every MCP client function against the document server.
# Run with: python example_usage.py
import sys
import asyncio
from pathlib import Path

from mcp_client import MCPClient

SERVER_SCRIPT = str(Path(__file__).with_name("mcp_server.py"))


async def main():
    async with MCPClient(command=sys.executable, args=[SERVER_SCRIPT]) as client:
        # 1. Tools: discover them, then call one
        tools = await client.list_tools()
        print("Tools:", [tool.name for tool in tools])

        result = await client.call_tool("read_doc_contents", {"doc_id": "report.pdf"})
        print("\nread_doc_contents(report.pdf):")
        print(result.content[0].text)

        # Edits persist for as long as this server process runs
        await client.call_tool(
            "edit_document",
            {"doc_id": "plan.md", "old_str": "plan outlines", "new_str": "plan describes"},
        )
        result = await client.call_tool("read_doc_contents", {"doc_id": "plan.md"})
        print("\nplan.md after edit:", result.content[0].text)

        # 2. Resources: read-only data by URI
        doc_ids = await client.read_resource("docs://documents")
        print("\nDocument ids (JSON parsed to a list):", doc_ids)

        deposition = await client.read_resource("docs://documents/deposition.md")
        print("deposition.md (plain text):", deposition)

        # 3. Prompts: list them, then fill one in with arguments
        prompts = await client.list_prompts()
        print("\nPrompts:", [prompt.name for prompt in prompts])

        messages = await client.get_prompt("format", {"doc_id": "spec.txt"})
        print("format prompt, first 120 chars:")
        print(messages[0].content.text[:120], "...")


if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    asyncio.run(main())
