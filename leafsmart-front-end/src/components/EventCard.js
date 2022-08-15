import React from "react";
import moment from "moment";

export default function EventCard(props) {
  const { name, image, date, url } = props;

  const currentDate = moment(date).format('MMMM Do YYYY');

  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td className="text-sm font-medium">
          <img
            className="h-auto w-52 rounded-3xl p-4"
            src={image}
            alt={name}
          />
        </td>
        <td className="text-sm text-Independence font-light p-2">
          <span>{currentDate}</span>
        </td>
        <td className="text-center text-Independence font-light p-2">
           <span className="text-xl">{name}</span>
        </td>
        <td className="text-sm text-White font-light p-2">
          <a href={url}><button className="rounded-lg bg-Independence block p-1 ml-6 mx-3 shadow border-2 border-Zinc-300 focus:outline-none focus:border-White">Get your tickets!</button></a>
        </td>
      </tr>
    </>
  );
  }
