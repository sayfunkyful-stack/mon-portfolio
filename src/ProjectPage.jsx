import { useParams, useNavigate } from "react-router-dom"

const projects = [
  {
    slug: "embera-candles",
    title: "Site vitrine — EMBERA Candles",
    description: "Conception et développement d'un site vitrine pour une marque de bougies artisanales suisse. Design system complet, responsive et optimisé SEO.",
    year: "2024",
    role: "Designer & Développeur Front-end",
    category: "Website Design",
    subtitle: "Promotional landing page for our favorite show, made with React and Tailwind.",
    paragraphe: "Pour ce projet, j'ai créé un site vitrine élégant et moderne pour EMBERA Candles, une marque de bougies artisanales suisse. J'ai conçu un design system complet, avec une palette de couleurs chaleureuses et des typographies raffinées pour refléter l'esthétique artisanale de la marque. Le site est entièrement responsive, offrant une expérience fluide sur tous les appareils, et optimisé pour le SEO afin d'améliorer la visibilité en ligne de la marque."
  },
  {
    slug: "digimar",
    title: "Identité de marque — Digimar",
    description: "Création d'une identité visuelle complète pour un projet de marketing digital : logo, charte graphique, templates et système de design.",
    year: "2024",
    role: "Designer",
    category: "Branding",
    paragraphe: "Pour Digimar, un projet de marketing digital, j'ai développé une identité visuelle complète qui comprend la création d'un logo distinctif, une charte graphique cohérente, des templates pour les réseaux sociaux et un système de design pour assurer une communication visuelle harmonieuse à travers tous les supports. L'objectif était de créer une image forte et reconnaissable qui reflète les valeurs et l'expertise de Digimar dans le domaine du marketing digital."
  },
  {
    slug: "mon-cv",
    title: "Application web — Mon CV",
    description: "Application web permettant d'analyser un CV via l'API Claude. Interface utilisateur soignée, backend Node.js et génération de recommandations personnalisées.",
    year: "2024",
    role: "Développeur Full-stack",
    category: "App Desktop",
    paragraphe: "J'ai développé une application web innovante qui permet d'analyser un CV en utilisant l'API Claude. L'application offre une interface utilisateur soignée et intuitive, conçue pour faciliter la navigation et l'interaction. Le backend est construit avec Node.js, assurant une performance rapide et fiable. L'application génère des recommandations personnalisées basées sur l'analyse du CV, aidant les utilisateurs à améliorer leur présentation et à maximiser leurs chances de succès dans leurs candidatures."
  },
]

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
      <div className="bg-[#111] rounded-2xl aspect-video w-full mb-16 flex items-center justify-center">
        <span className="text-gray-600">Image du projet</span>
      </div>
</div>


     <div className="mb-16">
<h2 className="text-3xl font-bold mb-6 max-w-2xl">{project.subtitle}</h2>
        <p className="text-gray-400 text-lg max-w-2xl">{project.paragraphe}</p>
      </div>

    </div>

    
  )
}