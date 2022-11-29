import "../styles/Cards.css";
import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="cards">
      {characters.map((character) =>
        <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={()=>alert("Emulamos que se cierra la card")}
        />
      )}
    </div>
  );
}
