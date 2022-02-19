import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardItem, StopWatch } from "../../components";
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
      <StopWatch play={play} />

      <div className={styles.container}>
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
