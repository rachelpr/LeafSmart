import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import FavouritesCard from "./FavouritesCard";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [logged, setLogged] = useState("")
  const [cookies, setCookies] = useState("");

  useEffect(() => {
    axios
      .get(`/favourites`)
      .then((res) => {
        const data = res.data;
        setFavourites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setCookies(cookie.get("user_id"));
    setLogged(cookie.get("user"));
  }, []);

  const favArr = favourites.map((fav) => {
    return <FavouritesCard key={fav.id} name={fav.name} />;
  });

  console.log("Favourites: ", favourites);
  console.log("cookies: ", cookies)
  console.log("user: ", logged)

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1>Favourites</h1>
          {cookies === logged ? <ul>{favArr}</ul> : <p>No Favourites Saved</p>}
        </div>
      </section>
    </main>
  );
};

export default Favourites;
