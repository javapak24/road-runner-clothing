import { Link } from 'react-router-dom';
import './Hero.css';
import kobeGif from '../../assets/kobe-bryant-no-flinch.gif';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Road Runner · Established 1996</p>

        <h1>
          TO &nbsp;BE &nbsp;BALLIN
          <span>
            YOU <br></br>GOT TO<br></br>B - &nbsp;ALL - &nbsp;IN
          </span>
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
        {/* <span className="hero__number">24</span>
        <span className="court-circle court-circle--small"></span>
        <span className="court-circle court-circle--large"></span> */}
        <div className="hero__gif">
          <img src={kobeGif} alt="Kobe Bryant no flinch" />
        </div>
        <p>ROAD RUNNER</p>
      </div>
    </section>
  );
}

export default Hero;
