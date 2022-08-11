import { useEffect, useState } from "react";
import axios from "axios";
import { kebabCase } from "../helpers/formats";

import CityFacts from "./cityData/CityFacts";
import QoLData from "./cityData/QoLData";

const CityData = (props) => {
  const { cityName, geonameId } = props;

  const [city, setCity] = useState({});
  const [slugScores, setSlugScores] = useState([]);
  const [description, setDescription] = useState("");

  const cityUrl = process.env.REACT_APP_TELEPORT_CITYINFO_ENDPOINT;
  const qolUrl = process.env.REACT_APP_TELEPORT_QOL_ENDPOINT;

  useEffect(() => {
    if (geonameId && cityName) {
      // get basic city data
      axios.get(`${cityUrl}geonameid:${geonameId}`)
      .then((res)=> {
        setCity(res.data);
      })
      .catch((err)=>{
        console.log(err)
      });

      // get Teleport QoL detailed data
      axios.get(`${qolUrl}slug:${kebabCase(cityName)}/scores/`)
      .then((res) => {
        setDescription(res.data.summary);
        setSlugScores(res.data.categories);
      })
      .catch(err => {
        setDescription("");
        setSlugScores([]);
        console.log("Error in QoL endpoint: ", err);
      })
    }
  }, [geonameId, cityName]);


  return (
    <div className="bg-White rounded-3xl text-Independence p-8">
      <CityFacts
        cityName={city.name}
        cityPop={city.population}
        cityDesc={description}
      />
      <QoLData slugScores={slugScores} />
    </div>
  );
};

export default CityData;
