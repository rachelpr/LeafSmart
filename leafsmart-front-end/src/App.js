import React, { Fragment, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Events from "./components/Events"
import "./App.scss";
import CityFacts from "./components/CityFacts";
import QoLData from "./components/QoLData";
import Search from "./components/Search";
import './styles/main.css';

const App = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1>Widgets</h1>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-blue-50">Widgets</h1>
          <Search onSearchChange={handleOnSearchChange}/>
          <Events />
        </div>
      </section>
    </main>
  );
};

export default App;
