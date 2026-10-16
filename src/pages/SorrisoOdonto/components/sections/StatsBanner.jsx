import './StatsBanner.css'

const stats = [
  { number: '15+', label: 'Anos de Experiência' },
  { number: '10k+', label: 'Pacientes Atendidos' },
  { number: '25+', label: 'Especialistas' },
  { number: '98%', label: 'Satisfação' }
]

export const StatsBanner = () => {
  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}