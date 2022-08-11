import { React } from "react";

//a component for each life quality score
export default function QoLDataCard(props) {
  const { name, score } = props;

  const formatScore = () => {
    return Math.ceil(score);
  };

  return (
    <li className="flex flex-col items-center justify-between text-center w-36 h-36 m-2 rounded-2xl pt-2 bg-gradient-to-r from-Independence to-HeliotropeGray drop-shadow-md">
      <h3 className="font-bold text-Isabelline text-l">{name}</h3>
      <p className="rounded-b-2xl text-xl w-36 h-20 pt-8 bg-White">{formatScore(score)} / 10</p>
    </li>
  );
}
