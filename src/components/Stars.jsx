import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ starIcon, rate }) => {
  const numberOfStars = rate;
  const stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<FontAwesomeIcon className={starIcon} key={i} icon={faStar} />);
  }

  return <div>{stars}</div>;
};

export default Stars;
