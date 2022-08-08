import React, { useEffect, useState } from "react";
import axios from "axios";

import EventCard from "./EventCard";

// get current date
const today = new Date();
const year = today.getFullYear();
const day = ("0" + today.getDate()).slice(-2);
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const date = year + "-" + month + "-" + day + "T19:00:00Z";

const apiUrl = process.env.REACT_APP_TICKETMASTER_EVENTS_ENDPOINT;
const apiKey = process.env.REACT_APP_TICKETMASTER_EVENTS_KEY;

const Events = (props) => {
  const { cityName } = props;
  const [events, setEvents] = useState([]);

  //api call to pull in the events data from ticketmaster
  useEffect(() => {
    if (cityName) {
      axios
        .get(
          `${apiUrl}?apikey=${apiKey}&city=${cityName}&sort=date,name,asc&startDateTime=${date}`
        )
        .then((res) => {
          const data = res.data["_embedded"]["events"];
          setEvents(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cityName]);

  //mapping the data from the events array to showcase via the events list item breakdown.
  //BUG -- WHAT HAPPENS WHEN AN EMPTY ARRAY IS RETURNED?
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
    <section className="event-widget">
      <div class="w-1/3 flex mt-6 mb-6 p-1 bg-white overflow-y-auto h-96">
        <table className="w-fit bg-Isabelline border border-collapse">
          <thead class="text-xs uppercase">
            <tr>
              <th class="border-collapse bg-Isabelline text-left px-8 py-1">
                Event Details
              </th>
              <th class="border-collapse bg-Isabelline text-left px-8 py-1">
                Event Date
              </th>
              <th class="border-collapse bg-Isabelline text-left px-8 py-1">
                Get Tickets!
              </th>
            </tr>
          </thead>
          <tbody>{eventsArr}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Events;
