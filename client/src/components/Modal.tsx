import type { ReactElement } from "react";
import css from "../assets/styles/Modal.module.css";

export function Modal({ visible, toggleModal }: any): ReactElement {
  return (
    <div
      className={css.modal}
      style={{ display: visible ? "block" : "none" }}
      onClick={toggleModal}
    >
      <p>Sorry, you must be logged in to do that! 🤭</p>
    </div>
  );
}
