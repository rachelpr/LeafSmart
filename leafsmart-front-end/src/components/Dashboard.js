import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import Nav from "./Nav";
import Events from "./Events";
import AddFavourite from "./buttons/AddFavourite";
import CurrentWeather from './CurrentWeather';
import Search from "./Search";
import ForecastWeather from './ForecastWeather';
import CityData from './CityData';

import "../styles/main.css";

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
  };

  return (
    <main className="pl-44 pr-32">
      <Nav />
      <section className="bg-Isabelline py-5">
        <div className="flex p-8 w-100">
          <div>
            <div className="flex justify-between">
              <Link to="#">
                <AddFavourite icon={<FaPlus size="40" />} />
              </Link>
              <Search onSearchChange={handleOnSearchChange} />
            </div>
            {cityName && <Events cityName={cityName} />}
          </div>
          {cityName && (
            <div className="ml-12">
              <div className=" border rounded-3xl p-4 mb-8 mt-4 w-486 bg-gradient-to-r from-Independence to-HeliotropeGray">
                <CurrentWeather coordinates={coordinates} />
                <ForecastWeather coordinates={coordinates} />
              </div>
              <CityData geonameId={geonameId} cityName={cityName}/>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
