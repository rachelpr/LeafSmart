import { useState } from 'react'

import Nav from "./Nav";
import Events from "./Events";
import CityFacts from "./CityFacts";
import CurrentWeather from './CurrentWeather';
import QoLData from "./QoLData";
import Search from "./Search";
import ForecastWeather from './ForecastWeather';

import "../styles/main.css";
import "../index.css"; // brings in our custom layout styles from previous iterations -- we can replace those classes with TW utility

const Dashboard = () => {
  const [cityName, setCityName] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [geonameId, setGeonameId] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //sample searchData: {value: '5946768 53.55014 -113.46871', label: 'Edmonton, Alberta'}
    const lowercasedCity = searchData.label.split(",")[0].toLowerCase();
    const [geo, lat, lon] = searchData.value.split(" ");

    setCityName(lowercasedCity);
    setCoordinates([lat, lon]);
    setGeonameId(geo);
  }

  return (
    <main className="pl-44 pr-32 py-8">
      <Nav />
      <section>
        <Search onSearchChange={handleOnSearchChange}/>
        { cityName && (
          <div>
            <div>
              <Events cityName={cityName} />
            </div>
            <div>
              <CityFacts geonameId={geonameId} />
              <CurrentWeather className="bg-purple-200" coordinates={coordinates}/>
              <ForecastWeather coordinates={coordinates} />
              <QoLData cityName={cityName} />
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default Dashboard
