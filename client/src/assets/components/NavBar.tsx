import type { ReactElement } from "react";
import css from "../styles/NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../images/logo.png";
import { SearchBar } from "./SearchBar";

export function NavBar(): ReactElement {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={css.header}>
      <div className={css.header__image}>
        <img src={headerLogo} alt="Logo" onClick={goToHome} />
      </div>

      <Link to="/favourites">Favourites</Link>

      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>

      <SearchBar />
    </div>
  );
}
