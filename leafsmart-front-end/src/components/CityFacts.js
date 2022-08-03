import { React, useState, useEffect } from "react";
import axios from "axios"

const CityFacts = () => {
  const [city, setCity] = useState([]);
  useEffect(() => {
    let geonameid = 6324729;
    // Teleport API
    const api = 
    `https://api.teleport.org/api/cities/geonameid:${geonameid}`
    
    axios.get(`${api}`)
    .then((res)=>{
      const data = res.data
      setCity(data);
    })
    .catch((err)=>{
      console.log(err)
    })
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
