import LogoLoop from './LogoLoop'

const clientLogos = [
  { src: "/public/images/logo-aph.png", alt: "APH" },
  { src: "/public/images/logo-atelier-lumiere.png", alt: "Atelier Lumière" },
  { src: "/public/images/logo-dessindigo.png", alt: "Dessin Digo" },
  { src: "/public/images/logo-digimar.png", alt: "DigiMar" },
  { src: "/public/images/logo-hmonster.png", alt: "HMonster" },
  { src: "/public/images/logo-karting-vuiteboeuf.png", alt: "Karting Vuiteboeuf" },
  { src: "/public/images/logo-mon-esprit.png", alt: "Mon Esprit" },
  { src: "/public/images/logo-mybeaudy.png", alt: "MyBeaudy" },
]

export default function Clients() {
  return (
    <section className="bg-bg-tertiary text-white py-12 px-6 text-center align-middle content-center">
      <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={clientLogos}
          speed={80}
          direction="left"
          logoHeight={45}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Clients"
        />
      </div>
    </section>
  )
}