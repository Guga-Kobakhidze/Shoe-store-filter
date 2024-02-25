import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="category-title">Category</h2>

      <form className="sidebar-label-items">
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
          id="All"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sniakers"
          name="test"
          id="Sniakers"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
          id="Flats"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
          id="Sandals"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
          id="Heels"
        />
      </form>
    </div>
  );
};

export default Category;
