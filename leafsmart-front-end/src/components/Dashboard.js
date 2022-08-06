import React from 'react'
import Nav from "./Nav";
import Events from "./Events";
import CityFacts from "./CityFacts";
import CurrentWeather from './CurrentWeather';
import QoLData from "./QoLData";
import Search from "./Search";

import "../App.scss";
import "../styles/main.css";

const handleOnSearchChange = (searchData) => {
  //response contains { label: "Toronto, ON", value: "43.670277777 -79.386666666" }
  console.log(searchData);
};

const Dashboard = () => {
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
          <CityFacts />
          <CurrentWeather />
          <Events />
          <QoLData />
        </div>
      </section>
    </main>
  )
}

export default Dashboard
