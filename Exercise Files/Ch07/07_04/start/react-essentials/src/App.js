import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Services, Location, Whoops404, CompanyHistory } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
            <Route path={"services"} element={<Services />}/>
            <Route path={"history"} element={<CompanyHistory />}/>
            <Route path={"location"} element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
