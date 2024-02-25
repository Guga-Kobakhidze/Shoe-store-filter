import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div className="color-container">
      <h2 className="color-title">Color</h2>

      <form className="sidebar-label-items">
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="color"
          id="AllColor"
        />
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          id="Black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          id="Blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          id="Red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          id="Green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
          id="White"
        />
      </form>
    </div>
  );
};

export default Colors;
