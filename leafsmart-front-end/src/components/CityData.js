import { useEffect, useState } from "react";
import axios from "axios";

import CityFacts from "./cityData/CityFacts";

const CityData = (props) => {
  const { cityName, geonameId } = props;

  const [city, setCity] = useState({});

  const cityUrl = process.env.REACT_APP_TELEPORT_CITYINFO_ENDPOINT;

  useEffect(() => {
    if (geonameId) {
      axios.get(`${cityUrl}geonameid:${geonameId}`)
      .then((res)=>{
        console.log("Response is: ", res);
        setCity(res.data);
      })
      .catch((err)=>{
        console.log(err)
      });
    }
  }, [geonameId])


  return (
      <CityFacts
        cityName={city.full_name}
        cityPop={city.population}
        cityDesc={"VERY COOL DESCRIPTION"}
      />
  );
};

export default CityData;
