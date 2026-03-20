import { useState } from "react"
import { useNavigate } from "react-router-dom"


const projects = [
  {
    slug: "embera-candles",
    title: "Site vitrine — EMBERA Candles",
    description: "Conception et développement d'un site vitrine pour une marque de bougies artisanales suisse. Design system complet, responsive et optimisé SEO.",
    longDescription: "Projet complet de A à Z — de la définition de l'identité visuelle jusqu'au déploiement. Création d'un design system avec tokens de couleurs, typographies et composants réutilisables. Intégration d'une boutique en ligne avec Stripe et optimisation des Core Web Vitals pour un score Lighthouse supérieur à 90.",
    year: "2024",
    role: "Designer & Développeur Front-end",
    category: "Website Design",
    stack: ["React", "Tailwind", "Vite", "Stripe"],
    images: [null, null, null],
  },
  {
    slug: "digimar",
    title: "Identité de marque — Digimar",
    description: "Création d'une identité visuelle complète pour un projet de marketing digital.",
    longDescription: "Développement d'une identité de marque cohérente incluant logo, palette de couleurs, typographies et guidelines d'usage. Déclinaison sur tous les supports : réseaux sociaux, documents, site web. Système de design documenté pour assurer la cohérence visuelle à long terme.",
    year: "2024",
    role: "Designer",
    category: "Branding",
    stack: ["Figma", "Illustrator", "Photoshop"],
    images: [null, null],
  },
  {
    slug: "mon-cv",
    title: "Application web — Mon CV",
    description: "Application web permettant d'analyser un CV via l'API Claude.",
    longDescription: "Application full-stack permettant d'uploader un CV en PDF et d'obtenir une analyse détaillée via l'API Claude d'Anthropic. Interface soignée avec retour en temps réel, backend Node.js avec gestion des fichiers, et génération de recommandations personnalisées selon le poste visé.",
    year: "2024",
    role: "Développeur Full-stack",
    category: "App Desktop",
    stack: ["React", "Node.js", "Express", "Claude API"],
    images: [null, null],
  },
]

const filters = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"]

export default function Portfolio() {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const navigate = useNavigate()

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

  const openOverlay = (project) => {
    setSelected(project)
    setActiveImage(0)
  }

  const closeOverlay = () => {
    setSelected(null)
    setActiveImage(0)
  }
  

  return (
    <section id="projects" className="bg-black text-white py-24 px-6 md:px-24 lg:px-48">
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
      <div className="flex flex-col gap-24">
        {filtered.map((project, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Image cliquable */}
            <div
              onClick={() => openOverlay(project)}
              className="bg-[#111] rounded-2xl aspect-video flex items-end p-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
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
              <div className="border-t border-gray-800 pt-6 mt-2">
                <button
                  onClick={() => openOverlay(project)}
                  className="text-accent border border-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-black transition-colors"
                >
                  Voir le projet
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay modale */}
      {selected && (

              

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6 py-12 overflow-y-auto"
          onClick={closeOverlay}
        >
          <div className="h-full"><div
            className="bg-[#0f0f0f] border border-gray-800 rounded-2xl w-full max-w-4xl p-8 relative  "
            onClick={e => e.stopPropagation()}
          >
            {/* Fermer */}
            <button
              onClick={closeOverlay}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl transition-colors"
            >
              ✕
            </button>

            {/* Image principale */}
            <div className="bg-[#1a1a1a] rounded-xl aspect-video w-full mb-4 flex items-center justify-center">
              {selected.images[activeImage] ? (
                <img
                  src={selected.images[activeImage]}
                  alt={selected.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-gray-600 text-sm">Image {activeImage + 1}</span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mb-8">
              {selected.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`bg-[#1a1a1a] rounded-lg aspect-video w-20 flex items-center justify-center transition-all ${
                    activeImage === i
                      ? "border-2 border-accent"
                      : "border border-gray-800 opacity-50 hover:opacity-100"
                  }`}
                >
                  <span className="text-gray-600 text-xs">{i + 1}</span>
                </button>
              ))}
            </div>

            {/* Contenu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">

              {/* Description */}
              <div className="md:col-span-2">
                <span className="text-accent text-xs uppercase tracking-widest">{selected.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{selected.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{selected.longDescription}</p>
              </div>

              {/* Infos + Stack */}
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Project Info</p>
                <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                  <span className="text-gray-400">Year</span>
                  <span>{selected.year}</span>
                </div>
                <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                  <span className="text-gray-400">Role</span>
                  <span>{selected.role}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 mt-2">
                  <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton page complète 
                <button
                  onClick={() => {
                    closeOverlay()
                    navigate(`/projet/${selected.slug}`)
                  }}
                  className="mt-6 w-full text-accent border border-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-black transition-colors"
                >
                  Voir la page complète
                </button>*/}
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </section>
  )
}