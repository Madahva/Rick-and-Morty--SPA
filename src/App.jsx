import "./styles/App.css";
import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Wave from "./components/Wave.jsx";
import jerry from "./assets/images/jerry.gif";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <div className="jerry-container">
        <img className="jerry" src={jerry} alt="Jerry" />
      </div>
      <Cards characters={characters} />
      <Wave />
    </div>
  );
}

export default App;
