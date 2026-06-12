export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name (e.g. pikachu, charizard)…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
      aria-label="Search Pokémon by name"
    />
  );
}
