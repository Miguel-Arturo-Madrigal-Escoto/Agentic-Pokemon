---
description: Fix ONE bug in this app — find the root cause, make the smallest fix, then I verify in the browser.
argument-hint: [describe the bug, e.g. "the type filter shows nothing"]
disable-model-invocation: true
---

# /fix-bug — Claude Code version
# To use: copy this file to .claude/commands/fix-bug.md, then run `/fix-bug <symptom>`.

You are helping a student fix ONE bug at a time. Go slow and explain as you go.
I already have the app running at http://localhost:5173 (`npm run dev`) — it hot-reloads
when you save, so you do NOT need to start, stop, or run the dev server.

The bug to fix: $ARGUMENTS
(If that's empty, ask me which bug first.)

Steps:
1. **Understand the symptom** — From what I described (and by reading the code), work out
   exactly what's going wrong. Ask me to click something if you need more detail.
2. **Find the root cause** — Trace it to the exact file and line. Explain *where* the bug is
   and *why* it happens — BEFORE changing any code.
3. **Propose the smallest fix** — Show the exact change (file + before/after). Keep it minimal.
4. **Apply it, then I verify** — Make the change. You may run `npm run build` once to confirm it
   still compiles (that command exits). Then tell me what to check in the browser — it has hot-reloaded.
5. **Summarize** — One sentence: the root cause and the fix.

Rules:
- One bug at a time. Don't invent bugs or "fix" things that work.
- Explain the root cause before editing.
- Smallest change that fixes it.
- Do NOT launch a dev server — I'm already running it. Use `npm run build` only as a quick compile check.
- Pause for me to review the diff before moving on.
