import React, { useEffect, useState } from "react";
import styles from "./card_item.module.css";

const CardItem = ({ img, value }) => {
  const [rotate, setRotate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRotate(false);
    }, 2000);
  }, []);

  const onClickCard = () => setRotate((prev) => !prev);

  return (
    <div className={styles.container}>
      <div
        className={rotate ? styles.card : `${styles.card} ${styles.back}`}
        onClick={onClickCard}
      >
        <img src={img} alt="" className={styles.image} />
      </div>
      <div
        className={rotate ? `${styles.card} ${styles.back}` : styles.card}
        onClick={onClickCard}
      >
        <img
          src="../images/gameicon.png"
          alt=""
          className={styles.back_image}
        />
      </div>
    </div>
  );
};
export default CardItem;
