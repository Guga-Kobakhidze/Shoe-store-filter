import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="price-container">
      <h2 className="price-title">Price</h2>

      <form>
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="price"
          id="AllP"
        />
        <Input
          handleChange={handleChange}
          value="50"
          title="$0 - $50"
          name="price"
          id="$0 - $50"
        />
        <Input
          handleChange={handleChange}
          value="100"
          title="$50 - $100"
          name="price"
          id="$50 - $100"
        />
        <Input
          handleChange={handleChange}
          value="150"
          title="$100 - $150"
          name="price"
          id="$100 - $150"
        />
        <Input
          handleChange={handleChange}
          value="200"
          title="over $150"
          name="price"
          id="over $150"
        />
      </form>
    </div>
  );
};

export default Price;
