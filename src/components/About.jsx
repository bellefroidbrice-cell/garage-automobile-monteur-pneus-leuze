import Logo from './Logo.jsx'
import { BUSINESS } from '../data.js'

export default function About() {
  return (
    <section id="about" className="bg-[#111113] py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <Logo className="w-12 h-12 mx-auto" />

        <h2 className="mt-6 font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
          À propos de {BUSINESS.name}
        </h2>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/70">
          {BUSINESS.name} est votre garage de confiance à Eghezée (Leuze), spécialisé dans le
          pneu. Notre équipe vous accueille pour la vente de pneus neufs et d&apos;occasion, le
          montage, le démontage et la géométrie, avec des marques reconnues sur le marché.
          Nous mettons un point d&apos;honneur à vous conseiller le bon pneu au bon prix, pour
          rouler en toute sécurité.
        </p>
      </div>
    </section>
  )
}
