import { React, useState, useEffect } from "react";

import axios from "axios";
import "./CurrentWeather.css";
import ForecastWeatherCard from "./ForecastWeatherCard";
import { forecastDays } from "../helpers/selectors";

const ForecastWeather = (props) => {
  const { coordinates } = props;
  const [forecastWeather, setForecastWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const apiUrl = process.env.REACT_APP_WEATHERBIT_ENDPOINT;
  const apiKey = process.env.REACT_APP_WEATHERBIT_KEY;

  useEffect(() => {
    if (coordinates.length > 0) {
      //console.log(coordinates);
      const [lat, lon] = coordinates;

      // Weatherbit API Endpoint
      setIsLoading(true);
      const forecastWeatherEndpoint = `${apiUrl}/forecast/daily?&lat=${lat}&lon=${lon}&key=${apiKey}`;

      axios
        .get(forecastWeatherEndpoint)
        .then((res) => {
          const data = res.data["data"];
          setForecastWeather(data);
          setIsLoading(false);
          //console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [coordinates, apiUrl, apiKey]);

  const forecastDaysArr = forecastWeather
    .splice(1, 6)
    .map((forecastWeather, index) => {
      return (
        <ForecastWeatherCard
          key={index}
          icon={forecastWeather.weather.icon}
          description={forecastWeather.weather.description}
          temp={forecastWeather.temp}
          day={forecastDays()[index]}
        />
      );
    });

  return (
      <section>
        {isLoading && (
          /* put a fun spinner */
          <h1>is Loading?</h1>
        )}
        {forecastWeather.length > 0 && (
          <ul className="flex">{forecastDaysArr}</ul>
        )}
      </section>
  );
};

export default ForecastWeather;
