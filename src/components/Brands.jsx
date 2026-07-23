import { BRANDS } from '../data.js'

export default function Brands() {
  return (
    <section id="marques" className="bg-[#111113] py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
          Marques partenaires
        </h2>
        <p className="mt-3 text-sm text-white/50">
          Un large choix de marques de pneus, pour tous les budgets.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
