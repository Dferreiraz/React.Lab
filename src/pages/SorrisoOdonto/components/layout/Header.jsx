import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Sorriso Odonto</span>
        </div>
        
        <nav className="desktop-nav">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#depoimentos" className="nav-link">Depoimentos</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        <div className="header-actions">
          <Button variant="primary">Agende sua Consulta</Button>
        </div>
      </div>
    </header>
  );
}