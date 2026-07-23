import { BUSINESS, HOURS } from '../data.js'
import QuoteForm from './QuoteForm.jsx'

const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}&output=embed`

const MAPS_DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111113] py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white text-center">
          Nous trouver
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display uppercase text-sm tracking-widest text-orange-500">
                Adresse
              </h3>
              <p className="mt-2 text-white/80 leading-relaxed">
                {BUSINESS.addressLine1}
                <br />
                {BUSINESS.addressLine2}
              </p>
              <a
                href={MAPS_DIRECTIONS_HREF}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200"
              >
                Itinéraire →
              </a>
            </div>

            <div>
              <h3 className="font-display uppercase text-sm tracking-widest text-orange-500">
                Contact
              </h3>
              <p className="mt-2 text-white/80 leading-relaxed">
                <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
                <br />
                <a href={BUSINESS.landlineHref} className="hover:text-white transition-colors">
                  {BUSINESS.landlineDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-display uppercase text-sm tracking-widest text-orange-500">
                Horaires
              </h3>
              <table className="mt-2 w-full max-w-xs text-sm text-white/80">
                <tbody>
                  {HOURS.map(({ day, hours }) => (
                    <tr key={day} className="border-b border-white/10 last:border-0">
                      <td className="py-1.5 pr-4 font-medium">{day}</td>
                      <td className="py-1.5 text-white/60">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <QuoteForm />
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[320px]">
            <iframe
              title="Localisation de Teker Pneus"
              src={MAPS_EMBED_SRC}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
