import { capitalize } from '../utils.js';

export default function PokemonCard({ p, onClick, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      <button
        type="button"
        className="fav-button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '★' : '☆'}
      </button>

      <div className="card-body" onClick={onClick} role="button" tabIndex={0}>
        <img
          src={p.sprites?.front_default}
          alt={p.name}
          className="card-sprite"
        />
        <h3 className="card-name">{capitalize(p.name)}</h3>
        <div className="types">
          {p.types?.map((t) => (
            <span key={t.type.name} className={`type-badge type-${t.type.name}`}>
              {t.type.name}
            </span>
          ))}
        </div>
        <div className="card-id">#{String(p.id).padStart(3, '0')}</div>
      </div>
    </div>
  );
}
