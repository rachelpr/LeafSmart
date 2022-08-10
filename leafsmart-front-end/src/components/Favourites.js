import React, { useEffect, useState } from "react";
import FavouritesCard from "./FavouritesCard";
import { useAuth } from "../contexts/AuthContext";
import { MdFavorite } from "react-icons/md";
import SideBarIcon from "./buttons/SideBarIcon";

const Favourites = () => {
  const [favs, setFavs] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const { currentUser, favourites, returnFavourites } = useAuth();

  useEffect(() => {
    setUser(currentUser);
    setFavs(favourites)
  }, [currentUser, favourites]);

  const handleClick = async (e) => {
    e.preventDefault();
    returnFavourites()
    setOpen(!open);
  };

  const favArr = favs.map((favs) => {
    return <FavouritesCard key={favs.geoname_id} name={favs.city_name} />;
  });

  return (
    <>
      <div>
        {user && (
          <button onClick={handleClick} className="favourite-button">
            <SideBarIcon icon={<MdFavorite size="32" />}/>
          </button>
        )}
        {open ? (
          <div className="pt-2 pb-2 ml-6 w-60 bg-White shadow-xl rounded-lg">
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
