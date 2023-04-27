import type { ReactElement } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "../assets/styles/NavBar.module.css";
import { useNavigate } from "react-router-dom";
import headerLogo from "../assets/images/logo.png";
import { SearchBar } from "./SearchBar";
import {
  faRightToBracket,
  faHeart,
  faBars,
  faXmark,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar({ visible, toggleModal }: any): ReactElement {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const goToHome = () => {
    navigate("/");
  };

  const handleModalClick = () => {
    setShowModal(!showModal);
  };

  const handleGoToFavourite = () => {
    isAuthenticated ? navigate("/favourites") : toggleModal();
    !visible ? setShowModal(!showModal) : null;
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

          <button className={css.modal__button} onClick={handleModalClick}>
            <FontAwesomeIcon
              icon={faXmark}
              size="2xl"
              style={{ color: "#43d018" }}
            />
          </button>
        </div>

        <a className={css.link} onClick={handleGoToFavourite}>
          Favourites <FontAwesomeIcon icon={faHeart} />
        </a>

        {!isAuthenticated ? (
          <a className={css.link} onClick={() => loginWithRedirect()}>
            <strong>Log in </strong>
            <FontAwesomeIcon icon={faRightToBracket} />
          </a>
        ) : (
          <a
            className={css.link}
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <strong>Log out </strong>
            <FontAwesomeIcon icon={faPerson} />
          </a>
        )}
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
