const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Je conçois et développe des interfaces modernes",
    text: "De la maquette au déploiement, je transforme des designs en expériences web fluides et performantes — HTML, CSS, JavaScript et frameworks modernes comme React ou Vue.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    title: "Je donne vie aux maquettes avec précision",
    text: "Maîtrise de Figma et des systèmes de design, intégration pixel-perfect, accessibilité et responsive design : chaque détail compte pour que l'interface soit aussi belle que fonctionnelle.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "Je code propre, rapide et maintenable",
    text: "Code structuré, bonnes pratiques Git, optimisation des performances (Core Web Vitals) et compatibilité cross-browser : je livre du front-end qui tient dans le temps.",
  },
]

export default function About() {
  return (
    <section className="bg-linear-to-bl from-gray-900 from-10% to-black text-white py-24 px-6 text-center md:px-24 lg:px-48 ">
      <h2 className="text-4xl font-bold mb-12">À mon propos</h2>
      <p className="text-gray-400 mb-24">
        Des créations sur mesure, au service d'une image forte et d'un contenu maîtrisé.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-30 ">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-accent">
              {card.icon}
            </div>
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
