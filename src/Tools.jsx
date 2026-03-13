const tools = [
  { name: "VSC", category: "Codage", icon: "https://cdn.simpleicons.org/visualstudiocode/white" },
  { name: "Javascript", category: "Programmation", icon: "https://cdn.simpleicons.org/javascript/white" },
  { name: "HTML", category: "Balisage", icon: "https://cdn.simpleicons.org/html5/white" },
  { name: "CSS", category: "Design", icon: "https://cdn.simpleicons.org/css3/white" },
  { name: "React", category: "Framework", icon: "https://cdn.simpleicons.org/react/white" },
  { name: "GitHub", category: "Collaboration", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Tailwind", category: "Design", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
  { name: "TypeScript", category: "Typage", icon: "https://cdn.simpleicons.org/typescript/white" },
  { name: "npm", category: "Package manager", icon: "https://cdn.simpleicons.org/npm/white" },
  { name: "Vite", category: "Build tool", icon: "https://cdn.simpleicons.org/vite/white" },
]

export default function Tools() {
  return (
    <section className="bg-gradient-to-r from-black from-10% to-gray-900 to-100% text-white py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Outils</h2>
      <p className="text-gray-400 text-xl mb-16">Technologies avec lesquelles je travaille</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div key={i} className="bg-[#111] rounded-2xl p-6 flex flex-col items-center gap-3">
            <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
            <span className="font-semibold">{tool.name}</span>
            <span className="text-accent text-sm">{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}