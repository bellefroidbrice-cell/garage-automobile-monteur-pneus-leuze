import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Tarifs from './components/Tarifs.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Legal from './components/Legal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <Header />
      <Hero />
      <Services />
      <Tarifs />
      <About />
      <Reviews />
      <Contact />
      <Legal />
      <Footer />
    </div>
  )
}
