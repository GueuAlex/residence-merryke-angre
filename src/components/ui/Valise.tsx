// Valise ouverte (le couvercle est anime par la section Deballage via la classe .couvercle)
export function Valise({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 260" aria-hidden="true" className={`overflow-visible ${className}`}>
      <g className="couvercle">
        <rect x="40" y="40" width="220" height="80" rx="16" fill="#c4683d" stroke="#2b2b2e" strokeWidth="3" />
        <path d="M90 40v80M210 40v80" stroke="#8f4a26" strokeWidth="10" />
      </g>
      <path d="M120 128v-20a12 12 0 0 1 12-12h36a12 12 0 0 1 12 12v20" fill="none" stroke="#2b2b2e" strokeWidth="8" />
      <rect x="30" y="128" width="240" height="120" rx="18" fill="#e8622c" stroke="#2b2b2e" strokeWidth="3" />
      <path d="M85 128v120M215 128v120" stroke="#b8461a" strokeWidth="12" />
      <rect x="138" y="170" width="24" height="16" rx="3" fill="#d9b27c" stroke="#2b2b2e" strokeWidth="2" />
      <circle cx="60" cy="252" r="8" fill="#2b2b2e" />
      <circle cx="240" cy="252" r="8" fill="#2b2b2e" />
    </svg>
  );
}
