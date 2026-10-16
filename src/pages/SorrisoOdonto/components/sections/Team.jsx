import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { ChevronRight } from 'lucide-react';
import './Team.css';

export function Team() {
  return (
    <section className="team section-padding" id="sobre">
      <div className="container">
        <SectionTitle 
          title="Nossa Equipe de Especialistas"
          subtitle="Compromisso e Paixão pelo Seu Sorriso"
        />

        <div className="team-member">
          <div className="team-content">
            <h3 className="team-name">Dr. Lucas Almeida — Cirurgião-Dentista</h3>
            <p className="team-bio">
              Especialista em Implantodontia e Reabilitação Oral, <strong>Dr. Lucas atua em odontologia avançada há mais de 15 anos.</strong> Conhecido por seu compromisso com a tecnologia de ponta, 
              ele foi um dos primeiros a adotar escaneamento intraoral e planejamento digital, garantindo
              tratamentos precisos e estética de alto nível.
            </p>
            <Button variant="secondary" className="team-btn">
              Ler mais sobre Dr. Lucas <ChevronRight size={18} />
            </Button>
          </div>
          <div className="team-image-wrapper">
            <div className="team-image-placeholder">
              <p>Placeholder — Foto profissional de um dentista sorrindo, usando jaleco, em consultório odontológico.</p>
            </div>
          </div>
        </div>

        <div className="team-member reverse">
          <div className="team-content">
            <h3 className="team-name">Dra. Ana Martins — Cirurgiã-Dentista</h3>
            <p className="team-bio">
              Especialista em Ortodontia e Odontopediatria, a Dra. Ana traz uma abordagem humana e 
              centrada no paciente para a odontologia familiar. Ela é apaixonada 
              por oferecer atendimento acolhedor usando técnicas modernas e indolores, 
              focando na prevenção e na saúde bucal a longo prazo.
            </p>
            <p className="team-bio">
              Juntos, a equipe combina experiência e inovação para proporcionar o melhor 
              resultado estético e funcional para cada paciente.
            </p>
            <Button variant="secondary" className="team-btn">
              Ler mais sobre Dra. Ana <ChevronRight size={18} />
            </Button>
          </div>
          <div className="team-image-wrapper">
            <div className="team-image-placeholder">
              <p>Placeholder — Foto profissional de uma dentista sorrindo, usando jaleco, em ambiente clínico odontológico.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}