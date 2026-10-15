import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Viajare from './pages/Viajare/Viajare.jsx'
import Nexcent from './pages/Nexcent/Nexcent.jsx'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viajare" element={<Viajare />} />
        <Route path="/nexcent" element={<Nexcent />} />
      </Routes>
    </div>
  )
}

export default App