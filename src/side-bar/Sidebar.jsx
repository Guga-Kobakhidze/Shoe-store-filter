import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">
            <FontAwesomeIcon icon={faCartShopping} />
          </h1>

          <Category />
          <Price />
          <Colors />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
