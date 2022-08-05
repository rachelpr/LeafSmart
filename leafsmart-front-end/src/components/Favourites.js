import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouritesCard from "./FavouritesCard";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [cookies, setCookies] = useState("");
  const [open, setOpen] = useState(false);

  // Sets cookie to that of the user id of they who are logged in. This allows the post call to the database to pull the correct data
  useEffect(() => {
    setCookies(cookie.get("user_id"));
  }, []);

  // Handle click makes call to backend server as well as setOpen to allow the drop down to function properly.
  const handleClick = async (e) => {
    e.preventDefault();

    axios
      .post(`/favourites`, {
        user_id: cookies,
      })
      .then((res) => {
        const data = res.data;
        setFavourites(data);
        setOpen(!open);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Array to handle the favourites card data which displays the list of locations
  const favArr = favourites.map((favs) => {
    return <FavouritesCard key={favs.geoname_id} name={favs.city_name} />;
  });

  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className="block h-8 w-8 object-cover rounded-full overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        {open ? (
          <div className="py-2 mt-2 bg-white rounded-lg shadow-xl">
            {favArr}
          </div>
        ) : (
          <div className="hidden py-2 mt-2 bg-white rounded-lg shadow-xl">
            {favArr}
          </div>
        )}
      </div>
    </>
  );
};

export default Favourites;
