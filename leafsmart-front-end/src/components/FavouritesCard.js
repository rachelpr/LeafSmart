import React from "react";
import DeleteFavourite from "./buttons/deleteFavourite";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function FavouritesCard(props) {

  const name = capitalizeFirstLetter(props.name);
  
  return (
    <div>
      <ul className="flex justify-between px-4 py-2 hover:bg-Independence hover:text-White items-stretch">
        <div>{name}</div>
        <div><DeleteFavourite fav={name}/></div>
      </ul>
    </div>
  );
}
