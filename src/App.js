import React, { useState } from "react";
import Footer from "./Footer";
import "./Styles.css";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState(false);
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
    setSearch(true);
  }

  function searchCity() {
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <div class="weather-app">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            type="search"
            placeholder="Enter a City..."
            onChange={updateCity}
          />
          <input
            className="search-form-button"
            type="submit"
            name="Search"
            value={"search"}
          />
        </form>
      </header>
    </div>
  );

  if (search) {
    return (
      <div className="weather-app-data">
        <strong>{city}</strong>{" "}
        <div classname="weather-app-details">
          <p>
            Thursday, 10:47, condition: {weather.description}, humidity:{" "}
            <strong> {weather.humidity}%</strong>
            wind: <strong>{Math.round(weather.wind)} km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <span className="weather-app-icon">
            <img alt="icon" src={weather.icon} />
          </span>
          <span class="weather-app-temperature">
            <strong>{Math.round(weather.temperature)}</strong>
          </span>
          <span class="weather-app-unit">°C</span>
        </div>
        <Footer />
      </div>
    );
  } else {
    return form;
  }
}
