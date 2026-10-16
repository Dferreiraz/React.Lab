import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Viajare from './pages/Viajare/Viajare.jsx'
import Nexcent from './pages/Nexcent/Nexcent.jsx'
import AgencyWeb from './pages/AgencyWeb/AgencyWeb.jsx'
import SenaiLivre from './pages/SenaiLivre/SenaiLivre.jsx' // <-- Nova importação

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viajare" element={<Viajare />} />
      <Route path="/nexcent" element={<Nexcent />} />
      <Route path="/agency-web" element={<AgencyWeb />} />
      <Route path="/senai-livre" element={<SenaiLivre />} /> {/* <-- Nova rota */}
    </Routes>
  )
}

export default App