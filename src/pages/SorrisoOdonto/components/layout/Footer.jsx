import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text text-white">Sorriso Odonto</span>
          </div>
          <p className="footer-desc">
            Cuidados odontológicos completos para você e sua família, com atendimento humanizado, profissionais qualificados e foco na saúde e no seu sorriso.
          </p>
          <div className="footer-legal">
            <p>Clínica Odontológica Especializada</p>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Especialidades</h4>
          <ul className="footer-links">
            <li><a href="#">Clínica Geral</a></li>
            <li><a href="#">Ortodontia</a></li>
            <li><a href="#">Implantodontia</a></li>
            <li><a href="#">Endodontia</a></li>
            <li><a href="#">Odontopediatria</a></li>
            <li><a href="#">Periodontia</a></li>
            <li><a href="#" className="link-highlight">Ver todas</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Serviços</h4>
          <ul className="footer-links">
            <li><a href="#">Avaliação odontológica</a></li>
            <li><a href="#">Limpeza e prevenção</a></li>
            <li><a href="#">Clareamento dental</a></li>
            <li><a href="#">Restauração</a></li>
            <li><a href="#">Tratamento de canal</a></li>
            <li><a href="#">Implantes dentários</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Sobre Nós</h4>
          <ul className="footer-links">
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Para empresas</a></li>
            <li><a href="#">Central de ajuda</a></li>
            <li><a href="#">Linha Ética de Cuidado</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sorriso Odonto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}