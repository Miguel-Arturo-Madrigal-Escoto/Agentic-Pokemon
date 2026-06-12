# /fix-bug — Cursor version
# To use: copy this file to .cursor/commands/fix-bug.md, then type `/fix-bug` and describe the bug.

Help me fix ONE bug at a time in this app. The bug is in my message (ask me if I didn't say).
I already have the app running at http://localhost:5173 (`npm run dev`) — it hot-reloads on save,
so do NOT start, stop, or run the dev server.

Steps:
1. Understand the symptom — from what I described and by reading the code.
2. Find the root cause — trace it to the exact file and line; explain why it happens *before* editing.
3. Propose the smallest fix — show the exact change; don't refactor unrelated code.
4. Apply it, then I verify — make the change, optionally run `npm run build` to check it compiles,
   then tell me what to look at in the browser (it auto-reloads).
5. Summarize — one sentence: root cause + fix.

Rules:
- One bug at a time. Don't invent bugs or change things that work.
- Explain the root cause before editing.
- Smallest change that fixes it.
- Do NOT launch a dev server — I'm already running it. Use `npm run build` only as a compile check.
- Let me review the diff before moving on.
