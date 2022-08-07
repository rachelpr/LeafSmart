import React from 'react'

export default function EventCard(props) {
  const { name, image, date, url} = props;

  return (
    <li>
            <h1>{name}</h1>
      <img
      src={image}
      alt={name}/>
      <p>Date: {date}</p>
      <a href={url}>Find your tickets here!</a>
    </li>
  );
}
