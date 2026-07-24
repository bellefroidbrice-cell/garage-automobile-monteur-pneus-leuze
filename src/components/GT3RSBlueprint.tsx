type GT3RSBlueprintProps = {
  className?: string
  showDimensions?: boolean
}

export default function GT3RSBlueprint({ className = 'w-full h-full', showDimensions = false }: GT3RSBlueprintProps) {
  return (
    <svg
      viewBox="0 0 900 340"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ground line */}
      <line x1="20" y1="270" x2="860" y2="270" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />

      {/* rear wing struts + wing plane */}
      <path
        d="M 555 150 L 545 60 M 615 158 L 640 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M 510 60 L 675 60 L 675 48 L 510 48 Z" stroke="currentColor" strokeWidth="2" />
      <line x1="510" y1="48" x2="510" y2="66" stroke="currentColor" strokeWidth="2" />
      <line x1="675" y1="48" x2="675" y2="66" stroke="currentColor" strokeWidth="2" />

      {/* body silhouette */}
      <path
        d="M 60 236
           L 60 248
           C 60 252 68 254 95 253
           C 72 244 72 222 96 209
           C 104 199 112 197 118 194
           C 150 178 230 150 275 121
           C 288 108 300 92 330 76
           C 360 65 430 63 470 68
           C 500 73 525 96 540 120
           C 553 141 572 150 598 156
           C 626 162 652 176 668 200
           C 678 216 676 234 656 248
           C 636 255 610 256 590 255
           C 480 258 260 258 150 254
           C 118 253 96 253 95 253"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* front splitter */}
      <path d="M 42 250 L 96 246" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* rear diffuser fins */}
      <path
        d="M 615 250 L 605 262 M 635 249 L 627 262 M 655 247 L 649 261"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />

      {/* door line */}
      <path
        d="M 392 78 C 372 110 358 160 352 240"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />

      {/* side skirt / rocker line */}
      <line x1="150" y1="241" x2="590" y2="241" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />

      {/* mirror */}
      <path d="M 305 128 C 298 122 292 122 288 129 C 292 136 300 136 305 128 Z" stroke="currentColor" strokeWidth="1.5" />

      {/* front fender arch */}
      <path d="M 145 254 A 60 60 0 0 1 262 254" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.55" />
      {/* rear fender arch (wider — GT3 RS flare) */}
      <path d="M 578 254 A 70 70 0 0 1 720 254" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.55" />

      {/* wheels */}
      <circle cx="200" cy="270" r="46" stroke="currentColor" strokeWidth="2" />
      <circle cx="200" cy="270" r="24" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="650" cy="270" r="50" stroke="currentColor" strokeWidth="2" />
      <circle cx="650" cy="270" r="26" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />

      {showDimensions && (
        <g fontFamily="Inter, sans-serif" fontSize="13" fill="currentColor" fillOpacity="0.75">
          {/* length dimension */}
          <line x1="42" y1="300" x2="678" y2="300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="42" y1="292" x2="42" y2="308" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="678" y1="292" x2="678" y2="308" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <text x="360" y="322" textAnchor="middle">
            4 572 mm
          </text>

          {/* height dimension */}
          <line x1="18" y1="64" x2="18" y2="270" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="10" y1="64" x2="26" y2="64" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="10" y1="270" x2="26" y2="270" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <text x="18" y="170" textAnchor="middle" transform="rotate(-90 18 170)">
            1 322 mm
          </text>
        </g>
      )}
    </svg>
  )
}
