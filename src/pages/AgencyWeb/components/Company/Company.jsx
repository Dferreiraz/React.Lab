import './styles.css';
import company01 from '../../assets/images/company-01.svg';
import company02 from '../../assets/images/company-02.svg';
import company03 from '../../assets/images/company-03.svg';
import company04 from '../../assets/images/company-04.svg';

export function Company() {
  return (
    <section className="section-company">
      <h2>You will be in good Company</h2>
      <div className="container-company">
        <img src={company01} alt="Empresa Beneoshop" loading="lazy" />
        <img src={company02} alt="Empresa Caspio" loading="lazy" />
        <img src={company03} alt="Empresa HyperGrid" loading="lazy" />
        <img src={company04} alt="Empresa Leo Trippi" loading="lazy" />
      </div>
    </section>
  );
}