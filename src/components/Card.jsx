import React from "react";
import Stars from "./Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import data from "../database/data";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-img-container">
            <img className="card-img" src={card.img} alt="shoe" />
          </div>
          <div className="card-details">
            <h3 className="card-title">{card.title}</h3>
            <div className="card-reviews">
              <Stars starIcon={"rating-star"} rate={4} />
              <span className="total-reviews">{card.reviews}</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del>${card.prevPrice}</del> ${card.newPrice}
              </div>
              <div className="bag">
                <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
