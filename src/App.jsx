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
        if (!isRepetida(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function isRepetida(ID) {
    let aux = false;
    characters.forEach((element) => {
      if (element.id == ID) aux = true;
    });

    return aux;
  }

  function onClose(ID) {
    setCharacters(characters.filter((character) => character.id !== ID));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Jerry />
      <Cards characters={characters} onClose={onClose} />
      <Wave />
    </div>
  );
}

export default App;
