import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouritesCard from "./FavouritesCard";
import { useAuth } from "../contexts/AuthContext";
import { MdFavorite } from "react-icons/md";

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

  const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
    </div>
  );
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
