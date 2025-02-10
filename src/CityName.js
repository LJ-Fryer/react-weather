import React from "react";
import "./CityName.css";

let weatherData = {
  time: "Last updated: Tuesday 18:35",
  city: "Sydney",
  description: "Clear",
  temperature: 23,
  icon: "☀️",
  humidity: 60,
  wind: 12,
};

export default function CityName() {
  return <h1 className="weather-app-city">{weatherData.city}</h1>;
}
