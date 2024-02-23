import Input from "../../components/Input";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="category-title">Category</h2>

      <form className="sidebar-label-items">
        <Input name={"All"} id={"All"} />
        <Input name={"Sneakers"} id={"Sneakers"} />
        <Input name={"Flats"} id={"Flats"} />
        <Input name={"Sandals"} id={"Sandals"} />
        <Input name={"Heels"} id={"Heels"} />
      </form>
    </div>
  );
};

export default Category;
