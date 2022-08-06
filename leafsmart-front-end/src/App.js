import { useState } from "react";

import Nav from "./components/Nav";
import Events from "./components/Events"
import CityFacts from "./components/CityFacts";
import QoLData from "./components/QoLData";
import Search from "./components/Search";

import "./styles/main.css";
import "./App.scss";


const App = () => {
  const [cityName, setCityName] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [geonameId, setGeonameId] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //sample searchData: {value: '5946768 53.55014 -113.46871', label: 'Edmonton, Alberta'}
    const lowercasedCity = searchData.label.split(",")[0].toLowerCase();
    const [geo, lat, lon] = searchData.value.split(" ");

    setCityName(lowercasedCity);
    setCoordinates({lat: lat, lon: lon});
    setGeonameId(geo);
  }

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-amber-50">Widgets</h1>
          <Search onSearchChange={handleOnSearchChange}/>
          <CityFacts
            geonameId={geonameId}
          />
          <Events
            cityName={cityName}
          />
          <QoLData />
        </div>
      </section>
    </main>
  );
};

export default App;
