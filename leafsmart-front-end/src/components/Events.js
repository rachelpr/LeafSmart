import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const today = new Date();
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const api = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=6gMe63zUGZXgI1NElCvwwZZfzG8Soesu`;

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
     axios.get(`${api}&city=toronto`)
    .then((res) => {
      const data = res.data['_embedded']['events'];
      setEvents(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  console.log(events[0]);

const EventListItem = (props) => {
    return (
      <li>
        <img 
        src={props.image}
        alt={props.name}/>
        <p>{props.selected}</p>
      </li>
    )
  }

  const eventsArr = events.map((events) => {
    return (
      <EventListItem
        key={events.id}
        name={events.name}
        date={events.dates.start.localDate}
        image={events.images[0].url}
        />
    );
  });

  return (
      <section className='event-widget'>
        <ul>{eventsArr}</ul>
      </section>
  )
}

export default Events
