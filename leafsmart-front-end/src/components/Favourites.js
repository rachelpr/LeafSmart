import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import Nav from "./Nav";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const users = useLocation();
  const { user_id } = users.id;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/favourites`)
      .then((res) => {
        const data = res.data[0];
        setFavourites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users.id);

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1>Favourites</h1>
        </div>
      </section>
    </main>
  );
};

export default Favourites;
