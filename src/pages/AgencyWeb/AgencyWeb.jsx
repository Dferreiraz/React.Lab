import { Header } from './components/Header/Header.jsx'
import { Main } from './components/Main/Main.jsx'
import { Services } from './components/Services/Services.jsx'
import { Details } from './components/Details/Details.jsx'
import { Benefit } from './components/Benefit/Beneficio.jsx'
import { Company } from './components/Company/Company.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import './agencyweb-global.css'

function AgencyWeb() {
  return (
    <div className="agencyweb-app">
      <Header />
      <Main />
      <Services />
      <Details />
      <Benefit />
      <Company />
      <Contact />
      <Footer />
    </div>
  )
}

export default AgencyWeb