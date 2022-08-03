import React from 'react'

export default function EventListItem(props) {
  return (
    <li>
            <h1>{props.name}</h1>
      <img 
      src={props.image}
      alt={props.name}/>
      <p>Date: {props.date}</p>
      <a href={props.url}>Find your tickets here!</a>
    </li>
  );
}