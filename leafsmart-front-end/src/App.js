// import React, { Fragment, useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.scss";
import './styles/main.css';

const App = () => {
  /* const [users, setUsers] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const getAPI = () => {
      // Change this endpoint to whatever local or online address you have
      // Local PostgreSQL Database
      const userFetch = fetch("http://127.0.0.1:3001/");
      const favouriteFetch = fetch("http://127.0.0.1:3001/favourites");

      Promise.all([userFetch, favouriteFetch])
        .then(async (response) => {
          const userResponse = await response[0].json();
          const favouriteResponse = await response[1].json();
          console.log(response);
          console.log(userResponse);
          console.log(favouriteResponse);
          setUsers(userResponse);
          setFavourites(favouriteResponse);
          return response.json();
        })
        // .then((data) => {
        //   console.log(data);
        // })
        .catch((err) => console.log(err));
    };
    getAPI();
  }, []);
 */
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-blue-50">Widgets</h1>
        </div>
      </section>
    </main>
  );
};

export default App;
