import React from "react";
import "../styles/Nav.css";
import SearchBar from "./SearchBar"

const Nav = (props) => {
  return (
    <div className="header">
      <div className="header__image">
        <img src="../../src/assets/images/logo.png" alt="Logo"/> 
      </div>

      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
