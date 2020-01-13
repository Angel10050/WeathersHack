import React from "react";
import "./forecastErrorMessage.css";

const ErrorPage = props => (
  <div className="errorMessageForecast__container">
    <p className="errorMessageForecast__span ">{props.errorMessage}</p>
    <p className="errorMessageForecast__instructions">
      Go back and try again to see the forecast.
    </p>
  </div>
);
export default ErrorPage;
