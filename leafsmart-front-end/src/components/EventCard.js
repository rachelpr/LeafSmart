import React from "react";

export default function EventCard(props) {
  const { name, image, date, url } = props;

  return (
    <>
      <tr>
        <td class="border px-8 py-1">
          <h1>{name}</h1>
          <img
            className="h-auto w-28 pb-2/3 sm:pt-1/3"
            src={image}
            alt={name}
          />
        </td>
        <td class="border text-xs px-9 py-1">
          <p>{date}</p>
        </td>
        <td class="border text-xs px-7 py-1">
          <a href={url}>Find your tickets here!</a>
        </td>
      </tr>
    </>
  );
}
