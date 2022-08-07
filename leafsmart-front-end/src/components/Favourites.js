import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouritesCard from "./FavouritesCard";
import { useAuth } from "../contexts/AuthContext";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const { currentUser } = useAuth();

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleClick = async (e) => {
    e.preventDefault();
    axios
      .post("/favourites", {
        user_id: user.id,
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

  const favArr = favourites.map((favs) => {
    return <FavouritesCard key={favs.geoname_id} name={favs.city_name} />;
  });

  return (
    <>
      <div>
        {user && (
          <button onClick={handleClick} className="block">
            Favourites
          </button>
        )}
        {open ? (
          <div className="py-2 mt-2 bg-white rounded-lg shadow-xl">
            {favArr}
          </div>
        ) : (
          <div className="hidden">{favArr}</div>
        )}
      </div>
    </>
  );
};

export default Favourites;
