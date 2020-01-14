import React from "react";

import "./weatherInfo.css";

const WeatherInfo = props => {
  let weather = props.weatherData;
  return (
    <div className="containerBackground weather__all-container">
      {props.children[0]}
      <article className="view_description_container">
        <h2 className="app__title">WeathersHack</h2>
        <span className="app_view_description">{props.view_description}</span>
      </article>
      <section className="weather__card">
        <h1 className="weather__main-city">
          <strong className="weather__location">
            {weather.name},{weather.sys.country}
          </strong>
        </h1>

        {weather.weather.map(item => {
          return (
            <section className="current__data" key={item.id}>
              <div className="main__description">
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="icon about the main weather"
                  className="weather__icon"
                />
                <strong className="temperature">
                  {weather.main.temp.toFixed(0)}°C
                </strong>
              </div>
              <p className="weather__description">
                {item.description.charAt(0).toUpperCase() +
                  item.description.slice(1)}
              </p>
            </section>
          );
        })}
        <article className="weather__values">
          <p>Humudity {weather.main.humidity}%</p>
          <p>Wind {weather.wind.speed}M/s</p>
        </article>
      </section>
      {props.children[1]}
      {props.children[2]}
    </div>
  );
};
export default WeatherInfo;
