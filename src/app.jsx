import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game, Login, CardGame, GameList } from "./router";

function App({ authService, firebaseDB }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route
            exact
            path="/game"
            element={<Game authService={authService} />}
          >
            <Route path="list" element={<GameList firebaseDB={firebaseDB} />} />
            <Route path="card_game" element={<CardGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
