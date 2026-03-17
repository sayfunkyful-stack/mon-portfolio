import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between relative rounded-full backdrop-blur-md bg-black/30 border border-white/20 md:pr-16 ">
      {/* Logo */}
      <img src="/logo.svg" alt="Logo" className="w-8 h-8" />

      {/* Liens desktop */}
      <div className="hidden md:flex gap-12">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projets</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>

      {/* Bouton burger — mobile uniquement */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Menu mobile */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-8 py-10 transition-all duration-300 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-lg transition-colors">À propos</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-lg transition-colors">Projets</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-lg transition-colors">Contact</a>
      </div>
    </nav>
  )
}
