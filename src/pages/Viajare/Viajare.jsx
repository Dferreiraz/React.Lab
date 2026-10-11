import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import ExperienceGrid from './components/ExperienceGrid/ExperienceGrid.jsx'
import DestinationGrid from './components/DestinationGrid/DestinationGrid.jsx'
import PackageGrid from './components/PackageGrid/PackageGrid'
import ProcessSection from './components/ProcessSection/ProcessSection'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import FinalCta from './components/FinalCta/FinalCta'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import Footer from './components/Footer/Footer.jsx'

function Viajare() {
    return (
        <div className="viajare-app">
            <Header />
            <main>
                <Hero />
                <ExperienceGrid />
                <DestinationGrid />
                <PackageGrid />
                <ProcessSection />
                <BenefitsSection />
                <TestimonialSlider />
                <FinalCta />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

export default Viajare