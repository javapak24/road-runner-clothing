import productData from '../../data/products.json';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid({ limit, featuredOnly = false }) {
  const products = productData.products;

  // If featuredOnly is true, only keep products whose
  // featured property is set to true.
  const filteredProducts = featuredOnly
    ? products.filter((product) => product.featured)
    : products;

  // If a limit was provided, only display that many products.
  const visibleProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="product-grid">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
