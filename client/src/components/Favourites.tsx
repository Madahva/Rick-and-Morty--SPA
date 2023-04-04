import type { ReactElement } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchFavourites,
  selectFavourites,
  deleteFavourite,
} from "../redux/features/favouriteSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "./Card";
import css from "../assets/styles/CardsContainer.module.css";

export function Favourites(): ReactElement {
  const { user } = useAuth0();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectFavourites);
  const favouriteIds = characters.map((item) => item.id);

  useEffect(() => {
    dispatch(fetchFavourites(user?.email));
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
      {characters &&
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
        ))}

      <div>
        <div className={`${css.wave} ${css.wave1}`}></div>
        <div className={`${css.wave} ${css.wave2}`}></div>
        <div className={`${css.wave} ${css.wave3}`}></div>
        <div className={`${css.wave} ${css.wave4}`}></div>
      </div>
    </section>
  );
}
