import './styles.css';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import aboutService1 from '../../assets/images/about-service-1.svg';
import aboutService2 from '../../assets/images/about-service-2.svg';
import aboutService3 from '../../assets/images/about-service-3.svg';

export function Details() {
  return (
    <section className="section-details">
      <div className="details-presentation">
        <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
      </div>
      <div className="service-description">
        <div className="content-service">
          <div className="service-details">
            <img src={icon1} alt="ilustração de rosto feliz" />
            <div>
              <span>Lorem Ipsum is simply dummy text</span>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <h3><span>Lorem Ipsum</span> is simply dummy text of the printing.</h3>
          <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        </div>
        <div>
          <img src={aboutService1} alt="Ilustração de celular" />
        </div>
      </div>
      <div className="service-description service-description-reverse">
        <div className="content-service">
          <div className="service-details">
            <img src={icon2} alt="ilustração de rosto feliz" />
            <div>
              <span>Lorem Ipsum is simply dummy text</span>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
          <h3><span>Lorem Ipsum</span> is simply dummy text of the printing.</h3>
          <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        </div>
        <div>
          <img src={aboutService2} alt="Ilustração de celular" />
        </div>
      </div>
      <div className="service-description">
        <div className="content-service">
          <div className="service-details">
            <img src={icon3} alt="ilustração de rosto feliz" />
            <div>
              <span>Lorem Ipsum is simply dummy text</span>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <h3><span>Lorem Ipsum</span> is simply dummy text of the printing.</h3>
          <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        </div>
        <div>
          <img src={aboutService3} alt="Ilustração de celular" />
        </div>
      </div>
    </section>
  );
}