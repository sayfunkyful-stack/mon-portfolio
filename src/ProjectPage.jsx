import { useParams, useNavigate } from "react-router-dom"
import { projects } from "./projects"

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="bg-gradient-to-r from-accent from-10% to-gray-900 to-100% min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400">Projet introuvable.</p>
        <button
          onClick={() => navigate("/")}
          className="text-accent border border-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-black transition-colors"
        >
          Retour au portfolio
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-t from-black from-10% to-gray-900 text-white min-h-screen px-6 md:px-24 lg:px-48 py-24 ">


      {/* Retour */}
      <button
        onClick={() => navigate("/")}
        className="text-gray-400 hover:text-white text-sm mb-12 flex items-center gap-2 transition-colors"
      >
        ← Retour
      </button>




      {/* Header projet */}
      <div className="mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">{project.category}</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">{project.title}</h1>
        <p className="text-gray-400 text-lg max-w-2xl">{project.description}</p>
      </div>

      
            {/* Infos projet */}<div className="grid  gap-12">
      <div className="grid grid-cols-1 gap-16 p-12 bg-black bg-black text-white p-12 flex items-center  rounded-2xl justify-between relative backdrop-blur-md bg-black/30 border border-white/20">
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Project Info</p>
          <div className="border-t border-gray-800 py-4 flex justify-between text-sm">
            <span className="text-gray-400">Year</span>
            <span>{project.year}</span>
          </div>
          <div className="border-t border-gray-800 py-4 flex justify-between text-sm">
            <span className="text-gray-400">Role</span>
            <span>{project.role}</span>
          </div>
          <div className="border-t border-gray-800 py-4 flex justify-between text-sm">
            <span className="text-gray-400">Category</span>
            <span>{project.category}</span>
          </div>
        </div>
      </div>

      {/* Image principale */}
      <div className="bg-[#111] rounded-2xl aspect-video w-full mb-16 flex items-center justify-center overflow-hidden">
        {project.images[0] ? (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-600">Image du projet</span>
        )}
      </div>
</div>


     <div className="mb-16">
<h2 className="text-3xl font-bold mb-6 max-w-2xl">{project.subtitle}</h2>
        <p className="text-gray-400 text-lg max-w-2xl">{project.longDescription}</p>
      </div>

    </div>

    
  )
}