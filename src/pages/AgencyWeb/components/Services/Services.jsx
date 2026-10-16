import './styles.css';
import service1 from '../../assets/images/service-1.svg';
import service2 from '../../assets/images/service-2.svg';
import service3 from '../../assets/images/service-3.svg';
import service4 from '../../assets/images/service-4.svg';

export function Services() {
  return (
    <section className="section-services">
      <div className="container-item-services">
        <img src={service1} alt="Imagem sobre página" />
        <div>
          <h2>Web Application</h2>
          <p>Lorem Ipsum is simply</p>
        </div>
      </div>
      <div className="container-item-services">
        <img src={service2} alt="Imagem sobre tag de SEO" />
        <div>
          <h2>SEO</h2>
          <p>Lorem Ipsum is simply</p>
        </div>
      </div>
      <div className="container-item-services">
        <img src={service3} alt="Imagem sobre Soluções AR/VR" />
        <div>
          <h2>AR/VR Solutions</h2>
          <p>Lorem Ipsum is simply</p>
        </div>
      </div>
      <div className="container-item-services">
        <img src={service4} alt="Imagem sobre Aplicações Mobile" />
        <div>
          <h2>Mobile Applications</h2>
          <p>Lorem Ipsum is simply</p>
        </div>
      </div>
    </section>
  );
}