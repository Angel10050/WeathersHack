import React from "react";
import "./loader.css";

const Loader = () => (
  <div className="loaderContainer">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <p className="loader__text">Wait for WeathersHack</p>
  </div>
);
export default Loader;
