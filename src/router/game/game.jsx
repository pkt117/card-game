import React from "react";
import styles from "./game.module.css";
import { Outlet } from "react-router-dom";

const Game = ({ authService }) => {
  return (
    <section className={styles.game}>
      <section className={styles.container}>
        <Outlet />
      </section>
    </section>
  );
};

export default Game;
