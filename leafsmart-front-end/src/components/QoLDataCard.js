import { React } from "react";

//a component for each life quality score
export default function QoLDataCard(props) {
  const formatScore = () => {
    return Math.ceil(props.score);
  };

  return (
    <li className="border-solid border-black">
      <h1>{props.name}</h1>
      <h2>{formatScore(props.score)} / 10</h2>
    </li>
  );
}
