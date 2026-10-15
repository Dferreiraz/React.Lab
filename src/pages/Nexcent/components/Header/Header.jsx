import './style.css';
import logo from '../../assets/images/Logo.png';

export const Header = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="Nexcent Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#feature">Feature</a>
          <a href="#product">Product</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <a href="#login" className="btn-text">Login</a>
          <a href="#signup" className="btn btn-primary">Sign up</a>
        </div>
      </div>
    </header>
  );
};