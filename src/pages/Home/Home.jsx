import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import './Home.css'

const projects = [
  {
    title: 'Viajare',
    description: 'Agência de turismo com landing page moderna desenvolvido para adquirir conhecimentos sobre as tecnologias e features.',
    path: '/viajare',
    accentColor: '#06b6d4'
  },
  {
    title: 'Nexcent',
    description: 'Landing page SaaS com design limpo desenvolvido durante o curso Desenvolvedor Front-End no SENAI suiço-brasileira.',
    path: '/nexcent',
    accentColor: '#8b5cf6'
  },
  {
    title: 'AgencyWeb',
    description: 'Site institucional de agência de tecnologia, desenvolvido durante o curso Desenvolvedor Front-End no SENAI suiço-brasileira.',
    path: '/agency-web',
    accentColor: '#1090CB' 
  }
]

function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <h1>
              React <span className="highlight">.Lab</span>
            </h1>
            <p className="subtitle">
              Laboratório de desenvolvimento Front-End moderno com React, Vite e CSS Modules.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">React 18</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">React Router</span>
            </div>
          </section>

          <section className="projects-section">
            <h2 className="section-title">Projetos do Laboratório</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.path}
                  title={project.title}
                  description={project.description}
                  path={project.path}
                  accentColor={project.accentColor}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home