import type { ReactElement } from "react";
import { useState } from "react";
import css from "../assets/styles/NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../assets/images/logo.png";
import { SearchBar } from "./SearchBar";
import {
  faRightToBracket,
  faHeart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar(): ReactElement {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const goToHome = () => {
    navigate("/");
  };

  const handleModalClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={css.header}>
      <div
        className={`${css.header__image} ${css.hide}`}
        style={{ display: !showModal ? "block" : "none" }}
      >
        <img src={headerLogo} alt="Logo" onClick={goToHome} />
      </div>

      <div
        className={css.modal}
        style={{ display: showModal ? "flex" : "none" }}
      >
        <div className={css.modal__header}>
          <div className={css.header__image}>
            <img src={headerLogo} alt="Logo" onClick={goToHome} />
          </div>

          <button
            className={css.modal__button}
            onClick={handleModalClick}
          >
            <FontAwesomeIcon
              icon={faXmark}
              size="2xl"
              style={{ color: "#43d018" }}
            />
          </button>
        </div>

        <Link to="/favourites" className={css.link}>
          Favourites <FontAwesomeIcon icon={faHeart} />
        </Link>

        <a className={css.link}>
          <strong>Login </strong>
          <FontAwesomeIcon icon={faRightToBracket} />
        </a>

        <SearchBar />
      </div>

      <button
        className={`${css.modal__button} ${css.hide}`}
        onClick={handleModalClick}
        style={{ display: !showModal ? "block" : "none" }}
      >
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          style={{ color: "#43d018" }}
        />
      </button>
    </div>
  );
}
