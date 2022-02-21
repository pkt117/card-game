import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game, Login, CardGame, GameList, SpeedGame } from "./router";

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
            <Route
              path="card_game"
              element={<CardGame firebaseDB={firebaseDB} />}
            />
            <Route path="speed_game" element={<SpeedGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
