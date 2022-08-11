import { React, useState, useEffect } from "react";

import axios from "axios";
import ForecastWeatherCard from "./ForecastWeatherCard";
import { forecastDays } from "../helpers/selectors";

const Weather = (props) => {
  const { coordinates } = props;
  const [forecastWeather, setForecastWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
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
      const currentWeatherEndpoint = `${apiUrl}/current?lat=${lat}&lon=${lon}&key=${apiKey}`;

      const forecastPromise = axios.get(forecastWeatherEndpoint);
      const currentWeatherPromise = axios.get(currentWeatherEndpoint);

      Promise.all([forecastPromise, currentWeatherPromise])
        .then((res) => {
          //console.log(res)
          const forecastResponse = res[0];
          const forecastData = forecastResponse.data["data"];
          const currentWeatherResponse = res[1];
          const currentWeatherData = currentWeatherResponse.data["data"][0];
          //console.log(currentWeatherData);
          setForecastWeather(forecastData);
          setCurrentWeather(currentWeatherData);
          setIsLoading(null);
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
    <section className="flex justify-center items-center">
      {isLoading && (
        /* put a fun spinner */
        <>
          <svg
            aria-hidden="true"
            className="mr-2 w-7 h-7 text-Isabelline animate-spin dark:text-gray-600 fill-Independence"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          {/* <span className="sr-only">Loading...</span> */}
        </>
      )}
      {Object.keys(currentWeather).length > 0 && !isLoading && (
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <p className="city">{currentWeather.city_name}</p> */}
              <p className="text-White">
                Today: {Math.round(currentWeather.temp)}°C
              </p>
            </div>
            <div className="flex items-center">
              <img
                alt="weather"
                className="w-14 h-14"
                src={`/icons/${currentWeather.weather.icon}.svg`}
              />
              <p className="text-White">{currentWeather.weather.description}</p>
            </div>
          </div>
          {forecastWeather.length > 0 && !isLoading && (
          <ul className="flex justify-between text-White">{forecastDaysArr}</ul>
          )}
        </div>
      )}
      
    </section>
  );
};

export default Weather;
