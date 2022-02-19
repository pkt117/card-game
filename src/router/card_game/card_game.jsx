import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardItem } from "../../components";
import styles from "./card_game.module.css";

const CardGame = ({ firebaseDB }) => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data);
  const [play, setPlay] = useState(false);

  const gamePlay = () => {
    setPlay((prev) => !prev);
    if (play) {
      const shuffle = firebaseDB.shuffle(data);
      setData(shuffle);
    }
  };
  return (
    <section className={styles.cardGame}>
      <span className={styles.timer}></span>

      <div
        className={
          play
            ? styles.container
            : `${styles.container} ${styles.containerStop}`
        }
      >
        {play &&
          data.map((item, index) => (
            <CardItem
              img={item.imgUrl}
              value={item.value}
              key={index}
              start={play}
            />
          ))}
      </div>
      <button className={play ? styles.play : styles.stop} onClick={gamePlay}>
        {play ? "Stop" : "Start"}
      </button>
    </section>
  );
};

export default CardGame;
