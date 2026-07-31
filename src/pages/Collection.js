import ProductGrid from "../components/ProductGrid/ProductGrid";

function Collection() {
  return (
    <section className="section page-section">
      <div className="page-intro">
        <p className="eyebrow">Road Runner collection</p>
        <h1>THE CURRENT DROP.</h1>
        <p>
          Browse the collection below. Customers should contact Road Runner
          before sending payment to confirm size, color, and availability.
        </p>
      </div>

      <ProductGrid />
    </section>
  );
}

export default Collection;
