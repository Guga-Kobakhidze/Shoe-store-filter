import React from "react";
import Stars from "./Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, title, reviews, prevPrice, newPrice, id }) => {
  return (
    <div className="card" key={id}>
      <div className="card-img-container">
        <img className="card-img" src={img} alt="shoe" />
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div className="card-reviews">
          <Stars starIcon={"rating-star"} rate={4} />
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>${prevPrice}</del> ${newPrice}
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
