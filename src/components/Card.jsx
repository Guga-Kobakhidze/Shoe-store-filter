import Stars from "./Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="shoe"
      />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <div className="card-reviews">
          <Stars starIcon={"rating-star"} rate={4} />
          <span className="total-reviews">4</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>$300</del> $200
          </div>
          <div className="bag">
            <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
