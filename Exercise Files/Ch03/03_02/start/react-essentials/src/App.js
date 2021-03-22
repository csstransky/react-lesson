import React from "react";
import "./App.css";

function Header(props) {
    console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(propz) {
  return (
    <section>
      <p>We serve the most {propz.adjective} delicious food around.</p>
    </section>
  );
}

function Footer(bigStuff) {
  return (
    <footer>
      <p>It's {bigStuff.year}.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Cristian"/>
      <Main adjective="amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
