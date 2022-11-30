import React, { useState } from "react";
import "./styles/App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Jerry from "./components/Jerry.jsx";
import Wave from "./components/Wave.jsx";

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
      <Jerry />
      <Cards characters={characters} />
      <Wave />
    </div>
  );
}

export default App;
