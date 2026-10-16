import './styles.css';
import illustrationMain from '../../assets/images/illustration-main.svg';

export function Main() {
  return (
    <main>
      <div className="main-content">
        <h1>Experienced <span>mobile and web</span> applications and website builders measuring.</h1>
        <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
          measuring dozens of completed projects. We build and develop mobile applications for several top
          platforms, including Android & IOS. </p>
        <div className="container-cta">
          <a href="" className="btn-primary">Contact us</a>
          <a href="" className="btn-secondary">View more</a>
        </div>
      </div>

      <div>
        <img src={illustrationMain}
          alt="ilustração 3d de um homem barbudo sentado em uma cadeira mexendo no notebook" />
      </div>
    </main>
  );
}