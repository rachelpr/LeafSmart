import React, { Fragment, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Events from "./components/Events"
import "./App.scss";

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
          <Events />
        </div>
      </section>
    </main>
  );
};

export default App;
