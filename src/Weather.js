
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {


  const [weatherData, setWeatherData] = useState({ready: false});

function displayResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    day: "November 11 | Monday",
    time: "12:05",
    description: response.data.weather[0].description,
    icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: response.data.main.temp,
    pressure: response.data.main.pressure,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name
  });
}

if (weatherData.ready) {
  return (
    <div className="App">
      <section className="weather-app">
      <div className="search">
      <form id="search-form">
        <div className="row">
          <div className="col-3">
            <input
              id="search-input"
              type="text"
              placeholder="Type a city..."
              autocomplete="off"
            />
          </div>
          <div className="col-2">
            <input id="btn" type="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
        <hr />
        <div class="row">
          <div class="col-4">
          <h1 id="city-name">{weatherData.city}</h1>
          <ul id="data-time">
      <li>{weatherData.day}</li>
      <li>{weatherData.time}</li>
      <li>{weatherData.description}</li>
    </ul>
          </div>

          <div className="col-4">
            <div className="clearfix">
              <img
                id="icon-today"
                src={weatherData.icon}
                alt={weatherData.description}
              />
              <div>
      <div className="weather-temperature-today">
        <span id="temperature">{Math.round(weatherData.temperature)}</span>

        <span className="weather-unit">
          <small>
            <a href="/" id="celsius" class="active">
              ºC
            </a>
            |
            <a href="/" id="fahrenheit">
              ºF
            </a>
          </small>
        </span>
      </div>
    </div>
            </div>
          </div>

          <div className="col-4">
          <ul id="other-values">
      <li>
        Atm. pressure: {Math.round(weatherData.pressure)} hPa
      </li>
      <li>
        Humidity: {Math.round(weatherData.humidity)}%
      </li>
      <li>
        Wind: {weatherData.wind} km/h
      </li>
    </ul>
          </div>
        </div>

        <hr id="second-line" />
      </section>

      <div id="open-source">
        <small>
          <a href="https://github.com/foxinart/my-app">
            GitHub source
          </a>{" "} by Fox In Art
        </small>
      </div>
    </div>
);
  
} else {
  const apiKey = "c5c1992383057589b3e373582566187c";
  let city = "Lisbon";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayResponse);

  return "Loading";
}

}
