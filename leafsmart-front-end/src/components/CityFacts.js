import { React, useState, useEffect } from "react";
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
    <main>
      <section>
        { geonameId && (
          <>
            <h1>{city.name}</h1>
            <p>Population: {city.population}</p>
          </>
        )}
      </section>
    </main>
  );
};

export default CityFacts;
