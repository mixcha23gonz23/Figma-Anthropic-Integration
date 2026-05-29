Architecture Overview
Claude / Claude Code
        │
        │ MCP Client
        ▼
Figma MCP Server
        │
        ▼
Figma Files / Components / Dev Mode

Anthropic created MCP as a standard way for AI agents to connect to external tools and applications. Figma now provides an official MCP server that exposes design context, components, variables, frames, and even write-back capabilities.

Option 1 — Claude Code + Official Figma MCP (Recommended)

This is the cleanest modern setup.

Requirements
Claude Code
Figma Desktop App OR Remote Figma MCP
Figma Dev Mode access
Node.js installed

Docs:

Anthropic MCP Docs
Figma MCP Docs
Figma MCP Catalog
Local Desktop MCP Setup
Step 1 — Enable Figma Dev Mode MCP Server

In Figma Desktop:

Preferences → Dev Mode → Enable MCP Server

Figma exposes:

http://127.0.0.1:3845/mcp

according to the official Anthropic integration docs.

Step 2 — Install MCP Connection in Claude Code

Run:

claude mcp add \
  --transport http \
  figma-dev-mode-mcp-server \
  http://127.0.0.1:3845/mcp

Official example from Anthropic docs.

Step 3 — Verify

Run:

claude mcp list

You should see:

figma-dev-mode-mcp-server
Example Claude Prompts

Once connected:

Read the selected Figma frame and generate React + Tailwind code.
Extract typography tokens from this Figma file.
Create a responsive dashboard component matching the selected design.
Update spacing tokens to use 8px increments.
Remote Figma MCP (Cloud-Based)

Figma also supports remote MCP servers.

Typical config:

{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}

Remote MCP support is now part of Figma’s official ecosystem.

What You Actually Get

The MCP server can expose:

Selected frames
Components
Variables
Auto-layout info
Design tokens
Asset exports
Native write access back into Figma

Figma explicitly states the MCP server can both:

provide design context
write native Figma content back to canvas
Example Full Workflow
Design-to-Code
Figma Designer
    ↓
Select frame in Dev Mode
    ↓
Claude reads frame via MCP
    ↓
Claude generates:
- React
- Tailwind
- SwiftUI
- Flutter
- Vue
    ↓
Developer reviews + ships
Example MCP Config File

For Claude Desktop / compatible clients:

{
  "mcpServers": {
    "figma": {
      "transport": {
        "type": "http",
        "url": "http://127.0.0.1:3845/mcp"
      }
    }
  }
}
Advanced Architecture

You can chain MCP servers:

Claude
 ├── Figma MCP
 ├── GitHub MCP
 ├── Slack MCP
 ├── Jira MCP
 └── Postgres MCP

Anthropic specifically documents multi-tool orchestration workflows.

Example:

Read Figma design →
Generate frontend →
Create GitHub PR →
Notify Slack
Security Notes

MCP is powerful but introduces security considerations:

Only use trusted MCP servers
Prefer official Figma MCP
Avoid random community MCP packages
Limit write permissions
Use isolated dev environments

There have been known vulnerabilities in unofficial Figma MCP implementations.

Best Current Stack (2026)

Recommended stack:

Layer	Recommendation
AI Agent	Claude Code
Design Tool	Figma Dev Mode
Protocol	MCP
Frontend	React + Tailwind
IDE	VS Code or Cursor
Repo	GitHub MCP
Minimal End-to-End Example
1. Open Figma Desktop

Enable MCP server.

2. Connect Claude
claude mcp add \
  --transport http \
  figma \
  http://127.0.0.1:3845/mcp
3. Select a Frame in Figma

Example:

Login page
Dashboard
Mobile screen
4. Prompt Claude
Generate production-ready React + Tailwind code from the selected frame.
Use semantic HTML and responsive layout.
5. Claude Produces
JSX
Tailwind
Component structure
Tokens
Responsive behavior

using actual Figma layout metadata instead of screenshot guessing.