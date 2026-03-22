import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { projects } from "./projects"

const filters = ["All", "Website Design", "App Desktop"]

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

  const navigateProject = (dir) => {
    const idx = filtered.findIndex(p => p.slug === selected.slug)
    const next = filtered[(idx + dir + filtered.length) % filtered.length]
    setSelected(next)
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
              className="bg-[#111] rounded-2xl aspect-video overflow-hidden relative cursor-pointer hover:opacity-80 transition-opacity"
            >
              {project.images[0] ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-end p-4">
                  <div className="flex justify-between w-full text-sm text-gray-500">
                    <span>{project.title}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
              )}
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

            {/* Navigation prev/next */}
            <div className="flex items-center justify-between mb-6 flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigateProject(-1)}
                className="flex items-center gap-2 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-400 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                ← Projet précédent
              </button>
              <span className="text-gray-600 text-xs">
                {filtered.findIndex(p => p.slug === selected.slug) + 1} / {filtered.length}
              </span>
              <button
                onClick={() => navigateProject(1)}
                className="flex items-center gap-2 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-400 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                Projet suivant →
              </button>
            </div>

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