import './style.css';
import TimSmith from '../../assets/images/tim-smith.svg';

const clientLogos = [
  'Logo-Cliente.svg',
  'Logo-Cliente2.svg',
  'Logo-Cliente3.svg',
  'Logo-Cliente4.svg',
  'Logo-Cliente5.svg',
  'Logo-Cliente6.svg'
];

export const Testimonial = () => {
  return (
    <section className="testimonial bg-silver section-padding">
      <div className="container testimonial-container">
        <div className="testimonial-image">
          <img
            src={TimSmith}
            alt="Tim Smith - British Dragon Boat Racing Association"
          />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, qui stristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="testimonial-author">
            <h4>Tim Smith</h4>
            <p>British Dragon Boat Racing Association</p>
          </div>
          <div className="testimonial-clients">
            <div className="client-logos-small">
              {clientLogos.map((logo, index) => (
                <img
                  key={index}
                  src={`/src/assets/images/${logo}`}
                  alt={`Client ${index + 1}`}
                />
              ))}
            </div>
            <a href="#all-customers" className="meet-all">
              Meet all customers <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};