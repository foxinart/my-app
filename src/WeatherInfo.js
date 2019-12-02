import React from "react";
import Day from "./Day";

export default function WeatherInfo(props) {

    return (
        <hr />
    <div class="row">
          <div class="col-4">
          <h1 id="city-name">{props.data.city}</h1>       
          </div>
    <ul id="data-time">
      <li>
      <Day date={props.data.date} />
      </li>
      <li id="description">{props.data.description}</li>
    </ul>
    </div>

    <div className="col-4">
        <div className="clearfix">
              <img
                id="icon-today"
                src={props.data.icon}
                alt={props.data.description}
              />
              
              <div>
      <div className="weather-temperature-today">
        <span id="temperature">{Math.round(props.data.temperature)}</span>

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
        Atm. pressure: {Math.round(props.data.pressure)} hPa
      </li>
      <li>
        Humidity: {Math.round(props.data.humidity)}%
      </li>
      <li>
        Wind: {props.data.wind} km/h
      </li>
    </ul>
    </div>
    

<hr id="second-line" /> 
);
}