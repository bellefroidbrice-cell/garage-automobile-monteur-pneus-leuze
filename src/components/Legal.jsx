import { BUSINESS, LEGAL } from '../data.js'

export default function Legal() {
  return (
    <section id="mentions-legales" className="bg-[#0B0B0D] py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display uppercase text-sm tracking-widest text-orange-500">
          Mentions légales
        </h2>
        <div className="mt-3 text-xs leading-relaxed text-white/40 space-y-1">
          <p>
            {BUSINESS.name} — {LEGAL.legalForm}
          </p>
          <p>Numéro d&apos;entreprise (BCE/TVA) : {LEGAL.registrationNumber}</p>
          <p>
            Siège : {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
          </p>
          <p>Responsable de publication : {LEGAL.publisher}</p>
        </div>
      </div>
    </section>
  )
}
