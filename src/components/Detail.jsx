import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "../assets/styles/Detail.module.css";
import css2 from "../assets/styles/Cards.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={css.detail}>
      <div className={css.character}>
        <img src={character.image} alt={character.name} />
        <div className={css["character__info"]}>
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
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
};

export default Detail;
