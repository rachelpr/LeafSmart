import React, { Fragment, useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
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

  return (
    <Fragment>
      <header>
        <h1>Leaf Smart Biatch</h1>
      </header>
      <div className="form-container">
        <h2>Add Favourite</h2>
        <form method="POST" action="http://127.0.0.1:3001/favourites/new">
        <div>
            <label>Favourite ID</label>
            <input type="text" name="favourite_id" required />
          </div>
          <div>
            <label>User ID</label>
            <input type="text" name="user_id" required />
          </div>
          <div>
            <label>Geoname ID</label>
            <input type="text" name="geoname_id" required />
          </div>
          <div>
            <label>Display Name</label>
            <input type="text" name="display_name" required />
          </div>
          <div>
            <label>City Name</label>
            <input type="text" name="city_name" required />
          </div>
          <div>
            <button type="submit">Add Favourite</button>
          </div>
        </form>
      </div>
      <main>
        <section>
          {users.map((user) => {
            return (
              <>
                <div className="user-container" key={user.user_id}>
                  <h1>{user.first_name}</h1>
                  <h1>{user.last_name}</h1>
                  <h1>{user.email}</h1>
                </div>
              </>
            );
          })}
          {favourites.map((favourite) => {
            return (
              <>
                <div
                  className="favourite-container"
                  key={favourite.favourite_id}
                >
                  <h1>{favourite.user_id}</h1>
                  <h1>{favourite.geoname_id}</h1>
                  <h1>{favourite.city_name}</h1>
                  <h1>{favourite.display_name}</h1>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </Fragment>
  );
};

export default App;
