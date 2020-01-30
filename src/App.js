import React, { Component } from "react";
import Main from "./components/main/Main";

class App extends Component {
  state = {
    longitude: "",
    latitude: "",
    thereAreCoordinates: false
  };
  componentDidMount() {
    this.geolocation();
  }
  geolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const location = position;
      return this.setState({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        thereAreCoordinates: true
      });
    });
  };
  render() {
    return (
      <Main
        longitude={this.state.longitude}
        latitude={this.state.latitude}
        coordinates={this.state.coordinates}
        geolocation={this.geolocation}
      />
    );
  }
}

export default App;
