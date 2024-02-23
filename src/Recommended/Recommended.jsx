import "./Recommended.css";

const Recommended = () => {
  return (
    <div>
      <div>
        <h2 className="rec-title">Recommended</h2>
        <div className="rec-container">
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
