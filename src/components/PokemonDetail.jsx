import { totalStats, capitalize, STAT_LABELS } from '../utils.js';

export default function PokemonDetail({ p, onClose }) {
  if (!p) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <img
          src={p.sprites?.front_default}
          alt={p.name}
          className="modal-sprite"
        />
        <h2 id="modal-title">{capitalize(p.name)}</h2>

        <div className="modal-meta">
          <span><strong>#</strong>{String(p.id).padStart(3, '0')}</span>
          <span><strong>Height:</strong> {p.height / 10} m</span>
          <span><strong>Weight:</strong> {p.weight / 10} kg</span>
        </div>

        <div className="types modal-types">
          {p.types?.map((t) => (
            <span key={t.type.name} className={`type-badge type-${t.type.name}`}>
              {t.type.name}
            </span>
          ))}
        </div>

        <h3 className="stats-title">Base stats</h3>
        <div className="stats">
          {p.stats?.map((s) => {
            // Base stats range 1–255; cap the bar at 100% so it can't overflow.
            const pct = Math.min(100, (s.base_stat / 255) * 100);
            return (
            <div key={s.stat.name} className="stat-row">
              <span className="stat-name">
                {STAT_LABELS[s.stat.name] || s.stat.name}
              </span>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar"
                  style={{ width: `${pct}%` }}
                >
                  <span className="stat-value">{s.base_stat}</span>
                </div>
              </div>
            </div>
            );
          })}
        </div>
        <p className="stats-total">
          Total: <strong>{totalStats(p.stats || [])}</strong>
        </p>
      </div>
    </div>
  );
}
