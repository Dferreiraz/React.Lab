import { Header } from "./components/header/index.jsx"
import { Main } from './components/Main/index.jsx'
import { SectionProducts } from "./components/sectionProducts/index.jsx"
import { Footer } from "./components/footer/index.jsx"
import './senailivre-global.css'

function SenaiLivre() {
  return (
    <div className="senailivre-app">
      <Header />
      <Main />
      <SectionProducts />
      <Footer />
    </div>
  )
}

export default SenaiLivre