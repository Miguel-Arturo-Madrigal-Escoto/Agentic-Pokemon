export default function TypeFilter({ types, active, onChange }) {
  return (
    <div className="type-filter" role="group" aria-label="Filter by type">
      {types.map((t) => (
        <button
          key={t}
          type="button"
          className={`type-button${active === t ? ' active' : ''}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
