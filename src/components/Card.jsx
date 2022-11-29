import "../styles/Card.css";

export default function Card(props) {
  return (
    <div tabIndex={1} className="card" onKeyPress={props.onClose} on>
      <div className="card__header">
        <h2>{props.name}</h2>
      </div>
      <button tabIndex={0} onClick={props.onClose}>
        X
      </button>
      <img src={props.image} alt="Rick" />
      <div className="card__info">
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
}
