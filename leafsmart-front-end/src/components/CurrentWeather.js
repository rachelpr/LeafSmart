import { React, useState, useEffect } from "react";
import { WeatherApiKey, WeatherApiUrl } from "../openWeatherAPI";
import axios from "axios";
import "./CurrentWeather.css"

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    let lat = 44.64533;
    let lon = -63.57239;

    // Open Weather API Endpoint
    setIsLoading(true);
    const currentWeatherEndpoint = `${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`;
    axios
      .get(currentWeatherEndpoint)
      .then((res) => {
        const data = res.data;
        setCurrentWeather(data);
        setIsLoading(false);
        //console.log(currentWeather);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <section>
        {isLoading ? (
          /* put a fun spinner */
          <h1>is Loading?</h1>
        ) : (
          <div className="weather">
            <div className="top">
              <div>
                <p className="city">{currentWeather.name}</p>
                <p className="weather-description">
                  {currentWeather.weather[0].description}
                </p>
              </div>
              <img
                alt="weather"
                className="weather-icon"
                src={`/icons/${currentWeather.weather[0].icon}.png`}
              />
            </div>
            <div className="bottom">
              <p className="temperature">
                {Math.round(currentWeather.main.temp)}°C
              </p>
              <div className="details">
                <div className="param-row">
                  <span className="param-label">Feels like</span>
                  <span className="param-value">
                    {Math.round(currentWeather.main.feels_like)}°C
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CurrentWeather;
