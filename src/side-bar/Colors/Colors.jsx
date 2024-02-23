import Input from "../../components/Input";
import "./Colors.css";

const Colors = () => {
  return (
    <div className="color-container">
      <h2 className="color-title">Color</h2>

      <form className="sidebar-label-items">
        <Input name={"All"} id={"AllColor"} />
        <Input name={"Black"} id={"Black"} />
        <Input name={"Blue"} id={"Blue"} />
        <Input name={"Red"} id={"Red"} />
        <Input name={"Green"} id={"Green"} />
        <Input name={"White"} id={"White"} />
      </form>
    </div>
  );
};

export default Colors;
