import React from "react";
import GoBack from "./../Goback/GoBack";
import "./errorPage.css";

const ErrorPage = props => (
  <div className="errorMessage__container">
    <GoBack onClick={() => props.handlerPrevView()} />
    <p className="errorMessage__span errorMessage">{props.errorMessage}</p>
    <p className="errorMessage__instructions"> Go back and try again.</p>
  </div>
);
export default ErrorPage;
