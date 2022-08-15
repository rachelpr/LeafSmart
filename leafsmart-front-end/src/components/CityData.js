import { useEffect, useState } from "react";
import axios from "axios";
import { kebabCase } from "../helpers/formats";

import CityFacts from "./cityData/CityFacts";
import QoLData from "./cityData/QoLData";
import NoData from "./NoData";

const CityData = (props) => {
  const { cityName, geonameId } = props;

  const [city, setCity] = useState({});
  const [slugScores, setSlugScores] = useState([]);
  const [image, setImage] = useState({});

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
        console.log("Error in City Facts endpoint: ", err);
      });

      // get Teleport QoL detailed data
      axios.get(`${qolUrl}slug:${kebabCase(cityName)}/scores/`)
      .then((res) => {
        setSlugScores(res.data.categories);
      })
      .catch(err => {
        setSlugScores([]);
        console.log("Error in QoL endpoint: ", err);
      })

      // get Teleport UrbanAreaImages resouce
      axios.get(`${qolUrl}slug:${kebabCase(cityName)}/images/`)
      .then((res) => {
        const data = res.data.photos[0];
        setImage({...data.image, attribution: {...data.attribution}});
      })
      .catch(err => {
        setImage({});
        console.log("Error in Image endpoint: ", err);
      })
    }
  }, [geonameId, qolUrl, cityName, cityUrl]);


  return (
    <div className="bg-White rounded-3xl text-Independence p-8">
      <CityFacts
        imageData={image}
        cityName={city.name}
        cityPop={city.population}
      />
      { slugScores.length > 0 && <QoLData slugScores={slugScores} />}
      { !slugScores.length > 0 && <NoData widgetName={"quality of life stats"}/>}
    </div>
  );
};

export default CityData;
