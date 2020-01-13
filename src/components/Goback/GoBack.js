import React from "react";
import "./goBack.css";
import arrowIcon from "../../img/chevron-left-solid.svg";

const GoBack = ({ onClick }) => (
  <div className="go__back-container" onClick={onClick} key="2">
    <img
      src={arrowIcon}
      alt="arrow icon to go back"
      className="arrow__go-back"
    />
  </div>
);
export default GoBack;
