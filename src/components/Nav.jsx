import css from "../assets/styles/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../assets/images/logo.png";
import SearchBar from "./SearchBar";

const Nav = (props) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className={css.header}>
      <div className={css.header__image}>
        <img src={headerLogo} alt="Logo" onClick={goToHome} />
      </div>

      <Link to="/about">About</Link>

      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
