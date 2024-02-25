import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">
            <FontAwesomeIcon icon={faCartShopping} />
          </h1>

          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
