import React, { Component } from "react";
import axios from "axios";
import Welcome from "../WelcomePage/Welcome";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "./../loader/Loader";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import SearchByCityName from "../searchByCityName/SearchByCityName";
import GoBack from "./../Goback/GoBack";
import GoAhead from "./../goAhead/GoAhead";
import ForecastMain from "./../forecast/main/ForecastMain";

class Main extends Component {
  state = {
    loading: false,
    ShowMoreDetails: false,
    error: null,
    nextView: 0,
    weatherInfo: {}
  };

  handlerNextView = () => {
    this.setState({
      nextView: this.state.nextView + 1
    });
  };

  handlerPrevView = () => {
    this.setState({
      nextView: this.state.nextView - 1
    });
  };

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const query = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&units=metric&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`
      );
      const response = await query;
      this.setState({
        weatherInfo: response.data,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  };
  render() {
    if (this.state.error && this.state.nextView === 1) {
      return (
        <ErrorPage
          errorMessage={this.state.error}
          handlerPrevView={this.handlerPrevView}
        />
      );
    } else if (this.state.loading) {
      return <Loader />;
    } else if (this.state.nextView === 0) {
      return (
        <Welcome
          HandlerfetchData={this.fetchData}
          handlerNextView={this.handlerNextView}
          coordinates={this.props.coordinates}
        />
      );
    } else if (this.state.nextView === 1) {
      return (
        <>
          <WeatherInfo
            weatherData={this.state.weatherInfo}
            handlerPrevView={this.handlerPrevView}
            ShowMoreDetails={this.ShowMoreDetails}
            handlerNextView={this.handlerNextView}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            view_description="Where you are"
          >
            <GoBack onClick={this.handlerPrevView} />
            <GoAhead onClick={this.handlerNextView} />
            <ForecastMain
              latitude={this.props.latitude}
              longitude={this.props.longitude}
            />
          </WeatherInfo>
        </>
      );
    } else if (this.state.nextView === 2) {
      return <SearchByCityName handlerPrevView={this.handlerPrevView} />;
    }
  }
}

export default Main;
