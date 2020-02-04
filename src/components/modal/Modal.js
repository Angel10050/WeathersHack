import React from "react";
import ReactDOM from "react-dom";
import arrow from "./../../img/share-solid.svg";

import "./modal.css";

const Modal = () => {
  return ReactDOM.createPortal(
    <section className="modalContainer">
      <div className="modalContainer">
        <img className="allowArrow" src={arrow} alt="arrow to allow location" />
        <h1 className="modal__txt">
          WeathersHack needs your location. <br /> Please "Allow" it.
        </h1>
      </div>
    </section>,
    document.getElementById("modal")
  );
};

export default Modal;
