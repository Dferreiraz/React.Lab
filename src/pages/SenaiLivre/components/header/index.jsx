import LogoGithub from '../../assets/github-icon.svg'
import './style.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://github.com/Dferreiraz" target="_blank" rel="noopener noreferrer">
          Davi Ferreira
          <img src={LogoGithub} alt="Logo Github" />
        </a>
      </nav>
    </header>
  )
}