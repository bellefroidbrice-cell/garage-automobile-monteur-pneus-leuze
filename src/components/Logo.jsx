export default function Logo({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="92" height="92" rx="24" fill="#F97316" />

      <text
        x="50"
        y="44"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#0B0B0D"
        fontFamily="'Oswald', sans-serif"
        fontWeight="600"
        fontSize="38"
        letterSpacing="-1.5"
      >
        TP
      </text>

      <line x1="30" y1="68" x2="70" y2="68" stroke="#0B0B0D" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}
