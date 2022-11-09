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

        // check Teleport api data against city's Country
        axios.get(`${qolUrl}slug:${kebabCase(cityName)}/`)
          .then((res) => {
            const slugCountry = res.data._links["ua:countries"][0].name;
            const currentCountry = city.full_name.split(",")[2].trim();

            if (slugCountry === currentCountry) {
              Promise.all(
                [
                  axios.get(`${qolUrl}slug:${kebabCase(cityName)}/scores/`),
                  axios.get(`${qolUrl}slug:${kebabCase(cityName)}/images/`)
                ]
              )
              .then((res) => {
                const imageData = res[1].data.photos[0];

                setSlugScores(res[0].data.categories);
                setImage({...imageData.image, attribution: {...imageData.attribution}});
              })
              .catch((err) => {
                console.log("Error getting city details: ", err);
                setSlugScores([]);
                setImage({});
              });

            } else {
              //reset image and slugscores
              setSlugScores([]);
              setImage({});
            }
          })
          .catch((err) => {
            setSlugScores([]);
            setImage({});
            console.log("Error in Urban Areas: ", err);
          });
      })
      .catch((err)=>{
        console.log("Error in City Facts endpoint: ", err);
      });
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
