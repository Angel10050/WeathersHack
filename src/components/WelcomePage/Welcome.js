import React from "react";
import ReactDOM from "react-dom";

import "./welcomePage.css";

import GoAhead from "./../goAhead/GoAhead";
import Modal from "../modal/Modal";

const Welcome = props => (
  <section className="containerBackground all__welcome_container">
    <GoAhead
      onClick={() => {
        props.HandlerfetchData();
        props.handlerNextView();
      }}
    />
    <div className="welcome__container">
      <p className="welcome__title">¡¡ Welcome to WeathersHack !!</p>

      <ul className="app_features">
        <li className="feature_description">
          - The weather where you are <br /> and where you go.
        </li>
        <li className="feature_description">- Easy and fast.</li>
        <li className="feature_description">- forecasts for the whole week</li>
        <li className="feature_description">
          - Clear, simple and accurate information.
          <br /> Everything you need.
        </li>
      </ul>
    </div>
    {props.coordinates ? "" : <Modal />}
  </section>
);

export default Welcome;
