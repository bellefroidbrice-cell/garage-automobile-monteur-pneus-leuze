import TireIcon from './TireIcon.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0B0D] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white text-center">
          Nos services
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-orange-500/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10">
                <TireIcon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="mt-5 font-display uppercase text-xl tracking-wide text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
