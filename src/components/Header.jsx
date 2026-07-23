import Logo from './Logo.jsx'
import { BUSINESS } from '../data.js'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Horaires', href: '#contact' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Logo className="w-9 h-9" />
          <span className="font-display text-lg md:text-xl tracking-wide uppercase">
            {BUSINESS.name}
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BUSINESS.phoneHref}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors duration-200"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
