import { React, useState, useEffect } from "react";
import axios from "axios";
import { filterQoL } from "../../helpers/selectors";
import { kebabCase } from "../../helpers/formats";

import QoLDataCard from "./QoLDataCard";

const QoLData = (props) => {
  const { slugScores } = props;

  //get slugScores for a city
  const categoriesArr = filterQoL(slugScores).map((slugScore) => {
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
      <ul className="mt-8 flex flex-wrap justify-between">{categoriesArr}</ul>
    </section>
  );
};

export default QoLData;
