const tools = [
  { name: "VSC", category: "Codage", icon: null, svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg> },
  { name: "Javascript", category: "Programmation", icon: "https://cdn.simpleicons.org/javascript/white" },
  { name: "HTML", category: "Balisage", icon: "https://cdn.simpleicons.org/html5/white" },
  { name: "CSS", category: "Design", icon: "https://cdn.simpleicons.org/css/white" },
  { name: "React", category: "Framework", icon: "https://cdn.simpleicons.org/react/white" },
  { name: "GitHub", category: "Collaboration", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Tailwind", category: "Design", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
  { name: "TypeScript", category: "Typage", icon: "https://cdn.simpleicons.org/typescript/white" },
  { name: "npm", category: "Package manager", icon: "https://cdn.simpleicons.org/npm/white" },
  { name: "Vite", category: "Build tool", icon: "https://cdn.simpleicons.org/vite/white" },
]

export default function Tools() {
  return (
    <section className="bg-gradient-to-r from-black from-10% to-gray-900 to-100% text-white py-24 px-6 text-center  ">
      <h2 className="text-4xl font-bold mb-4">Outils</h2>
      <p className="text-gray-400 text-xl mb-16">Technologies avec lesquelles je travaille</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div key={i} className="rounded-2xl p-6 flex flex-col items-center gap-3 backdrop-blur-md bg-black/30 border border-white/20">
            {tool.svg ? tool.svg : <img src={tool.icon} alt={tool.name} className="w-12 h-12" />}
            <span className="font-semibold">{tool.name}</span>
            <span className="text-accent text-sm">{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}