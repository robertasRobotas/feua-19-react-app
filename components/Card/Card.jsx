import React from "react";

const Card = ({ image, name, yearOfBirth }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h4>{yearOfBirth}</h4>
    </div>
  );
};

export default Card;
