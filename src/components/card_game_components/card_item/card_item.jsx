import React, { useEffect, useState } from "react";
import styles from "./card_item.module.css";

// 카드게임의 각각의 카드
const CardItem = ({ img, value }) => {
  const [rotate, setRotate] = useState(true);
  const [prohibition, setProhibition] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRotate(false);
      setProhibition(true);
    }, 2000);
  }, []);

  const onClickCard = () => setRotate((prev) => !prev);

  return (
    <div
      className={
        prohibition
          ? styles.container
          : `${styles.container} ${styles.prohibition}`
      }
    >
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
