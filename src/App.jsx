import "./styles/App.css";
import Header from "./components/Header";
import Cards from "./components/Cards.jsx";
import characters from "./data.js";
import Wave from "./components/Wave";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards characters={characters} />
      <Cards characters={characters} />
      <Wave />
    </div>
  );
}

export default App;
