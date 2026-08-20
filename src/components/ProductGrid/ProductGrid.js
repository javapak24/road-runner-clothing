import productData from '../../data/products.json';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid({ limit }) {
  const products = productData.products;

  const visibleProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="product-grid">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
