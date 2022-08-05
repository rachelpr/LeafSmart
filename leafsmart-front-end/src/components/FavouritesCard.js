import React from "react";

export default function FavouritesCard(props) {
  return (
    <div>
      <ul className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
      {props.name}
        </ul>
    </div>
  );
}
