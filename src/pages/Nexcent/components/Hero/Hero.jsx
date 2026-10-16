import './style.css';
import illustration from '../../assets/images/Illustration.png';

export const Hero = () => {
  return (
    <section className="hero bg-silver" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Lessons and insights <br /> <span className="text-primary">from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <a href="#register" className="btn btn-primary">Register</a>
        </div>
        <div className="hero-image">
          <img src={illustration} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};