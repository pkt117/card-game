import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { AuthService, firebaseApp, FirebaseDB } from "./service";

const authService = new AuthService(firebaseApp);
const firebaseDB = new FirebaseDB(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} firebaseDB={firebaseDB} />
  </React.StrictMode>,
  document.getElementById("root")
);
