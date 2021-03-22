import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {About, Contact, Events, Home, Whoops404} from "./pages.js";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={"/about" } element={<About />}/>
          <Route path={"/events"} element={<Events />}/>
          <Route path={"/contact"} element={<Contact />}/>
          <Route path={"*"} element={<Whoops404 />}/>
        </Routes>
      </div>
  );
}

export default App;
