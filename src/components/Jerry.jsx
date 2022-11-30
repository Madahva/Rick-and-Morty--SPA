import React from "react";
import "../styles/Jerry.css"
import jerryImg from "../assets/images/jerry.gif"

const Jerry = () => {
  return (
    <div className="jerry-container">
      <img className="jerry" src={jerryImg} alt="Jerry" />
    </div>
  );
};

export default Jerry;
