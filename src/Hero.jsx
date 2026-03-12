export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] px-2 flex flex-col justify-between py-24 md:px-24">
      {/* Espace central vide */}
      <div className="flex-1" />

      {/* Bas de page */}
      <div className="flex justify-between items-end md:flex-row flex-wrap">
        {/* Bas gauche — réseaux + boutons */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <img src="https://cdn.simpleicons.org/linkedin/white" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Engagez-moi
            </a>
            <a href="/cv.pdf" download
              className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-full font-medium transition-colors">
              Télécharger mon cv
            </a>
          </div>
        </div>

        {/* Bas droite — stats */}
        <div className="bg-[#0d0d1a] border border-gray-800 rounded-2xl px-6 py-6 flex gap-6">
          {[
            { value: "5+", label: "Expériences" },
            { value: "20+", label: "Projets réalisés" },
            { value: "80+", label: "Clients contents" },
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i < 2 ? "border-r border-gray-700 pr-10" : ""}`}>
              <p className="text-blue-400 text-xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}