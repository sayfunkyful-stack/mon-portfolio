
const cards = [
  {
    
    title: "Je conçois et développe des interfaces modernes",
    text: "De la maquette au déploiement, je transforme des designs en expériences web fluides et performantes — HTML, CSS, JavaScript et frameworks modernes comme React ou Vue.",
  },
  {
   
    title: "Je donne vie aux maquettes avec précision",
    text: "Maîtrise de Figma et des systèmes de design, intégration pixel-perfect, accessibilité et responsive design : chaque détail compte pour que l'interface soit aussi belle que fonctionnelle.",
  },
  {
   
    title: "Je code propre, rapide et maintenable",
    text: "Code structuré, bonnes pratiques Git, optimisation des performances (Core Web Vitals) et compatibilité cross-browser : je livre du front-end qui tient dans le temps.",
  },
]

export default function About() {
  return (
    <section className="bg-linear-to-bl from-gray-900 from-10% to-black text-white py-24 px-10 text-center">
      <h2 className="text-4xl font-bold mb-12">À mon propos</h2>
      <p className="text-gray-400 mb-24">
        Des créations sur mesure, au service d'une image forte et d'un contenu maîtrisé.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-30 ">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col items-center gap-6">

            <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-accent">
            </div>

            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}