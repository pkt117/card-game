import React from "react";
import styles from "./game.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const Game = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
    navigate("/");
  };

  const onMoveList = () => {
    navigate("/game/list");
  };

  return (
    <section className={styles.game}>
      <button className={styles.move_list} onClick={onMoveList}>
        Game List
      </button>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
      <section className={styles.container}>
        <Outlet />
      </section>
    </section>
  );
};

export default Game;
