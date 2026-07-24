import { CAR } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0D] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-white/40 md:px-6">
        <p>
          Site de démonstration non-officiel, sans lien avec {CAR.maker}. Marque et modèle cités à titre
          illustratif uniquement.
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
