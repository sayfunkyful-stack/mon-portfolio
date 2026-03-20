import { SiFacebook, SiYoutube, SiWhatsapp, SiInstagram, SiX } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 md:px-48 py-16">

      {/* Collaborons */}


      {/* Séparateur */}
      <div className="border-t border-gray-800 mb-12" />

      {/* Contenu footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + description + réseaux */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Médiamaticien spécialisé en design, développement front-end et marketing digital. Basé en Suisse romande.
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-accent transition-colors"><SiFacebook /></a>
            <a href="#" className="hover:text-accent transition-colors"><SiYoutube /></a>
            <a href="#" className="hover:text-accent transition-colors"><SiWhatsapp /></a>
            <a href="#" className="hover:text-accent transition-colors"><SiInstagram /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-accent font-semibold mb-6">Navigation</h3>
          <ul className="flex flex-col gap-4 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="/Robin_Schweizer_CV_Front_end_Dev.pdf" download className="hover:text-white transition-colors">CV</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projets</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-accent font-semibold mb-6">Contact</h3>
          <ul className="flex flex-col gap-4 text-gray-300 text-sm">
            <li><a href="mailto:robinschweizer@outlook.com" className="hover:text-white transition-colors">robinschweizer@outlook.com</a></li>
          </ul>
        </div>
      </div>

      {/* Séparateur bas */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <span>Copyright © 2026 Robin Schweizer. Tous droits réservés.</span>

      </div>

    </footer>
  )
}