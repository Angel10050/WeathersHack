import React, { Component } from "react";
import axios from "axios";
import "./searchByCity.css";

import WeatherInfo from "../WeatherInfo/WeatherInfo";
import InputToSearch from "./InputToSearchByCity";
import Loader from "../loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import GoBack from "./../Goback/GoBack";
import ForecastByCityName from "../forecast/forecastByName/ForecastByCityName";

class SearchByCity extends Component {
  state = {
    loading: false,
    error: null,
    cityName: "",
    weatherData: false
  };

  handlerBackToInput = () => {
    this.setState({
      weatherData: false,
      cityName: ""
    });
  };

  fetchByName = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const response = axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`
        //poner la key de la api en un archivo y pasarlo al gitIgnore
      );
      const query = await response;
      this.setState({
        weatherData: query.data,
        loading: false,
        error: null
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  };

  handlerOnChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else if (this.state.error) {
      return (
        <ErrorPage
          errorMessage={this.state.error}
          handlerPrevView={this.props.handlerPrevView}
        />
      );
    } else if (this.state.weatherData) {
      return (
        <WeatherInfo
          weatherData={this.state.weatherData}
          handlerPrevView={this.props.handlerPrevView}
          view_description="Wherever you go"
        >
          <GoBack onClick={this.handlerBackToInput} />
          <ForecastByCityName cityName={this.state.cityName} />
          {/* poner aqui el compnente que voy a creaer y pasar le el nombre que se pone en el input */}
        </WeatherInfo>
      );
    } else if (this.state.weatherData === false) {
      return (
        <InputToSearch
          cityName={this.state.cityName}
          fetchByName={this.fetchByName}
          handlerOnChange={this.handlerOnChange}
          handlerPrevView={this.props.handlerPrevView}
          fetchByNameForecast={this.fetchByNameForecast}
        />
      );
    }
  }
}

export default SearchByCity;
