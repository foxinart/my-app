import React, { useState } from "react";

export default function Temperature(props) {
const[unit, setUnit] = useState("celsius");
function displayFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === 'celsius') {
    return (
        <div className="weatherTemperature">
        <span>
            {Math.round(props.celsius)}
            </span>
            <span className="weather-unit">
            <small>
                ºC | {" "}
              <a href="/" onClick={displayFahrenheit}>
                ºF
              </a>
            </small>
          </span>
          </div>   
    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="weatherTemperature">

        <span>
            {Math.round(fahrenheit)}
            </span>

            <span className="weather-unit">
            <small>
            <a href="/" onClick={displayCelsius}>
                ºC
              </a>{" "}
              | ºF
            </small>
          </span>
          </div>   
    );
}



}