import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

/*
 * HashRouter stores the route after the # symbol.
 *
 * Example:
 * https://username.github.io/road-runner-clothing/#/collection
 *
 * This avoids the refresh-routing problem that static hosts such as
 * GitHub Pages can have with BrowserRouter.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
