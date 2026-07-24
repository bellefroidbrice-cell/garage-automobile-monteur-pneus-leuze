import { SPECS } from '../data.js'

export default function Specs() {
  return (
    <section id="specs" className="bg-[#0B0B0D] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-normal tracking-tight text-white md:text-4xl">
          Caractéristiques
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center"
            >
              <p className="text-2xl font-normal text-white md:text-3xl">{spec.value}</p>
              <p className="mt-1 text-sm font-light text-white/60">{spec.label}</p>
              {spec.detail && <p className="mt-1 text-xs font-light text-white/40">{spec.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
