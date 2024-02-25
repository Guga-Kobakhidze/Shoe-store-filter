import "./Products.css";

const Products = ({ result }) => {
  return (
    <section>
      <div className="card-container">{result}</div>
    </section>
  );
};

export default Products;
