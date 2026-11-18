import { IllustrativeNote } from './Ui'

const positions = [
  { x: 27, y: 33, label: 'Sample location 1' },
  { x: 49, y: 57, label: 'Sample location 2' },
  { x: 70, y: 30, label: 'Sample location 3' },
  { x: 82, y: 70, label: 'Sample location 4' },
]

export function MapVisual({
  compact = false,
  selected = 0,
  onSelect,
  country,
  className = '',
}: {
  compact?: boolean
  selected?: number
  onSelect?: (index: number) => void
  country?: string
  className?: string
}) {
  return (
    <div className={`map ${compact ? 'map--compact' : ''} ${className}`.trim()}>
      <div className="map__canvas">
        <svg viewBox="0 0 800 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrative street and boundary map used to demonstrate the Community Risk Explorer interface. It does not show live community data.">
          <rect width="800" height="460" fill="#f2f5f1" />
          <g stroke="#e1e8e0" strokeWidth="1" fill="none">
            <path d="M0 60h800M0 160h800M0 260h800M0 360h800" />
            <path d="M100 0v460M260 0v460M420 0v460M580 0v460M740 0v460" />
          </g>
          <g fill="#e5ece4">
            <rect x="112" y="72" width="126" height="66" rx="3" />
            <rect x="274" y="72" width="122" height="66" rx="3" />
            <rect x="432" y="72" width="126" height="66" rx="3" />
            <rect x="112" y="172" width="126" height="66" rx="3" />
            <rect x="432" y="172" width="126" height="66" rx="3" />
            <rect x="592" y="172" width="126" height="66" rx="3" />
            <rect x="274" y="272" width="122" height="66" rx="3" />
            <rect x="592" y="272" width="126" height="66" rx="3" />
            <rect x="112" y="372" width="126" height="60" rx="3" />
            <rect x="432" y="372" width="126" height="60" rx="3" />
          </g>
          <path d="M-20 300C110 268 170 326 286 300s150-92 268-58 190 12 286-40" stroke="#cbded6" strokeWidth="24" fill="none" opacity="0.9" />
          <path d="M-20 300C110 268 170 326 286 300s150-92 268-58 190 12 286-40" stroke="#e8f0eb" strokeWidth="10" fill="none" />
          <g stroke="#ffffff" strokeWidth="13" fill="none" strokeLinecap="round">
            <path d="M0 148h800M0 248h800M0 348h800" />
            <path d="M244 0v460M404 0v460M564 0v460" />
          </g>
          <g stroke="#dfe6df" strokeWidth="1" fill="none" strokeDasharray="6 6">
            <path d="M60 20 60 440 344 440 344 20Z" />
            <path d="M516 76 516 420 762 420 762 76Z" />
            <path d="M120 196 120 336 240 336 240 196Z" />
          </g>
          <g fill="#dce8de" opacity="0.9">
            <ellipse cx="700" cy="120" rx="52" ry="30" />
            <ellipse cx="60" cy="418" rx="66" ry="26" />
          </g>
          <g fill="#9aa79f" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="1.2">
            <text x="30" y="34">N ↑</text>
            <text x="676" y="440">ILLUSTRATIVE MAP</text>
          </g>
          <g stroke="#9aa79f" strokeWidth="1.5">
            <path d="M30 424h70M30 420v8M100 420v8" />
          </g>
          {country && (
            <g>
              <rect x="30" y="382" width="152" height="26" rx="3" fill="#ffffff" opacity="0.94" />
              <text x="42" y="399" fill="#173f35" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">{country}</text>
            </g>
          )}
        </svg>

        <div className="map__pins">
          {positions.map((point, index) => (
            <button
              key={point.label}
              type="button"
              className={`map-pin ${selected === index ? 'is-selected' : ''}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              aria-label={`Select ${point.label} in this illustrative preview`}
              aria-pressed={selected === index}
              onClick={() => onSelect?.(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
      <div className="map__legend">
        <span><i style={{ background: 'var(--forest)' }} /> Community point (illustrative)</span>
        <span><i style={{ background: 'var(--sage)' }} /> Drawn boundary</span>
        <span><i style={{ background: '#cbded6' }} /> Watercourse</span>
        <IllustrativeNote>Preview only</IllustrativeNote>
      </div>
    </div>
  )
}
