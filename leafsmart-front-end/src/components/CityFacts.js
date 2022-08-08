import { React, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import axios from "axios"

const apiUrl = process.env.REACT_APP_TELEPORT_CITYINFO_ENDPOINT;

const CityFacts = (props) => {
  const { geonameId } = props;
  const [city, setCity] = useState([]);

  useEffect(() => {
    if ( geonameId) {
      axios.get(`${apiUrl}geonameid:${geonameId}`)
      .then((res)=>{
        setCity(res.data);
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }, [geonameId]);

  return (
    <section className="bg-Independence rounded-lg text-Isabelline p-8">
      { geonameId && (
        <>
          <h1>{city.name}</h1>
          <h2 className="inline">Population: </h2>
          <NumberFormat
            value={city.population}
            thousandSeparator
            displayType="text"
          />
        </>
      )}
    </section>
  );
};

export default CityFacts;
