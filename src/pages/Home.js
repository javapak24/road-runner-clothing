import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import ProductGrid from '../components/ProductGrid/ProductGrid';

function Home() {
  return (
    <>
      <Hero />

      <section className="section section--surface">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured products</p>
            <h2>BUILT DIFFRENT</h2>
          </div>

          <Link className="text-link" to="/collection">
            View Full Collection →
          </Link>
        </div>

        <ProductGrid limit={3} />
      </section>

      <section className="statement">
        <p>placeholder</p>
        <p>placeholder</p>
        <p>placeholder</p>
      </section>
    </>
  );
}

export default Home;
