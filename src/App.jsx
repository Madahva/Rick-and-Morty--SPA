import "./styles/App.css";
import Header from "./components/Header";
import Cards from "./components/Cards.jsx";
import characters from "./data.js";
import Wave from "./components/Wave";
import jerry from "./assets/jerry.gif"

function App() {
  return (
    <div className="App">
      <Header />
      <img className="jerry" src={jerry} alt="Jerry"/>
      <Cards characters={characters} />
      <Wave />
    </div>
  );
}

export default App;
