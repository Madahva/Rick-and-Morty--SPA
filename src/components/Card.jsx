import css from "../assets/styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div tabIndex={1} className={css.card} onKeyPress={props.onClose}>
      <div className={css["card__header"]}>
        <Link to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>

      <button tabIndex={0} onClick={props.onClose}>
        <div class={css["close-container"]}>
          <div class={css.leftright}></div>
          <div class={css.rightleft}></div>
        </div>
      </button>

      <img src={props.image} alt="Rick" />

      <div className={css["card__info"]}>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
};

export default Card;
