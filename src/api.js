// Thin wrapper around the public PokeAPI (https://pokeapi.co).
// No API key required.

const BASE = 'https://pokeapi.co/api/v2';

/**
 * Look up a single Pokémon by name or id.
 * The API expects lowercase names (`pikachu`, not `Pikachu`).
 */
export async function fetchPokemon(query) {
  const res = await fetch(`${BASE}/pokemon/${query}`);
  if (!res.ok) return null;
  return res.json();
}

/**
 * Fetch a page of Pokémon with their full details (sprites, stats, types).
 */
export async function fetchPokemonList(limit = 24) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}`);
  const data = await res.json();
  const detailed = await Promise.all(
    data.results.map((p) => fetch(p.url).then((r) => r.json()))
  );
  return detailed;
}
