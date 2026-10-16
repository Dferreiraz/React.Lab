import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { Specialties } from './components/sections/Specialties.jsx'
import { StatsBanner } from './components/sections/StatsBanner.jsx'
import { Team } from './components/sections/Team.jsx'
import { Newsletter } from './components/sections/Newsletter.jsx'
import './sorrisoodonto-global.css'

function SorrisoOdonto() {
  return (
    // O WRAPPER MÁGICO QUE ISOLA TUDO
    <div className="sorrisoodonto-app">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <StatsBanner />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default SorrisoOdonto