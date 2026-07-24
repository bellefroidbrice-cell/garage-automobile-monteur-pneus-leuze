import { useState } from 'react'
import { Menu, X, Gauge } from 'lucide-react'
import GT3RSBlueprint from './GT3RSBlueprint.tsx'
import { CAR, SPECS } from '../data.js'

const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  { label: 'Caractéristiques', href: '#specs' },
  { label: 'Modèle 3D', href: '#modele-3d' },
]

function DotTriangleIcon() {
  const rows = [2, 3, 4]
  const dots: { top: number; left: number }[] = []
  rows.forEach((count, rowIndex) => {
    const top = 3 + rowIndex * 6
    const spacing = 20 / (count + 1)
    for (let i = 1; i <= count; i++) {
      dots.push({ top, left: spacing * i - 1.25 })
    }
  })

  return (
    <div className="relative h-5 w-5">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute h-[2.5px] w-[2.5px] bg-white/60"
          style={{ top: dot.top, left: dot.left }}
        />
      ))}
    </div>
  )
}

function CheckerGridIcon() {
  return (
    <div className="grid h-5 w-5 grid-cols-3 gap-[2px]">
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        const filled = (row + col) % 2 === 0
        return (
          <span key={i} className={`h-1 w-1 rounded-sm ${filled ? 'bg-white/60' : 'bg-white/0'}`} />
        )
      })}
    </div>
  )
}

export default function HeroGlass() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const powerSpec = SPECS.find((s) => s.label === 'Puissance')
  const zeroToHundred = SPECS.find((s) => s.label === '0 à 100 km/h')

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B0B0D]">
      <div className="absolute inset-0 flex items-center justify-center text-white/90">
        <GT3RSBlueprint className="h-[70%] w-[95%] max-w-5xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/40 to-transparent md:block" />

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 md:pt-8 lg:px-20">
        <a href="#" className="flex items-center gap-2 text-white">
          <Gauge className="h-8 w-8 md:h-9 md:w-9" strokeWidth={1.5} />
        </a>

        <div className="liquid-glass hidden items-center gap-8 rounded-full px-8 py-3 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-opacity duration-200 ${
                i === 0 ? 'text-white' : 'text-white/70 hover:opacity-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="liquid-glass hidden h-10 items-center justify-center rounded-full px-4 text-xs font-semibold tracking-wide text-white/80 md:flex">
          {CAR.generation}
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="liquid-glass relative z-50 h-10 w-10 rounded-full md:hidden"
        >
          <Menu
            className={`absolute inset-0 m-auto h-5 w-5 text-white/80 transition-all duration-300 ${
              menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            className={`absolute inset-0 m-auto h-5 w-5 text-white/80 transition-all duration-300 ${
              menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-10 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ease-out md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col items-center justify-center gap-8 transition-all duration-500 ease-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-medium text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
              <Gauge className="h-5 w-5 text-white/80" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-light text-white/60">
              {CAR.maker} {CAR.name}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 flex h-full flex-col justify-between transition-opacity duration-300 ${
          menuOpen ? 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100' : 'opacity-100'
        }`}
      >
        <div className="mt-14 max-w-2xl px-5 sm:mt-20 sm:px-8 md:mt-28 md:px-16 lg:px-20">
          <div className="liquid-glass mb-5 inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
            <div className="flex -space-x-2">
              {['4.0L', 'NA', 'PDK'].map((tag) => (
                <span
                  key={tag}
                  className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-white/30 to-[#0B0B0D] text-[7px] font-semibold text-white sm:h-6 sm:w-6"
                >
                  {tag[0]}
                </span>
              ))}
            </div>
            <span className="text-xs font-light text-white/80 sm:text-sm">
              {powerSpec?.value} · 0-100 en {zeroToHundred?.value}
            </span>
          </div>

          <h1
            className="inline text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.05em' }}
          >
            {CAR.maker} {CAR.name}
            <br />
            {CAR.tagline}
          </h1>

          <p className="mt-4 text-sm font-light text-white/70 sm:mt-5 sm:text-base md:text-lg">
            Aéro active, flat-six atmosphérique 9 000 tr/min, châssis directement issu de la compétition.
          </p>

          <a
            href="#modele-3d"
            className="liquid-glass mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 sm:mt-8 sm:px-7 sm:py-3.5"
          >
            Voir le modèle 3D
          </a>
        </div>

        <div className="flex items-end gap-6 px-5 pb-8 sm:gap-10 sm:px-8 sm:pb-10 md:gap-16 md:px-16 md:pb-14 lg:px-20">
          <div className="flex flex-col gap-2">
            <DotTriangleIcon />
            <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl">525 ch</span>
            <span className="text-xs font-light text-white/60 sm:text-sm">Puissance atmosphérique</span>
          </div>

          <div className="flex flex-col gap-2">
            <CheckerGridIcon />
            <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl">296 km/h</span>
            <span className="text-xs font-light text-white/60 sm:text-sm">Vitesse maximale</span>
          </div>
        </div>
      </div>
    </section>
  )
}
