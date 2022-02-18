import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToGame = (uid, name) => {
    navigate("/game/list", {
      state: { id: uid, name: name ? name : "게스트" },
    });
  };

  const onClickButton = (event) => {
    const value = event.currentTarget.dataset.value;
    authService
      .login(value)
      .then((data) => goToGame(data.user.uid, data.user.displayName));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToGame(user.uid, user.displayName);
    });
  });

  return (
    <section className={styles.login}>
      <header className={styles.header}>
        <h1 className={styles.title}>Card Matching Game</h1>
      </header>
      <section className={styles.container}>
        <button
          className={styles.button}
          data-value="Google"
          onClick={onClickButton}
        >
          <img
            className={styles.image}
            src="./images/google.png"
            alt="google"
          />
          <h1 className={styles.text}>구글 로그인</h1>
        </button>
        <button
          className={styles.button}
          data-value="Guest"
          onClick={onClickButton}
        >
          <img className={styles.image} src="./images/guest.png" alt="guest" />
          <h1 className={styles.text}>게스트 로그인</h1>
        </button>

        {/* <button
          className={`${styles.button} ${styles.kakao}`}
        >
          <img className={styles.image} src="./images/kakao.png" alt="kakao" />
          <h1 className={styles.text}>카카오톡 로그인</h1>
        </button> */}
      </section>
    </section>
  );
};

export default Login;
