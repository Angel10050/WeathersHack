import React from "react";
import searchIcon from "./../../img/search-location-solid.svg";
import GoBack from "./../Goback/GoBack";

const InputToSearch = props => (
  <section className="searchBar containerBackground">
    <GoBack onClick={props.handlerPrevView} />
    <article className="search_header">
      <h1 className="search_bar_title">WeathersHack</h1>
      <span className="app_title_description">Write your search</span>
    </article>

    <div className="input_container">
      <div className="search">
        <input
          value={props.cityName}
          type="text"
          id="cityName"
          className="cityName"
          onChange={props.handlerOnChange}
          placeholdertext="hola"
        />
        <button
          onClick={() => {
            props.fetchByName();
          }}
          className="search_button"
        >
          <img
            className="search_icon"
            src={searchIcon}
            alt="magnifying glass icon"
          />
        </button>
      </div>

      <p className="search_instructions">
        For an accurate search
        <br /> write the name of the city and the initials of the country
        separated by a comma.
      </p>
      <label htmlFor="cityName" className="city_name_label">
        <span className="label_example">Ej: Chicago,Us</span>
      </label>
    </div>
  </section>
);
export default InputToSearch;
