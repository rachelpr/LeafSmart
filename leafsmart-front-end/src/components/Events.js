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
          setEvents([]);
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
  <section className="mx-auto w-full">
    <div className="flex flex-col pt-8 h-screen">
      <div className="overflow-y-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block sm:px-2 lg:px-4">
          <div className="overflow-y-hidden">
            <table className="bg-White sm: table-auto">
              <thead className="hidden bg-white border-b">
                <tr>
                  <th>Event Details</th>
                  <th>E</th>
                  <th>G</th>
                </tr>
              </thead>
              <tbody>{eventsArr}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Events;
