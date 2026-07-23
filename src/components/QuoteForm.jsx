import { useState } from 'react'
import { BUSINESS } from '../data.js'

const FIELD_CLASS =
  'w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/60 transition-colors duration-200'

export default function QuoteForm() {
  const [form, setForm] = useState({ nom: '', telephone: '', email: '', vehicule: '', message: '' })

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Demande de devis - ${form.nom}`
    const body = [
      `Nom: ${form.nom}`,
      `Téléphone: ${form.telephone}`,
      form.email && `Email: ${form.email}`,
      form.vehicule && `Véhicule: ${form.vehicule}`,
      '',
      'Message:',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-display uppercase text-sm tracking-widest text-orange-500">
        Demander un devis
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Nom complet *"
          value={form.nom}
          onChange={handleChange('nom')}
          className={FIELD_CLASS}
        />
        <input
          type="tel"
          required
          placeholder="Téléphone *"
          value={form.telephone}
          onChange={handleChange('telephone')}
          className={FIELD_CLASS}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange('email')}
          className={FIELD_CLASS}
        />
        <input
          type="text"
          placeholder="Véhicule (marque, modèle)"
          value={form.vehicule}
          onChange={handleChange('vehicule')}
          className={FIELD_CLASS}
        />
      </div>

      <textarea
        required
        rows={4}
        placeholder="Décrivez votre besoin (dimensions de pneus, service souhaité...) *"
        value={form.message}
        onChange={handleChange('message')}
        className={FIELD_CLASS}
      />

      <button
        type="submit"
        className="w-full sm:w-auto rounded-xl bg-orange-500 px-8 py-3 text-sm font-semibold text-white hover:bg-orange-400 transition-colors duration-300"
      >
        Envoyer la demande
      </button>
    </form>
  )
}
