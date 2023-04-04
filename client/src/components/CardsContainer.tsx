import type { ReactElement } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchFavourites,
  selectFavourites,
} from "../redux/features/favouriteSlice";
import { useAuth0 } from "@auth0/auth0-react";
import css from "../assets/styles/CardsContainer.module.css";
import jerryImg from "../assets/images/jerry.gif";
import { Card } from "./Card";
import { selectFilteredCharacters } from "../redux/features/homeSlice";
import { Character } from "../type";
export function CardsContainer(): ReactElement {
  const dispatch = useAppDispatch();
  const { user } = useAuth0();
  const characters: Character[] = useAppSelector(selectFilteredCharacters);
  const favourite = useAppSelector(selectFavourites);

  useEffect(() => {
    if (user?.email) {
      dispatch(fetchFavourites(user?.email));
    }
  }, [user]);

  const favouriteIds = favourite.map((item) => item.id);

  return (
    <section className={css.cards}>
      <div className={css.jerryContainer}>
        <img className={css.jerry} src={jerryImg} alt="Jerry" />
      </div>

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
