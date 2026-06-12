/**
 * Sum every base stat (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed).
 * Useful for ranking Pokémon overall.
 */
export function totalStats(stats) {
  let total = 0;
  for (let i = 0; i < stats.length; i++) {
    total += stats[i].base_stat;
  }
  return total;
}

/** Capitalize the first letter of a string. */
export function capitalize(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Friendly stat labels — the API returns 'special-attack' etc. */
export const STAT_LABELS = {
  'hp': 'HP',
  'attack': 'Attack',
  'defense': 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  'speed': 'Speed',
};
