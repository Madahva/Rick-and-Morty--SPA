import type { ReactElement } from "react";
import css from "../styles/CardsContainer.module.css";
import jerryImg from "../images/jerry.gif";
import { Card } from "./Card";

export function CardsContainer(): ReactElement {
  return (
    <div className={css.cards}>
      <div className={css.jerryContainer}>
        <img className={css.jerry} src={jerryImg} alt="Jerry" />
      </div>

      {/*
  {characters.map((character) => (
    <Card
      gender={character.gender}
      id={character.id}
      image={character.image}
      key={character.id}
      name={character.name}
      onClose={() => props.onClose(character.id)}
      species={character.species}
    />
  ))}
*/}

      <div>
        <div className={`${css.wave} ${css.wave1}`}></div>
        <div className={`${css.wave} ${css.wave2}`}></div>
        <div className={`${css.wave} ${css.wave3}`}></div>
        <div className={`${css.wave} ${css.wave4}`}></div>
      </div>
    </div>
  );
}
