import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

function AppToo() {
    return (
        <h1>This is the Second App</h1>
    );
}

ReactDOM.render(
    <>
        <App /><AppToo />
    </>, document.getElementById("root"));