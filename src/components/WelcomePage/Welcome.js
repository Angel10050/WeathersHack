import React from "react";

import "./welcomePage.css";
// import sunCloudLogo from "../../img/cloud-sun-solid.svg";
import GoAhead from "./../goAhead/GoAhead";

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
  </section>
);

export default Welcome;
