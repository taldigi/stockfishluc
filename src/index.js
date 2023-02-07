import React from "react";
import ReactDOM from "react-dom";
import Puzzle from "./components/Puzzle.js";
import registerServiceWorker from "./registerServiceWorker";
import "./style.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
