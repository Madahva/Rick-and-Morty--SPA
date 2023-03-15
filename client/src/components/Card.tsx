import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import css from "../assets/styles/Card.module.css";

export function Card(props: any): ReactElement {
  return (
    <div tabIndex={1} className={css.card} onKeyPress={props.onClose}>
      <div className={css["card__header"]}>
        <Link to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>

      <button tabIndex={0} onClick={props.onClose}>
        <div className={css["close-container"]}>
          <div className={css.leftright}></div>
          <div className={css.rightleft}></div>
        </div>
      </button>

      <img src={props.image} alt="Rick" />

      <div className={css["card__info"]}>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
}
