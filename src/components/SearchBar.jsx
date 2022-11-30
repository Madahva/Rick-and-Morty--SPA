import React, { useState } from "react";
import "../styles/Search.css";
import search__icon from "../assets/images/search__icon.svg";
import random__icon from "../assets/images/random__icon.svg";

export default function SearchBar(props) {
  const inputVal = document.getElementsByTagName("input");

  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  const handleClick = () => {
    props.onSearch(character);
    inputVal[0].value = "";
    inputVal[0].focus();
    setCharacter("");
  };

  const handleRandom = () => {
    const random = Math.floor(Math.random() * 826);
    props.onSearch(random);
    inputVal[0].value = "";
    setCharacter("");
  };

  return (
    <div className="searchBar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input autoFocus placeholder="Search..." type="search" onChange={handleChange} />

        <button className="button-search" onClick={handleClick}>
          <img src={search__icon} alt="search" />
        </button>

        <button className="button-random" onClick={handleRandom}>
          <img src={random__icon} alt="random" />
        </button>
      </form>
    </div>
  );
}
