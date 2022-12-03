import "../assets/styles/Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div tabIndex={1} className="card" onKeyPress={props.onClose}>
      <div className="card__header">
        <Link to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
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
};

export default Card;
