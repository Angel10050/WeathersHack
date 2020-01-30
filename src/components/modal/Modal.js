import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = () => {
  return ReactDOM.createPortal(
    <section className="modalContainer">
      <div className="modalContainer">
        <h1>
          WeathersHack needs your location. <br /> Please "Allow" it.
        </h1>
      </div>
    </section>,
    document.getElementById("modal")
  );
};

export default Modal;
