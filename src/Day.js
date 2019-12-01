import React from "react";

export default function Day(props) {
    console.log(props.date);
    let days = 
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[props.date.getDay()];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]; 
      let month = months[props.date.getMonth()];
      let day = props.date.getDate();

      let hours = props.date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minuties = props.date.getMinutes();
      if (minuties < 10) {
        minuties = `0${minuties}`;
      }

    return (
    <div>
    {month} {day} | {weekDay} | {hours}:{minuties}
    </div>
    );
}