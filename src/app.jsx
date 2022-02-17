import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game, Login, Score } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Game" element={<Game />} />
        <Route exact path="/Score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
