import './style.css';

export const SplitSection = ({ imageSrc, imageAlt, title, text, reversed }) => {
  return (
    <section className="split-section section-padding">
      <div className={`container split-container ${reversed ? 'reversed' : ''}`}>
        <div className="split-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="split-content">
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="#learn-more" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </section>
  );
};