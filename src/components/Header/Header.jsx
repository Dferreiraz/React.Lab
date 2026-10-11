import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">⚛️</span>
          <span>React.Lab</span>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Início
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header