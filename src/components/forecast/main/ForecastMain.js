import React, { Component } from "react";
import axios from "axios";
import OrganizedForecastInfo from "../organizedForecastInfo/OrganizedForecastInfo";
import Loader from "../../loader/Loader";
import ForecastErrorMessage from "./../../ErrorPage/forecastErrorMessage/ForecastErrorMessage";

class ForecastMain extends Component {
  state = {
    loading: false,
    error: null,
    showForecast: false,
    forecastData: {}
  };

  componentDidMount() {
    this.forecastFetch();
  }

  handlerShowForecast = () => {
    this.setState({
      showForecast: true
    });
  };

  forecastFetch = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const query = axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          this.props.latitude
        }&lon=${this.props.longitude}&units=metric&appid=${process.env
          .REACT_APP_KEY_OPEN_WEATHER_FORECAST ||
          "c2c5800fa1c4f40a28ed1db4dbf79a3a"}`
      );
      const response = await query;
      this.setState({
        loading: false,
        error: null,
        forecastData: response.data,
        showForecast: true
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else if (this.state.error) {
      return <ForecastErrorMessage errorMessage={this.state.error} />;
    } else if (
      this.state.forecastData === undefined ||
      this.state.showForecast === false
    ) {
      return "";
    } else if (this.state.forecastData) {
      return <OrganizedForecastInfo forecastData={this.state.forecastData} />;
    }
  }
}
export default ForecastMain;
