import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <header>
            <h1>Cristian's Place</h1>
        </header>
    )
}

function Main() {
    return (
        <section>
            <p>I'm the person who lives here.</p>
        </section>
    )
}

function Footer() {
    return (
        <footer>
            <p>And I'm all alone.</p>
        </footer>
    )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
