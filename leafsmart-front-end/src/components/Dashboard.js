import { useState } from 'react'

import Nav from "./Nav";
import Events from "./Events";
import CityFacts from "./CityFacts";
import QoLData from "./QoLData";
import Search from "./Search";

import "../styles/main.css";

const Dashboard = () => {
  const [cityName, setCityName] = useState(null);
  // const [coordinates, setCoordinates] = useState({}); // waiting for weather api integration
  const [geonameId, setGeonameId] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //sample searchData: {value: '5946768 53.55014 -113.46871', label: 'Edmonton, Alberta'}
    const lowercasedCity = searchData.label.split(",")[0].toLowerCase();
    const [geo] = searchData.value.split(" ");

    setCityName(lowercasedCity);
    // setCoordinates({lat: lat, lon: lon});
    setGeonameId(geo);
  }

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <section className="widgets">
        <div>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-amber-50">Widgets</h1>
          <Search onSearchChange={handleOnSearchChange}/>
          <CityFacts geonameId={geonameId} />
          <Events cityName={cityName} />
          <QoLData cityName={cityName} />
        </div>
      </section>
    </main>
  )
}

export default Dashboard
