import type { ReactElement } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  selectCharacterDetails,
  fetchCharacterDetails,
} from "../redux/features/homeSlice";
import { Character } from "../type";
import css from "../assets/styles/Details.module.css";
import css2 from "../assets/styles/CardsContainer.module.css";

export function Details(): ReactElement {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const character: Character = useAppSelector(selectCharacterDetails);

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [dispatch]);

  return (
    <div className={css.detail}>
      <div className={css.character}>
        <img src={character.image} alt={character.name} />
        <div className={css["character__info"]}>
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          {character.type && <p>Type: {character.type}</p>}
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>

      <div>
        <div className={`${css2.wave} ${css2.wave1}`}></div>
        <div className={`${css2.wave} ${css2.wave2}`}></div>
        <div className={`${css2.wave} ${css2.wave3}`}></div>
        <div className={`${css2.wave} ${css2.wave4}`}></div>
      </div>
    </div>
  );
}
