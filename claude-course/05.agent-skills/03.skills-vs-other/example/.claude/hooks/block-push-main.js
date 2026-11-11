// Hook script (example): blocks any Bash command that pushes to main.
// Claude sends the tool call as JSON on stdin. Exit 2 blocks the call and shows the message to Claude.
const fs = require('fs');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const command = input.tool_input?.command ?? '';

if (/git\s+push\b.*\bmain\b/.test(command)) {
    console.error('Blocked: push to dev and open a PR instead.');
    process.exit(2);
}
process.exit(0);
