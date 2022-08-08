import { React, useState, useEffect } from "react";

import axios from "axios";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const { coordinates } = props;

  const [currentWeather, setCurrentWeather] = useState({});
  const [isLoading, setIsLoading] = useState(null);

  const apiUrl = process.env.REACT_APP_WEATHERBIT_ENDPOINT;
  const apiKey = process.env.REACT_APP_WEATHERBIT_KEY;

  useEffect(() => {
    if (coordinates.length > 0) {
      console.log(coordinates);
      const [lat, lon] = coordinates;

      // Weatherbit API Endpoint
      setIsLoading(true);
      const currentWeatherEndpoint = `${apiUrl}/current?lat=${lat}&lon=${lon}&key=${apiKey}`;
      axios
        .get(currentWeatherEndpoint)
        .then((res) => {
          const data = res.data["data"][0];
          setCurrentWeather(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [coordinates, apiUrl, apiKey]);
  //console.log(currentWeather);

  return (
    <main>
      <section>
        {isLoading && (
          /* put a fun spinner */
          <h1>is Loading?</h1>
        )}
        {Object.keys(currentWeather).length > 0 && (
          <div className="weather">
            <div className="top">
              <div>
                <p className="city">{currentWeather.city_name}</p>
                <p className="weather-description">
                  {currentWeather.weather.description}
                </p>
              </div>
              <img
                alt="weather"
                className="weather-icon"
                src={`/icons/${currentWeather.weather.icon}.png`}
              />
            </div>
            <div className="bottom">
              <p className="temperature">{currentWeather.temp}°C</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CurrentWeather;
