import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Legal from './components/Legal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Legal />
      <Footer />
    </div>
  )
}
