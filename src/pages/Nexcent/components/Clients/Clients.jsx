import './style.css';

const clients = [
  'Logo-Cliente.svg', 'Logo-Cliente2.svg', 'Logo-Cliente3.svg', 
  'Logo-Cliente4.svg', 'Logo-Cliente5.svg', 'Logo-Cliente6.svg', 'Logo-Cliente7.svg'
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
            <img key={index} src={`/src/assets/images/${logo}`} alt={`Client Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};