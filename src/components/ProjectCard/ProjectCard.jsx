import { Link } from 'react-router-dom'

function ProjectCard({ title, description, path, accentColor }) {
  return (
    <article style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#f8fafc' }}>{title}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{description}</p>
      <Link to={path} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: accentColor, fontWeight: '600', fontSize: '0.95rem' }}>
        Acessar Projeto →
      </Link>
    </article>
  )
}

export default ProjectCard