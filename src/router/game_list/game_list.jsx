import React from "react";
import styles from "./game_list.module.css";
import ListCard from "../../components/list_card/list_card";
import { useNavigate } from "react-router-dom";

const GameList = ({ firebaseDB }) => {
  const navigate = useNavigate();

  const onClickGame = async (path, collectionName) => {
    const data = await firebaseDB.getData(collectionName);

    navigate(path, {
      state: { data: data },
    });
  };

  return (
    <>
      <h1 className={styles.title}>Game List</h1>
      <ul className={styles.list}>
        <ListCard
          onClickGame={onClickGame}
          img="../images/gameicon.png"
          gameTitle="card game"
          path="/game/card_game"
          collectionName="card"
        />
      </ul>
    </>
  );
};

export default GameList;
