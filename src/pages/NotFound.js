import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section empty-page">
      <p className="eyebrow">404</p>
      <h1>WRONG ROAD.</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button button--primary" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default NotFound;
