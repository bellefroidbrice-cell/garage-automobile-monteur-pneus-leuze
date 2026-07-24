import HeroGlass from './components/HeroGlass.tsx'
import Specs from './components/Specs.jsx'
import Schema from './components/Schema.tsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <HeroGlass />
      <Specs />
      <Schema />
      <Footer />
    </div>
  )
}
