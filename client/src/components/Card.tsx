import type { ReactElement } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import css from "../assets/styles/Card.module.css";
import { faEye, faHeart, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card(props: any): ReactElement {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleViewCard = () => {
    navigate(`/details/${props.id}`);
  };

  const handleAddFav = () => {
    isAuthenticated ? alert("Added! OwO") : alert("Sorry, you must be logged in to do that! 🤭");
  };

  return (
    <div className={css.card}>
      <div className={css["card__header"]}>
        <Link to={`/details/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>
      <div className={css.card__button}>
        <button
          tabIndex={0}
          onClick={handleViewCard}
          className={css.button__fav}
        >
          <div className={css["close-container"]}>
            <FontAwesomeIcon
              icon={faEye}
              size="2xl"
              style={{ color: "#9a35ef" }}
            />
          </div>
          <span className={css.tooltip}>View Card</span>
        </button>

        <button
          tabIndex={0}
          onClick={handleAddFav}
          className={css.button__view}
        >
          <div className={css["close-container"]}>
            <FontAwesomeIcon
              icon={faHeart}
              size="2xl"
              style={{ color: "gray", opacity: 1 }}
            />
          </div>
          <span className={css.tooltip}>Add to Favourites</span>
        </button>
      </div>

      <img src={props.image} alt="Rick" />

      <div className={css["card__info"]}>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
  
    </div>
  );
}
