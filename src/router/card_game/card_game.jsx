import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardItem } from "../../components";
import styles from "./card_game.module.css";

const CardGame = ({ firebaseDB }) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <section className={styles.cardGame}>
      <span className={styles.timer}></span>
      <span className={styles.score}></span>
      <div className={styles.container}>
        {data.map((item) => (
          <CardItem img={item.imgUrl} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default CardGame;
