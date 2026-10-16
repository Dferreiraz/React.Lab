import './style.css'

export const Footer = () => {
  return (
    <footer className="senailivre-footer">
      <nav>
        <p>© 2026 SenaiLivre - Desenvolvido por Davi Ferreira</p>
        <a 
          href="https://fakestoreapi.com/docs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="api-link"
        >
          Documentação da Fake Store API ↗
        </a>
      </nav>
    </footer>
  )
}