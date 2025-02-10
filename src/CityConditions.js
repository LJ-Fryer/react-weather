import React from "react";
import "./CityConditions.css";

let weatherData = {
  time: "Last updated: Tuesday 18:35",
  city: "Sydney",
  description: "Clear",
  temperature: 23,
  icon: "☀️",
  humidity: 60,
  wind: 12,
};

export default function CityConditions() {
  return (
    <p className="CityConditions">
      {weatherData.description}
      <br />
      Humidity: <strong>{weatherData.humidity}%</strong> <br />
      Wind: <strong>{weatherData.wind}km/h</strong>
    </p>
  );
}
