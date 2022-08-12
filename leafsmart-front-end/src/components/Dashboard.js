import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import Nav from "./Nav";
import Events from "./Events";
import CityData from "./CityData";
import Search from "./Search";
import Weather from "./Weather";
import AddFavourite from "./buttons/AddFavourite";

import "../styles/main.css";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const savedSearch = searchParams.get("searchKeyword");

  const [cityName, setCityName] = useState(savedSearch || null);
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
      <section className="bg-Isabelline py-5 min-h-screen">
        <div className="flex p-8 justify-between">
          <div className="w-[58%]">
            <div className="flex justify-between">
              <AddFavourite icon={<FaPlus size="40" />} cName={cityName} geonameId={geonameId}/>
              <Search value={savedSearch} onSearchChange={handleOnSearchChange} />
            </div>
            {cityName && <Events cityName={cityName} />}
          </div>
          {cityName && (
            <div className="w-[38%]">
              <div className="min-h-[180px] h-180 rounded-3xl p-4 mb-8 mt-4 w-486 bg-gradient-to-r from-Independence to-HeliotropeGray">
                <Weather coordinates={coordinates} />
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
