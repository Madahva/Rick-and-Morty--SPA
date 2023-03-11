import { ReactElement, useState } from "react";
import css from "../styles/SearchBar.module.css";
import search__icon from "../images/search__icon.svg";

interface Props {
  onSearch: (query: string) => void;
}

export function SearchBar(props: Props): ReactElement {
  const [character, setCharacter] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value);
  };

  const handleClick = () => {
    console.log(character) 
  };

  return (
    <div className={css.searchBar}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          autoFocus
          placeholder="Search..."
          type="search"
          onChange={handleChange}
          value={character}
        />

        <button className={css["button-search"]} onClick={handleClick}>
          <img src={search__icon} alt="search" />
        </button>
      </form>
    </div>
  );
}
