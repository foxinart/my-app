
// eslint-disable-next-line
import React, { useState } from "react";
// eslint-disable-next-line
import axios from "axios";

export default function Weather () {
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
          <div className="col-9">
            <input id="btn" type="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
        <hr />
        <div class="row">
          <div class="col-4">
          <h1 id="city-name">Lisbon</h1>
          <ul id="data-time">
      <li id="current-day">November 11 | Monday</li>
      <li id="current-time">12:05</li>
      <li id="status">Partly cloudy</li>
    </ul>
          </div>

          <div className="col-4">
            <div className="clearfix">
              <img
                id="icon-today"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />
              <div>
      <div className="weather-temperature-today">
        <span id="temperature">24</span>

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
        Atm. pressure: 1000
        <span id="pressure" /> hPa
      </li>
      <li>
        Humidity: 50
        <span id="humidity" />%
      </li>
      <li>
        Wind: 4<span id="wind" /> km/h
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
}
