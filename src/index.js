import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let model = { clicks: 5 };

function renderer() {
  ReactDOM.render(
    <App
      clicks={model.clicks}
      onClick={() => {
        model.clicks += 1;
        renderer();
      }}
    />,
    document.getElementById("root")
  );
}
renderer();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
