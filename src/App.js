import React, { Component } from "react";
import Main from "./components/main/Main";

class App extends Component {
  state = {
    longitude: "",
    latitude: ""
  };
  geolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const location = position;
      return this.setState({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      });
    });
  };
  render() {
    this.geolocation();
    return (
      <Main
        longitude={this.state.longitude}
        latitude={this.state.latitude}
        geolocation={this.geolocation}
      />
    );
  }
}

export default App;
