import React from "react";
import Nav from "./components/Nav";
import Events from "./components/Events";
import "./App.scss";
import CityFacts from "./components/CityFacts";
import QoLData from "./components/QoLData";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import "./styles/main.css";

const handleOnSearchChange = (searchData) => {
  //response contains { label: "Toronto, ON", value: "43.670277777 -79.386666666" }
  console.log(searchData);
};

const App = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-amber-50">
            Widgets
          </h1>
          <Search onSearchChange={handleOnSearchChange} />
          <CurrentWeather />
          <CityFacts />
          <Events />
          <QoLData />
        </div>
      </section>
    </main>
  );
};

export default App;
