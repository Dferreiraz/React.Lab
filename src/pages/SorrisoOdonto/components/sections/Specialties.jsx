import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { 
  Stethoscope, 
  Activity, 
  Heart, 
  Smile, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import './Specialties.css';

const specialties = [
  {
    id: 1,
    icon: <ShieldCheck size={28} />,
    title: 'Cirurgia Bucomaxilofacial',
    description: 'Extrações complexas, cirurgias ortognáticas e procedimentos especializados com máxima segurança.',
  },
  {
    id: 2,
    icon: <Activity size={28} />,
    title: 'Implantes Dentários',
    description: 'Implantes de alta qualidade realizados por especialista em Bucomaxilofacial formado pela USP.',
  },
  {
    id: 3,
    icon: <Sparkles size={28} />,
    title: 'Harmonização Orofacial',
    description: 'Procedimentos estéticos faciais como toxina botulínica, preenchimentos e bioestimuladores.',
  },
  {
    id: 4,
    icon: <Smile size={28} />,
    title: 'Clareamento Dental',
    description: 'Técnicas modernas de clareamento para um sorriso mais bonito, radiante e saudável.',
  },
  {
    id: 5,
    icon: <Heart size={28} />,
    title: 'Profilaxia e Limpeza',
    description: 'Limpeza dental profissional para prevenção e manutenção ideal da sua saúde bucal.',
  },
  {
    id: 6,
    icon: <Stethoscope size={28} />,
    title: 'Odontologia Geral',
    description: 'Consultas, diagnósticos precisos e tratamentos odontológicos de rotina para toda a família.',
  }
];

export function Specialties() {
  return (
    <section className="specialties section-padding" id="servicos">
      <div className="container">
        <SectionTitle 
          title={<>Odontologia completa para <br className="hidden-mobile"/><span className="text-secondary">toda a família</span></>}
          subtitle="Especialidades"
        />
        
        <p className="specialties-intro text-center">
          Da prevenção aos casos cirúrgicos mais complexos, com destaque para a 
          especialidade em Cirurgia Bucomaxilofacial.
        </p>

        <div className="specialties-grid">
          {specialties.map(spec => (
            <Card key={spec.id} className="specialty-card">
              <div className="specialty-icon-wrapper">
                {spec.icon}
              </div>
              <h3 className="specialty-title">{spec.title}</h3>
              <p className="specialty-description">{spec.description}</p>
              <div className="specialty-link">
                Saber mais <span>→</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}