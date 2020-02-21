import React from "react";
import "./cardsForecast.css";

const CardsForecast = ({ forecastPerDay, days }) => {
  
  const options = { weekday: "long" };
  const mainInfo = forecastPerDay.map(day => day.main.temp);
  const dayWeatherInfo = forecastPerDay.map(day => day.weather[0]);

  return (
    <>
      <div className="forecast__card__container">
        {dayWeatherInfo.map((item, i) => {
          return (
            <section key={i} className="forecast__card">
              <p className="days__of__data">
                {new Intl.DateTimeFormat("en-US", options).format(days[i])}
              </p>
              <div className="weather__temp__icon">
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="icon about the weather"
                  className="forecast__icon"
                />
                <p className="forecast__temp">{mainInfo[i].toFixed(0)}°C</p>
              </div>
              <p className="forecast_description">{item.description}</p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default CardsForecast;
