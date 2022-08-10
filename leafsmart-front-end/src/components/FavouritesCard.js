import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function FavouritesCard(props) {

  const name = capitalizeFirstLetter(props.name);
  
  return (
    <div>
      <ul className="block px-4 py-2 hover:bg-Independence hover:text-White">
        {name}
      </ul>
    </div>
  );
}
