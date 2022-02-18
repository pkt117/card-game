import React from "react";
import styles from "./list_card.module.css";

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
