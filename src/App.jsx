import { Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import Clients from './Clients'
import Tools from './Tools'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Me from './Me'
import ProjectPage from './ProjectPage'
import Footer from './Footer'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
     <Hero />
      <Clients />
      <Tools />
      <Portfolio />
      <About />
      <Me />
      <Contact />
      <Footer />
        </>
      } />
      <Route path="/projet/:slug" element={<ProjectPage />} />
    </Routes>
  )
}