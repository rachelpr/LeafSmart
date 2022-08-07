import { React } from "react";

//a component for each daily weather
export default function ForecastWeatherCard(props) {
  const formatTemp = () => {
    return Math.round(props.temp);
  };
//console.log(props)
  return (
    <li>
      <img alt="daily weather" src={`/icons/${props.icon}.png`} />
      <p>{props.description}</p>
      <p>{formatTemp(props.temp)}°C</p>
      <p>{props.day}</p>
    </li>
  );
}
