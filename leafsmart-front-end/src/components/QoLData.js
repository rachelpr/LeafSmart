import { React, useState, useEffect } from "react";
import axios from "axios";
import { filterQoL } from "../helpers/selectors";
import { kebabCase } from "../helpers/formats";

import QoLDataCard from "./QoLDataCard";

const QoLData = (props) => {
  const { cityName } = props;
  const [slugScore, setSlugScore] = useState([]);

  const apiUrl = process.env.REACT_APP_TELEPORT_QOL_ENDPOINT;

  useEffect(() => {
    if (cityName) {
      const api =
        `${apiUrl}slug:${kebabCase(cityName)}/scores/`
      console.log(api);

      //TODO: Handle showing a message when endpoint is not defined, returns no data
      axios.get(`${api}`)
      .then((res)=>{
        const data = res.data["categories"]
        setSlugScore(data);
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  }, [cityName]);

  //get slugScores for a city
  const categoriesArr = filterQoL(slugScore).map((slugScore) => {
    return (
      <QoLDataCard
        key={slugScore.color}
        name={slugScore.name}
        score={slugScore.score_out_of_10}
      />
    );
  });

  return (
    <section>
      <ol>{categoriesArr}</ol>
    </section>
  );
};

export default QoLData;
