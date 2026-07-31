import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">placeholder content · javapak</p>

        <h1>
          ROAD RUNNER
          <span>ROAD RUNNER.</span>
        </h1>

        <p className="hero__description">Road Runner ....</p>

        <div className="hero__actions">
          <Link className="button button--primary" to="/collection">
            View Collection
          </Link>

          <Link className="button button--secondary" to="/contact">
            Contact the Brand
          </Link>
        </div>
      </div>

      <div className="hero__graphic" aria-hidden="true">
        <span className="hero__number">24</span>
        <span className="court-circle court-circle--small"></span>
        <span className="court-circle court-circle--large"></span>
        <p>ROAD RUNNER</p>
      </div>
    </section>
  );
}

export default Hero;
