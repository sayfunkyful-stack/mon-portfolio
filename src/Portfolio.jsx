import { useState } from "react"

const projects = [
  {
    title: "Site vitrine — EMBERA Candles",
    description: "Conception et développement d'un site vitrine pour une marque de bougies artisanales suisse. Design system complet, responsive et optimisé SEO.",
    year: "2024",
    role: "Designer & Développeur Front-end",
    category: "Website Design",
  },
  {
    title: "Identité de marque — Digimar",
    description: "Création d'une identité visuelle complète pour un projet de marketing digital : logo, charte graphique, templates et système de design.",
    year: "2024",
    role: "Designer",
    category: "Branding",
  },
  {
    title: "Application web — Mon CV",
    description: "Application web permettant d'analyser un CV via l'API Claude. Interface utilisateur soignée, backend Node.js et génération de recommandations personnalisées.",
    year: "2024",
    role: "Développeur Full-stack",
    category: "App Desktop",
  },
]

const filters = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"]

export default function Portfolio() {
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Portfolio</h2>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
              active === f
                ? "bg-accent text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:bg-[#222]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projets */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {filtered.map((project, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image placeholder */}
            <div className="bg-[#111] rounded-2xl aspect-video flex items-end p-4">
              <div className="flex justify-between w-full text-sm text-gray-500">
                <span>{project.title}</span>
                <span>{project.category}</span>
              </div>
            </div>

            {/* Infos */}
            <div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Project Info</p>
              <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                <span className="text-gray-400">Year</span>
                <span>{project.year}</span>
              </div>
              <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                <span className="text-gray-400">Role</span>
                <span>{project.role}</span>
              </div>
              <div className="border-t border-gray-800 pt-6 flex gap-6 mt-2">
                <a href="#" className="text-accent underline text-sm font-semibold">LIVE DEMO ↗</a>
                <a href="#" className="text-accent underline text-sm font-semibold">SEE ON GITHUB ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}