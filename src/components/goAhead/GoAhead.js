import React from "react";
import "./goAhead.css";
import arrowRigthIcon from "../../img/chevron-right-solid.svg";

const GoBack = ({ onClick }) => (
  <div className="go__ahead-container" onClick={onClick} key="1">
    <img
      src={arrowRigthIcon}
      alt="arrow icon to go ahead"
      className="arrow__go-ahead"
    />
  </div>
);

export default GoBack;
