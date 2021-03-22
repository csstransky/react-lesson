import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App login={"eveporcello"} />,
  document.getElementById("root")
);
