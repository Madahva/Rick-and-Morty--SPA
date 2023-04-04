import type { ReactElement } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import {
  createFavourite,
  fetchFavourites,
  deleteFavourite,
} from "../redux/features/favouriteSlice";
import css from "../assets/styles/Card.module.css";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card(props: any): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAuth0();
  const [isFav, setIsFav] = useState(false);

  const handleViewCard = () => {
    navigate(`/details/${props.id}`);
  };

  const handleAddFav = (character: any) => {
    if (favourite.includes(character.id) && isFav) {
      alert("This character is already in your favourites! 😄");
      return;
    }

    isAuthenticated
      ? (dispatch(createFavourite(createFav(character))),
        setIsFav(true),
        dispatch(fetchFavourites(user?.email)))
      : alert("Sorry, you must be logged in to do that! 🤭");
  };

  const createFav = (character: any) => {
    return {
      id: character.id,
      user: user?.email,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episode: character.episode,
    };
  };

  const favourite = props.favouriteIds;

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

        {!props.showDeleteBtn ? (
          !favourite.includes(props.id) && !isFav ? (
            <button
              tabIndex={0}
              onClick={() => handleAddFav(props.all)}
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
          ) : (
            <button
              tabIndex={0}
              onClick={() => handleAddFav(props.all)}
              className={css.button__view}
            >
              <div className={css["close-container"]}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size="2xl"
                  style={{ color: "#9a35ef", opacity: 0.8 }}
                />
              </div>
              <span className={css.tooltip}>Already in Favourites</span>
            </button>
          )
        ) : (
          <button
            className={css.button__close}
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            <div className={css["close-container"]}>
              <div className={css.leftright}></div>
              <div className={css.rightleft}></div>
            </div>
            <span className={css.tooltip}>Delete Favourite</span>
          </button>
        )}
      </div>

      <img src={props.image} alt="Rick" />

      <div className={css["card__info"]}>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
}
