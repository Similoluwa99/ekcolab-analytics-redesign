export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="EKCÖLAB Analytics">
      <svg className="brand__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="17.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 20h32M20 3v34M8.5 9.5c6 4 17 4 23 0M8.5 30.5c6-4 17-4 23 0" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
        <path d="M20 9c4.7 3.3 7.6 7.2 7.6 11.2 0 4.6-3.4 8-7.6 10.8-4.2-2.8-7.6-6.2-7.6-10.8C12.4 16.2 15.3 12.3 20 9Z" fill="currentColor" opacity="0.14" />
        <circle cx="20" cy="20" r="3.4" fill="currentColor" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">EKCÖLAB</span>
        {!compact && <span className="brand__sub">Analytics</span>}
      </span>
    </span>
  )
}
