import "./assets/styles/App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!isRepetida(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No podes repetir personajes");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const isRepetida = (ID) => {
    let aux = false;
    characters.forEach((element) => {
      if (element.id === ID) aux = true;
    });

    return aux;
  };

  const onClose = (ID) => {
    setCharacters(characters.filter((character) => character.id !== ID));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
