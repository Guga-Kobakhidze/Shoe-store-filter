import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="navbar-icons">
        <a href="#">
          <FontAwesomeIcon className="nav-icons" icon={faHeart} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="nav-icons" icon={faCartShopping} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="nav-icons" icon={faUser} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
