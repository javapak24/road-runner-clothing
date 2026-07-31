import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const {
    name,
    category,
    color,
    price,
    sizes,
    image,
    featured,
    status,
    description
  } = product;

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={image}
          alt={`${name} placeholder`}
        />

        <div className="product-card__badges">
          {featured && <span className="badge badge--accent">Featured</span>}
          <span className="badge">{status}</span>
        </div>
      </div>

      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <p>{category}</p>
            <h2>{name}</h2>
          </div>

          <strong>${price.toFixed(2)}</strong>
        </div>

        <p className="product-card__description">{description}</p>

        <dl className="product-card__details">
          <div>
            <dt>Color</dt>
            <dd>{color}</dd>
          </div>
          <div>
            <dt>Sizes</dt>
            <dd>{sizes.join(" · ")}</dd>
          </div>
        </dl>

        <Link className="product-card__button" to="/contact">
          Ask About This Item
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
