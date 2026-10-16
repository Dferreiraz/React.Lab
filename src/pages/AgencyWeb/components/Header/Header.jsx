import './styles.css';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo da Agency Web" />
      </div>

      <div className="container-nav-header">
        <nav className="navigation-header">
          <ul>
            <li><a href="" className="menu-active">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </nav>

        <nav>
          <a href="" className="btn-header">Contact us</a>
        </nav>
      </div>
    </header>
  );
}