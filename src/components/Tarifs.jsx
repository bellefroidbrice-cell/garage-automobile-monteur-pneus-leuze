import { TARIFS } from '../data.js'

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-[#0B0B0D] py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white text-center">
          Tarifs
        </h2>
        <p className="mt-3 text-center text-sm text-white/50">Tous nos prix sont TTC (toute taxe comprise).</p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TARIFS.map(({ category, note, items }) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
            >
              <h3 className="font-display uppercase text-lg tracking-wide text-white">
                {category}
              </h3>
              {note && <p className="mt-1 text-xs text-white/40">{note}</p>}

              {items.length > 0 && (
                <table className="mt-4 w-full text-sm text-white/80">
                  <tbody>
                    {items.map(({ label, price }) => (
                      <tr key={label} className="border-b border-white/10 last:border-0">
                        <td className="py-2 pr-4">{label}</td>
                        <td className="py-2 text-right font-medium text-orange-500 whitespace-nowrap">
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
