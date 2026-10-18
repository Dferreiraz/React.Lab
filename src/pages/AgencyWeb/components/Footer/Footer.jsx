import './styles.css';
import logoFooter from '../../assets/images/logo-footer.svg';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconLinkedin from '../../assets/images/icon-linkedin.svg';

export function Footer() {
  return (
    <footer>
      <div className="footer-informations">
        <img src={logoFooter} alt="Logo footer" loading="lazy" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>@Lorem</p>
      </div>
      <div className="footer-informations">
        <h2>About us</h2>
        <ul>
          <li><a href="">Lorem</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
      <div className="footer-informations">
        <h2>Contact us</h2>
        <ul>
          <li>(11) 99434-3333</li>
          <li>(11) 98923-2222</li>
          <li>+908 89097 890</li>
        </ul>
      </div>
      <div className="footer-socials">
        <div className="social-item">
          <img src={iconFacebook} alt="Facebook" />
        </div>
        <div className="social-item">
          <img src={iconInstagram} alt="Instagram" />
        </div>
        <div className="social-item">
          <img src={iconTwitter} alt="Twitter" />
        </div>
        <div className="social-item">
          <img src={iconLinkedin} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}