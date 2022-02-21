import React, { useEffect, useState } from "react";
import styles from "./card_item.module.css";
import cn from "classnames";

// 카드게임의 각각의 카드
const CardItem = ({
  item,
  img,
  value,
  clickCard,
  index,
  checkClick,
  checkSameCard,
  cardCheck,
}) => {
  const [rotate, setRotate] = useState(true);
  const [prohibition, setProhibition] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRotate(false);
      setProhibition(true);
    }, 2000);
  }, []);

  const onClickCard = () => clickCard(index);

  return (
    <div
      className={cn([styles.container], {
        [styles.prohibition]: !prohibition,
        [styles.card_click]: checkClick,
        [styles.card_flip]: rotate,
        [styles.card_back]: checkSameCard,
      })}
      onClick={onClickCard}
    >
      <div className={`${styles.card} ${styles.card_back}`}>
        <img src={img} alt="" className={styles.image} />
      </div>
      <div className={styles.card}>
        <img src="../images/gameicon.png" alt="" className={styles.img_back} />
      </div>
    </div>
  );
};
export default CardItem;
