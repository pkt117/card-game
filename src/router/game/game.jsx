import React from "react";
import styles from "./game.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const Game = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <section className={styles.game}>
      <button className={styles.logout} onClick={onLogout}>
        logout
      </button>
      <section className={styles.container}>
        <Outlet />
      </section>
    </section>
  );
};

export default Game;
