import React from "react";
import styles from "./list_card.module.css";

//  게임 목록의 카드
const ListCard = ({ img, gameTitle, path, onClickGame, colectionName }) => {
  return (
    <li className={styles.listCard}>
      <button
        className={styles.button}
        onClick={() => onClickGame(path, colectionName)}
      >
        <img src={img} alt="game" className={styles.img} />
        <h1 className={styles.title}>{gameTitle}</h1>
      </button>
    </li>
  );
};

export default ListCard;
