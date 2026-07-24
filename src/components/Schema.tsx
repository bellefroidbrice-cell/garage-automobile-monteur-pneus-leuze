import GT3RSBlueprint from './GT3RSBlueprint.tsx'
import { DIMENSIONS } from '../data.js'

export default function Schema() {
  return (
    <section id="schema" className="border-t border-white/10 bg-[#111113] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-normal tracking-tight text-white md:text-4xl">
          Schéma technique
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm font-light text-white/50">
          Vue de profil stylisée, à titre illustratif — dimensions constructeur indicatives.
        </p>

        <div className="mt-10 text-white/90">
          <GT3RSBlueprint className="mx-auto h-auto w-full max-w-4xl" showDimensions />
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {DIMENSIONS.map((dim) => (
            <div key={dim.label} className="text-center">
              <p className="text-lg font-normal text-white md:text-xl">{dim.value}</p>
              <p className="mt-1 text-xs font-light text-white/50">{dim.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
