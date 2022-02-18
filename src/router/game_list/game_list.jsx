import React from "react";
import styles from "./game_list.module.css";
import ListCard from "../../components/list_card/list_card";
import { useNavigate } from "react-router-dom";

const GameList = (props) => {
  const navigate = useNavigate();
  const onClickGame = (path) => {
    navigate(path);
  };

  return (
    <>
      <h1 className={styles.title}>game list</h1>
      <ul className={styles.list}>
        <ListCard
          onClickGame={onClickGame}
          img="../images/gameicon.png"
          gameTitle="card game"
          path="/game/card_game"
        />
      </ul>
    </>
  );
};

export default GameList;
