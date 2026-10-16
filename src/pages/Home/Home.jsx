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
  },
  {
    title: 'SenaiLivre',
    description: 'Projeto de e-commerce desenvolvido durante o curso de Desenvolvedor Front-End no SENAI Suíço-Brasileiro, criado para praticar consumo de APIs, integração de dados e desenvolvimento de interfaces web.',
    path: '/senai-livre',
    accentColor: '#f97316'
  },
  {
    title: 'Consulta de CEP',
    description: 'Aplicação desenvolvida durante o curso de Desenvolvedor Front-End no SENAI Suíço-Brasileiro, com foco no consumo e integração de API para consulta de CEP.',
    path: '/consulta-cep',
    accentColor: '#0ea5e9'
  },
  {
    title: 'Sorriso Odonto',
    description: 'Projeto de portfólio desenvolvido durante o curso de IA Generativa Google Antigravity, com foco na criação de um website moderno, responsivo e intuitivo para uma clínica odontológica.',
    path: '/sorriso-odonto',
    accentColor: '#00b4d8'
  },
  {
    title: 'SaaS Pro',
    description: 'Projeto de aprendizado criado para explorar a construção de plataformas SaaS modernas, estruturação de dashboards, gerenciamento de layouts administrativos e componentes reutilizáveis.',
    path: '/saas-pro',
    accentColor: '#3b82f6'
  },
  {
    title: 'TechSolutions',
    description: 'Site institucional moderno e responsivo para serviços de assistência técnica.',
    path: '/techsolutions',
    accentColor: '#10b981'
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