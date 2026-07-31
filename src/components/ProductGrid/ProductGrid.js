import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

function ProductGrid({ limit }) {
  /*
   * When limit exists, slice creates a shorter array for the homepage.
   * Otherwise, the full collection is displayed.
   */
  const visibleProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="product-grid">
      {/*
       * map() visits every product object and returns one ProductCard.
       * key helps React identify each rendered item efficiently.
       */}
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
