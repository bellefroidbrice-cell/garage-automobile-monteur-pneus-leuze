const TREAD_COUNT = 18
const SPOKE_COUNT = 5

export default function Logo({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Tire tread */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="#F97316" strokeWidth="6" />
      {Array.from({ length: TREAD_COUNT }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="38"
          x2="50"
          y2="48"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${(i * 360) / TREAD_COUNT} 50 50)`}
        />
      ))}

      {/* Wheel hub */}
      <circle cx="50" cy="50" r="24" fill="#0B0B0D" stroke="#F97316" strokeWidth="3" />

      {/* Alloy spokes */}
      {Array.from({ length: SPOKE_COUNT }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="38"
          x2="50"
          y2="25"
          stroke="#F97316"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${(i * 360) / SPOKE_COUNT} 50 50)`}
        />
      ))}

      {/* Center cap */}
      <circle cx="50" cy="50" r="7" fill="#F97316" />
    </svg>
  )
}
