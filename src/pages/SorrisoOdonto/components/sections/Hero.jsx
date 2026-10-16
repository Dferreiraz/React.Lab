import React from 'react';
import { Button } from '../common/Button';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">A SUA SAÚDE EM PRIMEIRO LUGAR</span>
          <h1 className="hero-title">
            Porque Seu Sorriso É <span className="text-primary">Precioso</span>
          </h1>
          <p className="hero-description">
            Odontologia completa, acessível e de alta qualidade. Oferecemos 
            tratamentos modernos com equipamentos de ponta para garantir o seu 
            bem-estar e a beleza do seu sorriso.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg">Agendar Consulta</Button>
            <Button variant="outline" size="lg">Nossos Serviços</Button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder">
             <div className="hero-image-overlay"></div>
          </div>
          {/* Floating elements for aesthetic */}
          <div className="floating-card top-left">
            <div className="icon-wrapper">⭐</div>
            <div>
              <p className="bold">4.9/5</p>
              <p className="small">Avaliações</p>
            </div>
          </div>
          <div className="floating-card bottom-right">
            <div className="icon-wrapper">👩‍⚕️</div>
            <div>
              <p className="bold">+4.000</p>
              <p className="small">Profissionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}