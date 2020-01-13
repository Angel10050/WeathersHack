import React from "react";

import "./welcomePage.css";
// import sunCloudLogo from "../../img/cloud-sun-solid.svg";
import GoAhead from "./../goAhead/GoAhead";

const Welcome = props => (
  <section className="all__welcome_container containerBackground">
    <div className="welcome__container">
      <p className="welcome__title">¡¡ Welcome to WeathersHack !!</p>

      <GoAhead
        onClick={() => {
          props.HandlerfetchData();
          props.handlerNextView();
        }}
      />

      <ul className="app_features">
        <li className="feature_description">
          - The weather where you are and where you go.
        </li>
        <li className="feature_description">- Easy and fast.</li>
        <li className="feature_description">
          - Clear, simple and accurate information. Everything you need.
        </li>
      </ul>
    </div>
  </section>
);

export default Welcome;
