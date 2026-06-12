# PokéDex Lite — Workshop Edition

A tiny React + Vite app that lets you browse, search, and favorite first-gen Pokémon.
**It ships with intentional bugs.** Your job in this workshop is to find and fix
them using an agentic dev tool (Claude Code, Cursor, etc.).

> Built for the *Agentic Development — Tools, Patterns & Strategies* workshop.

---

## Setup

Requires Node 18+ and npm.

```bash
npm install
npm run dev
```

The app boots on `http://localhost:5173` and pulls data from the public
[PokeAPI](https://pokeapi.co) — no API key needed.

---

## What the app is *supposed* to do

- Show a grid of the first 24 Pokémon when it loads
- Let you search by name as you type
- Let you filter the grid by type (Fire, Water, Grass, …)
- Open a detail modal on click, with stats, height/weight, and a total
- Toggle a star to favorite a Pokémon (and un-favorite it again)
- Hide the loading indicator once data arrives
- Close the detail modal by clicking outside it or pressing the X

If any of that doesn't work — congratulations, you've found a bug.

---

## How to approach the workshop

1. **Run the app and use it like a real user.** Type names, click types,
   open the modal, favorite things, search for nonsense.
   Note every behavior that surprises you.
2. **Group your findings** by category — UI, request/API, logic.
3. **Open the project in your agentic tool of choice** and ask it to
   investigate one symptom at a time. Try prompts like:
   - *“The type filter shows nothing when I click Fire. Why?”*
   - *“Searching for `Pikachu` (capitalized) returns nothing. Trace the request and fix it.”*
   - *“The ‘Loading Pokémon…’ message never goes away — find the root cause.”*
4. **Read the diff** before accepting any fix. The agent should explain
   *why* — root cause, not just a workaround.
5. **Verify each fix** in the browser before moving on.

There are **five intentional bugs** across UI, API, and logic.
The instructor has the full list — don't peek unless you're stuck.

---

## Project layout

```
buggy-pokedex/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              ← entry
    ├── App.jsx               ← top-level state, effects, filtering
    ├── App.css
    ├── index.css
    ├── api.js                ← fetch wrappers around PokeAPI
    ├── utils.js              ← totalStats, capitalize, STAT_LABELS
    └── components/
        ├── SearchBar.jsx
        ├── TypeFilter.jsx
        ├── PokemonCard.jsx   ← grid item, favorite toggle
        └── PokemonDetail.jsx ← modal with stats
```

Have fun. Break things. Fix them. Ask the agent why.
