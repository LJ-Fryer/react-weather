import React from "react";

import "./App.css";

import Header from "./Header";
import CityWeather from "./CityWeather";
import CityTemperature from "./CityTemperature";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="weather-app">
          <Header />
          <div className="d-flex justify-content-between">
            <CityWeather />
            <CityTemperature />
          </div>
        </div>
      </body>
    </div>
  );
}
