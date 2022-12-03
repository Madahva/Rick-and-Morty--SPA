import "../assets/styles/Cards.css";
import jerryImg from "../assets/images/jerry.gif";
import Card from "./Card.jsx";

const Cards = (props) => {
  const { characters } = props;
  return (
    <div className="cards">
      <div className="jerry-container">
        <img className="jerry" src={jerryImg} alt="Jerry" />
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

      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </div>
  );
};

export default Cards;
