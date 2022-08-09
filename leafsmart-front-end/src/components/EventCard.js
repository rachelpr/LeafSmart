import React from "react";
import moment from "moment";

export default function EventCard(props) {
  const { name, image, date, url } = props;

  const currentDate = moment(date).format('MMMM Do YYYY');

  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td class="whitespace-nowrap text-sm font-medium">
          <img
            className="h-auto w-64 px-6 py-4 whitespace-nowrap"
            src={image}
            alt={name}
          />
        </td>
        <td classNam="text-sm text-Independence font-light px-2 py-2 whitespace-nowrap">
          <span>{currentDate}</span>
        </td>
        <td className="text-center text-Independence font-light px-2 py-2 whitespace-wrap">
           <span className="text-xl">{name}</span>
        </td>
        <td className="text-sm text-White font-light px-2 py-2 whitespace-nowrap">
          <a href={url}><button className="ml-4 rounded-lg bg-Independence block p-1 ml-6 mt-2 shadow border-2 border-Zinc-300 focus:outline-none focus:border-White">Get your tickets!</button></a>
        </td>
      </tr>
    </>
  );
  }
