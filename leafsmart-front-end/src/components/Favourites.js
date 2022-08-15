import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

import SideBarIcon from "./buttons/SideBarIcon";
import FavouritesCard from "./FavouritesCard";

const Favourites = () => {
  const [favs, setFavs] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const { currentUser, favourites} = useAuth();

  useEffect(() => {
    setUser(currentUser);
    setFavs(favourites)
  }, [currentUser, favourites]);

  const handleClick = async (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const favArr = favs.map((favs) => {
    return (
      <Link to={{ pathname: "/", search: `?searchKeyword=${favs.city_name}` }} key={favs.favourite_id}>
        <FavouritesCard name={favs.city_name} />
      </Link>
    );
  });

  return (
    <>
      <div>
        {user && (
          <button onClick={handleClick} className="favourite-button">
            <SideBarIcon icon={<MdFavorite size="32" />}/>
          </button>
        )}
        {open && (
          <div className="pt-2 pb-2 ml-6 w-60 bg-White shadow-xl rounded-lg">
            {favArr}
          </div>
        )};
      </div>
    </>
  );
};

export default Favourites;
