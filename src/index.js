import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProgressBarContext from "./components/ProgressBar/ProgressBarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ProgressBarContext>
      <App />
    </ProgressBarContext>
  </HashRouter>
);
