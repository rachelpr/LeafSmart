import NumberFormat from "react-number-format";
import Parser from "html-react-parser";

const CityFacts = (props) => {
  const { cityName, cityPop } = props;

  return (
    <section>
      { cityName && (
        <section>
          <h2 className="text-2xl font-bold">{cityName}</h2>
          <p className="inline">Population: </p>
          <NumberFormat
            value={cityPop}
            thousandSeparator
            displayType="text"
          />
        </section>
      )}
    </section>
  );
};

export default CityFacts;
