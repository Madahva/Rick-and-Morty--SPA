import "../styles/Search.css"
import React, { useState } from "react";

export default function SearchBar(props) {
   
  const [character, setCharacter] = useState(""); 

  const handleChange = (event) => {
    setCharacter(event.target.value)
  }

  return (
      <div className="searchBar">
        <input type='search' onChange={handleChange} />
        <button onClick={ () => props.onSearch(character)}>Add</button>
      </div>
   );
}
