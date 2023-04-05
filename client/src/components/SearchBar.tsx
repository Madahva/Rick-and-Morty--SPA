import { ReactElement, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { searchByName } from "../redux/features/homeSlice";
import css from "../assets/styles/SearchBar.module.css";
import search__icon from "../assets/images/search__icon.svg";

export function SearchBar(): ReactElement {
  const dispactch = useAppDispatch();
  const [character, setCharacter] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value);
  };

  const handleClick = () => {
    dispactch(searchByName(character));

    //todo:Borrar filtro
    const selectElements = document.getElementsByTagName("select");
    for (let i = 0; i < selectElements.length; i++) {
      const options = selectElements[i].options;
      selectElements[i].selectedIndex = options.length - 1;
    }
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
