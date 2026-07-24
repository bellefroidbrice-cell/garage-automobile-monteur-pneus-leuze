import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { BUSINESS, GOOGLE_REVIEWS } from '../data.js'
import heroImage from '../assets/garage-entree.jpeg'

const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
]

const TOP_BRANDS = ['Michelin', 'Pirelli', 'Bridgestone', 'Continental']

const BRAND_COUNT = 31

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

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B0B0D]">
      <img
        src={heroImage}
        alt="Entrée du garage Teker Pneus à Eghezée"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 md:pt-8 lg:px-20">
        <a href="#" className="flex items-center gap-2 text-white">
          <Logo className="h-8 w-8 md:h-9 md:w-9" />
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

        <a
          href={BUSINESS.phoneHref}
          className="liquid-glass hidden h-10 w-10 items-center justify-center rounded-full md:flex"
        >
          <Phone className="h-5 w-5 text-white/80" strokeWidth={1.5} />
        </a>

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
              <Phone className="h-5 w-5 text-white/80" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-light text-white/60">{BUSINESS.phoneDisplay}</span>
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
              {TOP_BRANDS.map((brand) => (
                <span
                  key={brand}
                  title={brand}
                  className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-orange-500 to-[#0B0B0D] text-[8px] font-semibold text-white sm:h-6 sm:w-6"
                >
                  {brand[0]}
                </span>
              ))}
            </div>
            <span className="text-xs font-light text-white/80 sm:text-sm">
              {BRAND_COUNT}+ grandes marques de pneus en stock
            </span>
          </div>

          <h1
            className="inline text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.05em' }}
          >
            Roulez en sécurité,
            <br />à prix juste
          </h1>

          <p className="mt-4 text-sm font-light text-white/70 sm:mt-5 sm:text-base md:text-lg">
            Vente de pneus, montage, démontage et géométrie à Eghezée.
          </p>

          <a
            href={BUSINESS.phoneHref}
            className="liquid-glass mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 sm:mt-8 sm:px-7 sm:py-3.5"
          >
            Appeler {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div className="flex items-end gap-6 px-5 pb-8 sm:gap-10 sm:px-8 sm:pb-10 md:gap-16 md:px-16 md:pb-14 lg:px-20">
          <div className="flex flex-col gap-2">
            <DotTriangleIcon />
            <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl">
              {BRAND_COUNT}
            </span>
            <span className="text-xs font-light text-white/60 sm:text-sm">Marques de pneus</span>
          </div>

          <div className="flex flex-col gap-2">
            <CheckerGridIcon />
            <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl">
              {GOOGLE_REVIEWS.rating.toLocaleString('fr-BE', { minimumFractionDigits: 1 })}/5
            </span>
            <span className="text-xs font-light text-white/60 sm:text-sm">
              {GOOGLE_REVIEWS.totalReviews} avis Google
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
