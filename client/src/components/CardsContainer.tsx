import type { ReactElement } from "react";
import css from "../assets/styles/CardsContainer.module.css";
import jerryImg from "../assets/images/jerry.gif";
import { Card } from "./Card";
import { useAppSelector } from "../redux/hooks";
import { selectFilteredCharacters } from "../redux/features/homeSlice";
import { Character } from "../type";
export function CardsContainer(): ReactElement {
  const characters: Character[] = useAppSelector(selectFilteredCharacters);

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
