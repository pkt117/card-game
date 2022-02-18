import React from "react";
import styles from "./game_list.module.css";
import ListCard from "../../components/list_card/list_card";
import { useNavigate } from "react-router-dom";

const GameList = ({ firebaseDB }) => {
  const navigate = useNavigate();

  const onClickGame = async (path, colectionName) => {
    const data = await firebaseDB.getData(colectionName);

    navigate(path, {
      state: { data: data },
    });
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
          colectionName="card"
        />
      </ul>
    </>
  );
};

export default GameList;
