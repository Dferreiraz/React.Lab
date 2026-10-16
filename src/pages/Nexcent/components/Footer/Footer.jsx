import './style.css';
import logo from '../../assets/images/Logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src={logo} alt="Nexcent Logo" />
            </a>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-icons">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#about" className="footer-link">About us</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
                <li><a href="#contact" className="footer-link">Contact us</a></li>
                <li><a href="#pricing" className="footer-link">Pricing</a></li>
                <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="#help" className="footer-link">Help center</a></li>
                <li><a href="#terms" className="footer-link">Terms of service</a></li>
                <li><a href="#legal" className="footer-link">Legal</a></li>
                <li><a href="#privacy" className="footer-link">Privacy policy</a></li>
                <li><a href="#status" className="footer-link">Status</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Stay up to date</h4>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2023 Nexcent ltd. All rights reserved</p>
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            <a href="#cookies" className="footer-bottom-link">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};