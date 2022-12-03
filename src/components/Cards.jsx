import css from "../assets/styles/Cards.module.css";
import jerryImg from "../assets/images/jerry.gif";
import Card from "./Card.jsx";

const Cards = (props) => {
  const { characters } = props;
  return (
    <div className={css.cards}>
      <div className={css.jerryContainer}>
        <img className={css.jerry} src={jerryImg} alt="Jerry" />
      </div>

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

      <div>
        <div className={`${css.wave} ${css.wave1}`}></div>
        <div className={`${css.wave} ${css.wave2}`}></div>
        <div className={`${css.wave} ${css.wave3}`}></div>
        <div className={`${css.wave} ${css.wave4}`}></div>
      </div>
    </div>
  );
};

export default Cards;
