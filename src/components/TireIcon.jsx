export default function TireIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4
        const x1 = 24 + 12 * Math.cos(angle)
        const y1 = 24 + 12 * Math.sin(angle)
        const x2 = 24 + 17 * Math.cos(angle)
        const y2 = 24 + 17 * Math.sin(angle)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}
