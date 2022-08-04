import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const today = new Date();
const year = today.getFullYear()
const day = ("0" + today.getDate()).slice(-2);
const month = ("0" + (today.getMonth()+1)).slice(-2)
const date = (year+"-"+month+"-"+day+"T19:00:00Z");

const api = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=6gMe63zUGZXgI1NElCvwwZZfzG8Soesu`;

const Events = () => {
  const [events, setEvents] = useState([]);

  //api call to pull in the events data from ticketmaster
  useEffect(() => {
     axios.get(`${api}&city=toronto&sort=date,name,asc&startDateTime=${date}`)
    .then((res) => {
      const data = res.data['_embedded']['events'];
      setEvents(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  //mapping the data from the events array to showcase via the events list item breakdown.
  const eventsArr = events.map((events) => {
    return (
      <EventCard
        key={events.id}
        name={events.name}
        date={events.dates.start.localDate}
        image={events.images[0].url}
        url={events.url}
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
