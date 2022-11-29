import "../styles/Card.css"

export default function Card(props) {
   return (
      <div className="card">
        <div className="card__header">
          <h2>{props.name}</h2>
          <button onClick={props.onClose}>X</button>
        </div>
        <img  src={props.image} alt="Rick" />
        <div className="card__info">
          <p>{props.species}</p>
          <p>{props.gender}</p>
        </div>
      </div>
   );
}
