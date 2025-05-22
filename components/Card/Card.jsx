import React from "react";
import styles from "./styles.module.css";

const Card = ({ id, image, name, yearOfBirth, onCardClick }) => {
  const imgUrl = !!image
    ? image
    : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg";

  return (
    <div className={styles.wrapper} onClick={() => onCardClick(id)}>
      <img src={imgUrl} alt="" />
      <h3>{name}</h3>
      <h4>{yearOfBirth}</h4>
    </div>
  );
};

export default Card;
