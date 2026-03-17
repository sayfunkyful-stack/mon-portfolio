

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-gray-900 to-black text-white min-h-[90vh] px-8 flex flex-col justify-between py-24 lg:px-30">
      {/* Espace central vide */}
      <div className="flex-1" />

      {/* Bas de page */}
      <div className="flex justify-between items-end md:flex-row flex-wrap">
        {/* Bas gauche — réseaux + boutons */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              
            </a>
<a href="https://linkedin.com" target="_blank" rel="noreferrer"
  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
</a>
          </div>
          <div className="flex gap-4 mb-8 md:mb-0 flex-wrap">
            <a href="#contact"
              className="bg-accent hover:bg-accent text-black px-6 py-3 rounded-full font-medium transition-colors">
              Engagez-moi
            </a>
            <a href="/cv.pdf" download
              className="border border-accent hover:border-white text-white px-6 py-3 rounded-full font-medium transition-colors">
              Télécharger mon cv
            </a>
          </div>
        </div>

        {/* Bas droite — stats */}
        <div className="grid grid-cols-3 gap-10 bg-primary border border-bg-secondary rounded-md px-6 py-6 border-width: 1px;">
          {[
            { value: "5+", label: "Expériences" },
            { value: "20+", label: "Projets réalisés" },
            { value: "80+", label: "Clients contents" },
          ].map((stat, i) => (
            <div key={i} className={`text-left ${i < 2 ? "" : ""}`}>
              <p className="text-accent text-xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}