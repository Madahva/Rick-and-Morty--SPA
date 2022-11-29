import "../styles/Search.css"
import React from "react";

export default function SearchBar(props) {
   return (
      <div className="searchBar">
        <input type='search' />
        <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
