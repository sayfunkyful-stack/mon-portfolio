import DarkVeil from './DarkVeil';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen px-6 flex flex-col justify-between py-6">
      
      {/* Dither background */}


{/* Background */}
<div className="absolute inset-0 z-0 opacity-30" style={{ pointerEvents: 'none' }}>
  <DarkVeil
    hueShift={0}
    noiseIntensity={0}
    scanlineIntensity={0}
    speed={2}
    scanlineFrequency={0}
    warpAmount={0}
  />
</div>
    
        <Navbar />
      
      {/* Espace central vide */}
      <div className="flex-1 relative z-10" />

      {/* Bas de page */}
      <div className="relative z-10 flex justify-between items-end md:flex-row flex-wrap">
        
        {/* Bas gauche — réseaux + boutons */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-13 h-13 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-13 h-13 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="flex gap-4 mb-8 md:mb-0 flex-wrap">
            <a href="#contact"
              className="border border-accent hover:border-white text-accent px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-md bg-black/30 border ">
              Engagez-moi
            </a>
            <a href="/cv.pdf" download
              className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-md bg-black/30 border ">
              Télécharger mon cv
            </a>
          </div>
        </div>

        {/* Bas droite — stats */}
        <div className="grid grid-cols-3 gap-10 bg-[#0d0d1a] border border-gray-800 rounded-2xl px-6 py-6 backdrop-blur-md bg-black/30 border border-white/20 ">
          {[
            { value: "5+", label: "Expériences" },
            { value: "20+", label: "Projets réalisés" },
            { value: "80+", label: "Clients contents" },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <p className="text-accent text-xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1 wrap-break-word">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}