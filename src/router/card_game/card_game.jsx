import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardItem, StopWatch } from "../../components";
import styles from "./card_game.module.css";

const CardGame = ({ firebaseDB }) => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data);
  const [play, setPlay] = useState(false);
  const [complete, setComplete] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const cardLength = data.length / 2;

  const gamePlay = async () => {
    if (!play) {
      const shuffle = await firebaseDB.shuffle(data);
      setData(shuffle);
      setClearedCards({});
      setOpenCards([]);
      setComplete(false);
    }
    setPlay((prev) => !prev);
  };

  const evaluate = () => {
    const [one, two] = openCards;
    // console.log(data[one].value, data[two].value);
    if (data[one].value === data[two].value) {
      setClearedCards((prev) => ({ ...prev, [data[one].value]: true }));
    }
    setOpenCards([]);
  };

  const onClickCard = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
    } else {
      setOpenCards([index]);
    }
  };

  const checkSameCard = (card) => {
    return Boolean(clearedCards[card.value]);
  };

  const checkClick = (index) => {
    return openCards.includes(index);
  };

  const gameComplete = () => {
    if (cardLength === Object.keys(clearedCards).length) {
      gamePlay();
      setComplete((prev) => !prev);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    gameComplete();
  }, [clearedCards]);

  return (
    <section className={styles.cardGame}>
      <StopWatch play={play} complete={complete} />

      <div className={styles.container}>
        {play &&
          data.map((item, index) => (
            <CardItem
              img={item.imgUrl}
              value={item.value}
              item={item}
              index={index}
              key={index}
              start={play}
              clickCard={onClickCard}
              cardCheck={clearedCards}
              checkClick={checkClick(index)}
              checkSameCard={checkSameCard(item)}
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
