import React from "react";
import styles from "./card_item.module.css";

const CardItem = ({ img, value }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" className={styles.image} />
    </div>
  );
};
export default CardItem;
