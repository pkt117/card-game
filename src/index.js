import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { AuthService, firebaseApp } from "./service";

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
