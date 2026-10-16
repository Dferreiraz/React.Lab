import React from 'react';
import { Button } from '../common/Button';
import { Send } from 'lucide-react';
import './Newsletter.css';

export function Newsletter() {
  return (
    <section className="newsletter" id="contato">
      <div className="container newsletter-container">
        <h3 className="newsletter-title">Receba novidades e dicas de saúde bucal</h3>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Seu nome completo" className="newsletter-input" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Digite seu e-mail" className="newsletter-input" required />
          </div>
          <Button variant="primary" size="lg" className="newsletter-btn" type="submit">
            Inscrever-se <Send size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
}