import React from "react";
import "./CityTemperature.css";

let weatherData = {
  time: "Last updated: Tuesday 18:35",
  city: "Sydney",
  description: "Clear",
  temperature: 23,
  icon: "☀️",
  humidity: 60,
  wind: 12,
};
export default function CityTemperature() {
  return (
    <div className="CityTemperature">
      <div className="icon">{weatherData.icon}</div>
      <div className="weather-app-temperture">{weatherData.temperature}</div>
      <div className="weather-app-unit">°C</div>
    </div>
  );
}
