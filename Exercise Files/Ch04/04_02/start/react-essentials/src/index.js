import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

const [mostImportantItem,,lamplol] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem, lamplol);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);
