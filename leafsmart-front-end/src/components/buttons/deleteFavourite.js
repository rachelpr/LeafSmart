import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteFavourite = (props) => {
  const { fav } = props;
  const [favourite, setFavourites] = useState("");

  const { deleteFavourites } = useAuth();

  useEffect(() => {
    setFavourites(fav);
  }, [fav]);

  const handleClick = (e) => {
    e.preventDefault();
    deleteFavourites(favourite);
  };

  return (
    <div className="w-4 h-4 bg-red-500 text-White flex items-center justify-center rounded-full cursor-pointer">
      <button onClick={handleClick}>
        <TiDeleteOutline size={24}/>
      </button>
    </div>
  );
};

export default DeleteFavourite;
