import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const buttonNames = ["All Products", "Nike", "Adidas", "Puma", "Vans"];

  const buttonMap = buttonNames.map((name, index) => {
    return <Button key={index} name={name} handleClick={handleClick} />;
  });

  return (
    <div>
      <div>
        <h2 className="rec-title">Recommended</h2>
        <div className="rec-container">{buttonMap}</div>
      </div>
    </div>
  );
};

export default Recommended;
