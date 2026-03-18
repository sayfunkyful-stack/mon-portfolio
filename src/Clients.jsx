import LogoLoop from './LogoLoop'

const clientLogos = [
  { src: "/images/logo-aph.png", alt: "APH" },
  { src: "/images/logo-atelier-lumiere.png", alt: "Atelier Lumière" },
  { src: "/images/logo-dessindigo.png", alt: "Dessin Digo" },
  { src: "/images/logo-digimar.png", alt: "DigiMar" },
  { src: "/images/logo-hmonster.png", alt: "HMonster" },
  { src: "/images/logo-karting-vuiteboeuf.png", alt: "Karting Vuiteboeuf" },
  { src: "/images/logo-mon-esprit.png", alt: "Mon Esprit" },
  { src: "/images/logo-mybeaudy.png", alt: "MyBeaudy" },
]

export default function Clients() {
  return (
    <section className="bg-bg-tertiary text-white py-12  text-center align-middle content-center" style={{height:'100%'}}>
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
          fadeOutColor="#0f0f0f"
          ariaLabel="Clients"
        />
      </div>
    </section>
  )
}