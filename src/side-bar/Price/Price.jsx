import Input from "../../components/Input";
import "./Price.css";

const Price = () => {
  return (
    <div className="price-container">
      <h2 className="price-title">Price</h2>

      <form>
        <Input name={"$0 - $50"} id={"AllP"} />
        <Input name={"$50 - $100"} id={"p50"} />
        <Input name={"$100 - $150"} id={"p100"} />
        <Input name={"over $150"} id={"pOver"} />
      </form>
    </div>
  );
};

export default Price;
