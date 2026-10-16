import logoSenaiLivre from '../../assets/LogoSenaiLivre.png'
import './style.css'

export const Main = () => {
  return (
    <main>
      <img src={logoSenaiLivre} alt="" />
      <div className='content-main'>
        <h1>Bem-vindos ao <span>consumo de API</span> do SENAI livre</h1>
        <p>Aqui você encontra informações sobre os produtos.</p>
        <nav>
          <a href="" className='btn-primary'>Veja agora</a>
          <a href="" className='btn-secondary'>Saiba mais</a>
        </nav>
      </div>
    </main>
  )
}