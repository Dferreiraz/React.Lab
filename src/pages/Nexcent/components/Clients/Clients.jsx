import './style.css';

import logoCliente1 from '../../assets/images/Logo-Cliente.svg';
import logoCliente2 from '../../assets/images/Logo-Cliente2.svg';
import logoCliente3 from '../../assets/images/Logo-Cliente3.svg';
import logoCliente4 from '../../assets/images/Logo-Cliente4.svg';
import logoCliente5 from '../../assets/images/Logo-Cliente5.svg';
import logoCliente6 from '../../assets/images/Logo-Cliente6.svg';
import logoCliente7 from '../../assets/images/Logo-Cliente7.svg';

const clients = [
  logoCliente1,
  logoCliente2,
  logoCliente3,
  logoCliente4,
  logoCliente5,
  logoCliente6,
  logoCliente7
];

export const Clients = () => {
  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client-logos">
          {clients.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Client Logo ${index + 1}`}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};