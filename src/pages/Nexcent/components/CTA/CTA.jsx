import './style.css';

export const CTA = () => {
  return (
    <section className="cta bg-silver section-padding">
      <div className="container cta-container">
        <h2>Pellentesque suscipit <br />fringilla libero eu.</h2>
        <a href="#demo" className="btn btn-primary">
          Get a Demo <span>→</span>
        </a>
      </div>
    </section>
  );
};