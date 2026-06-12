import { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonList } from './api.js';
import SearchBar from './components/SearchBar.jsx';
import TypeFilter from './components/TypeFilter.jsx';
import PokemonCard from './components/PokemonCard.jsx';
import PokemonDetail from './components/PokemonDetail.jsx';
import './App.css';

const TYPES = ['All', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Normal', 'Poison'];

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [typeFilter, setTypeFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Initial load — fetch the first 24 Pokémon for the grid.
  useEffect(() => {
    setLoading(true);
    fetchPokemonList(24).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, []);

  // Search effect — looks up a single Pokémon as the user types.
  useEffect(() => {
    if (!search) {
      setSearchResult(null);
      return;
    }
    fetchPokemon(search).then((data) => {
      setSearchResult(data);
    });
  }, [search]);

  // Filter the grid by selected type.
  const filtered = pokemon.filter((p) => {
    if (typeFilter === 'All') return true;
    return p.types.some((t) => t.type.name.toLowerCase() === typeFilter.toLowerCase());
  });

  // Toggle: add a Pokémon to favorites, or remove it if it's already there.
  function toggleFavorite(p) {
    setFavorites((prev) =>
      prev.some((f) => f.name === p.name)
        ? prev.filter((f) => f.name !== p.name)
        : [...prev, p]
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>PokéDex Lite</h1>
        <p className="subtitle">Find your favorite first-gen Pokémon.</p>
      </header>

      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <TypeFilter types={TYPES} active={typeFilter} onChange={setTypeFilter} />
      </div>

      {favorites.length > 0 && (
        <section className="favorites">
          <h3>Favorites ({favorites.length})</h3>
          <div className="favorites-row">
            {favorites.map((f, i) => (
              <span key={i} className="fav-chip">{f.name}</span>
            ))}
          </div>
        </section>
      )}

      {searchResult && (
        <section className="search-result">
          <h3>Search result</h3>
          <div className="grid">
            <PokemonCard
              p={searchResult}
              onClick={() => setSelected(searchResult)}
              isFavorite={favorites.some((f) => f.name === searchResult.name)}
              onToggleFavorite={() => toggleFavorite(searchResult)}
            />
          </div>
        </section>
      )}

      {loading && <div className="loading">Loading Pokémon…</div>}

      <main className="grid">
        {filtered.map((p) => (
          <PokemonCard
            key={p.id}
            p={p}
            onClick={() => setSelected(p)}
            isFavorite={favorites.some((f) => f.name === p.name)}
            onToggleFavorite={() => toggleFavorite(p)}
          />
        ))}
      </main>

      {selected && (
        <PokemonDetail p={selected} onClose={() => setSelected(null)} />
      )}

      <footer className="footer">
        <small>Data: pokeapi.co  ·  Workshop build</small>
      </footer>
    </div>
  );
}
