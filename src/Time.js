import React from "react";

import "./Time.css";

let weatherData = {
  time: "Last updated: Tuesday 18:35",
  city: "Sydney",
  description: "Clear",
  temperature: 23,
  icon: "☀️",
  humidity: 60,
  wind: 12,
};

export default function Time() {
  return <span className="Time">{weatherData.time}</span>;
}
