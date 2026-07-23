import TireIcon from './TireIcon.jsx'
import { BUSINESS } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D] border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <div className="flex items-center gap-2 text-white/80">
          <TireIcon className="w-5 h-5 text-orange-500" />
          <span className="font-display uppercase tracking-wide">{BUSINESS.name}</span>
        </div>
        <p>
          {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
        </p>
        <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
      </div>
    </footer>
  )
}
