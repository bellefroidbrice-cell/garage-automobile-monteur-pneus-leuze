import TireIcon from './TireIcon.jsx'
import { BUSINESS } from '../data.js'
import heroImage from '../assets/garage-entree.jpeg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0D] min-h-[560px] md:min-h-[680px] flex items-center">
      <img
        src={heroImage}
        alt="Entrée du garage Teker Pneus à Eghezée"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/90 via-[#0B0B0D]/80 to-[#0B0B0D]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-32 flex flex-col items-center text-center w-full">
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90">
          <TireIcon className="w-4 h-4 text-orange-500" />
          Garage spécialisé pneus à Eghezée (Leuze)
        </div>

        <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white max-w-3xl">
          Roulez en toute sécurité, à prix juste
        </h1>

        <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/60">
          Vente de pneus neufs et d&apos;occasion, montage, démontage et géométrie — à Eghezée
          (Leuze), du lundi au samedi.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="w-full sm:w-auto rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0px_4px_16px_rgba(249,115,22,0.35)] hover:bg-orange-400 transition-colors duration-300"
          >
            Appeler {BUSINESS.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-300"
          >
            Nous trouver
          </a>
        </div>
      </div>
    </section>
  )
}
