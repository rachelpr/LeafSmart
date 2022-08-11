import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import axios from "axios"

const apiUrl = process.env.REACT_APP_TELEPORT_CITYINFO_ENDPOINT;

const CityFacts = (props) => {
  const { cityName, cityPop, cityDesc } = props;

  return (
    <section className="bg-Independence rounded-3xl text-Isabelline p-8">
      { cityName && (
        <>
          <h2>{cityName}</h2>
          <p className="inline">Population: </p>
          <NumberFormat
            value={cityPop}
            thousandSeparator
            displayType="text"
          />
          <p>{cityDesc}</p>
        </>
      )}
    </section>
  );
};

export default CityFacts;
