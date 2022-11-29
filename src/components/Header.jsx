import "../styles/Header.css";
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img src="../../src/assets/logo.png" alt="Logo"/> 
      </div>

      <SearchBar onSearch={() => window.alert("OwO")} />
    </div>
  );
};

export default Header;
