import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

const AddFavourite = (props) => {
  const { geonameId, cName } = props
  const [geoID, setGeoID] = useState(null)
  const [displayName, setDisplayName] = useState("")
  const [cityName, setCityName] = useState("")

  const { saveFavourites } = useAuth();

  useEffect(() => {
    setGeoID(geonameId);
    setDisplayName(cName);
    setCityName(cName);
  }, [geonameId, cName]);

  const handleClick = (e) => {
    e.preventDefault();
    saveFavourites(geoID, displayName, cityName)
  }

  const { icon } = props;
  return (
    <>
      {cityArr.includes(cityName) ? (
          <button className="w-16 h-16 bg-gradient-to-r from-Independence to-HeliotropeGray text-White flex items-center justify-center rounded-2xl opacity-50" type="button" disabled={true}>
            {icon}
          </button>
      ) : (
        <div
          className="w-16 h-16 bg-gradient-to-r from-Independence to-HeliotropeGray text-White flex items-center justify-around rounded-2xl hover:text-Isabelline hover:rounded-lg transition-all duration-300 ease-linear
          cursor-pointer active:bg-red-500"
        >
          <button onClick={handleClick}>{icon}</button>
        </div>
      )}
    </>
  );
}

export default AddFavourite;
