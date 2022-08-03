import { React, useState, useEffect } from "react";

const CityFacts = () => {
  const [city, setCity] = useState([]);
  useEffect(() => {
    const getCity = () => {
      let geonameid = 6324729;
      // Teleport API
      const cityFetch = fetch(
        `https://api.teleport.org/api/cities/geonameid:${geonameid}`
      );

      Promise.all([cityFetch])
        .then(async (response) => {
          //console.log(response);
          const cityResponse = await response[0].json();
          //console.log(cityResponse);
          setCity(cityResponse);
          return response.json;
        })
        .catch((err) => console.log(err));
    };
    getCity();
  }, []);
  return (
    <main>
      <section>
        <h1>{city.name}</h1>
        <h1>Population: {city.population}</h1>
      </section>
    </main>
  );
};

export default CityFacts;
