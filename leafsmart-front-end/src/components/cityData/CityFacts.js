import NumberFormat from "react-number-format";
import Parser from "html-react-parser";

const CityFacts = (props) => {
  const { cityName, cityPop, cityDesc } = props;

  return (
    <section>
      { cityName && (
        <>
          <h2 className="text-2xl font-bold">{cityName}</h2>
          <p className="inline">Population: </p>
          <NumberFormat
            value={cityPop}
            thousandSeparator
            displayType="text"
          />
          <article className="mt-4">{Parser(cityDesc)}</article>
        </>
      )}
    </section>
  );
};

export default CityFacts;
