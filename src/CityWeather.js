import React from "react";
import CityName from "./CityName";
import CityConditions from "./CityConditions";

import "./CityWeather.css";

export default function CityWeather() {
  return (
    <div className="CityWeather">
      <CityName />
      <CityConditions />
    </div>
  );
}
