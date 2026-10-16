import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Viajare from './pages/Viajare/Viajare.jsx'
import Nexcent from './pages/Nexcent/Nexcent.jsx'
import AgencyWeb from './pages/AgencyWeb/AgencyWeb.jsx'
import SenaiLivre from './pages/SenaiLivre/SenaiLivre.jsx'
import ConsultaCep from './pages/ConsultaCep/ConsultaCep.jsx'
import SorrisoOdonto from './pages/SorrisoOdonto/SorrisoOdonto.jsx'
import SaaSPro from './pages/SaaSPro/SaaSPro.jsx' 
import TechSolutions from './pages/TechSolutions/TechSolutions.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viajare" element={<Viajare />} />
      <Route path="/nexcent" element={<Nexcent />} />
      <Route path="/agency-web" element={<AgencyWeb />} />
      <Route path="/senai-livre" element={<SenaiLivre />} />
      <Route path="/consulta-cep" element={<ConsultaCep />} />
      <Route path="/sorriso-odonto" element={<SorrisoOdonto />} />
      <Route path="/saas-pro" element={<SaaSPro />} />
      <Route path="/techsolutions" element={<TechSolutions />} />
    </Routes>
  )
}

export default App