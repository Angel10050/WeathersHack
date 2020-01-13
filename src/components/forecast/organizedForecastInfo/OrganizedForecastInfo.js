import React from "react";
import CardsForecast from "./../forecastCards/CardsForecast";

const OrganizedForecastInfo = ({ forecastData }) => {
  console.log(forecastData);
  const separateByDays = [];

  const handlerDays = forecastData.list.map(forecast =>
    new Date(forecast.dt * 1000).toLocaleDateString()
  );
  let daybyday = [...new Set(handlerDays)];

  for (let i = 0; i < daybyday.length; i++) {
    let byDays = forecastData.list.filter(
      item => new Date(item.dt * 1000).toLocaleDateString() === daybyday[i]
    );
    separateByDays.push(byDays);
  }
  separateByDays.shift();
  const dayByDayThreePM = separateByDays.map(item => item[3]);

  return <CardsForecast forecastPerDay={dayByDayThreePM} />;
};

export default OrganizedForecastInfo;
