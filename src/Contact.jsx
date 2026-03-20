import { useState } from "react"

const subjects = ["Développement web", "Design", "Branding", "Autre"]

export default function Contact() {
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", sujet: "", disponibilite: "", message: ""
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Nom: ${form.nom}\nTéléphone: ${form.telephone}\nDisponibilité: ${form.disponibilite}\nSujet: ${form.sujet}\n\n${form.message}`
    window.location.href = `mailto:robinschweizer@outlook.com?subject=${encodeURIComponent(form.sujet || 'Contact depuis le portfolio')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 text-center md:px-24 lg:px-48 ">
      <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
      <p className="text-gray-400 mb-16">
        Je réponds généralement sous 48 heures, parfois plus rapidement si je suis disponible.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange}
          className="bg-[#111] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500" />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="bg-[#111] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500" />
        <input name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange}
          className="bg-[#111] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500" />
        <select name="sujet" value={form.sujet} onChange={handleChange}
          className="bg-[#111] rounded-xl px-5 py-4 text-gray-500 outline-none focus:ring-1 focus:ring-blue-500">
          <option value="">Sujet</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <input name="disponibilite" placeholder="Disponibilité" value={form.disponibilite} onChange={handleChange}
          className="bg-[#111] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500" />
        <textarea name="message" placeholder="Votre message..." value={form.message} onChange={handleChange} rows={5}
          className="bg-[#111] rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500 resize-none" />
        <button type="submit" className="col-span-1 md:col-span-2 mt-4 border border-gray-600 hover:border-white text-white px-10 py-3 rounded-xl font-medium transition-colors">
          Envoyer
        </button>
      </form>
    </section>
  )
}