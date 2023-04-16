import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  fetchFavourites,
  selectFavourites,
  deleteFavourite,
} from "../redux/features/favouriteSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "./Card";
import css from "../assets/styles/CardsContainer.module.css";
import Loading from "./Loading";

export function Favourites(): ReactElement {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectFavourites);
  const favouriteIds = characters.map((item) => item.id);
  const [isLoading, setIsLoading] = useState(true);

  if (!isAuthenticated) navigate("/");

  useEffect(() => {
    dispatch(fetchFavourites(user?.email));
    setIsLoading(false);
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteFavourite({ user: user?.email, id: id })).then(() => {
      dispatch(fetchFavourites(user?.email));
    });
  };

  return (
    <section
      className={css.cards}
      style={{ padding: "19rem 10rem 0rem 10rem" }}
    >
      <h1 className={css.tittle}>{user?.given_name}'s Favorite Characters</h1>
      {!isLoading ? (
        characters &&
        characters.map((character, index) => (
          <Card
            gender={character.gender}
            id={character.id}
            image={character.image}
            key={index}
            name={character.name}
            species={character.species}
            all={character}
            favouriteIds={favouriteIds}
            showDeleteBtn={true}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <Loading />
      )}

      <div>
        <div className={`${css.wave} ${css.wave1}`}></div>
        <div className={`${css.wave} ${css.wave2}`}></div>
        <div className={`${css.wave} ${css.wave3}`}></div>
        <div className={`${css.wave} ${css.wave4}`}></div>
      </div>
    </section>
  );
}
