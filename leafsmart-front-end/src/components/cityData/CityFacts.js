import NumberFormat from "react-number-format";
import Parser from "html-react-parser";

const CityFacts = (props) => {
  const { cityName, cityPop, imageData } = props;

  return (
    <section>
      { cityName && (
        <section>
          <img
            className="rounded-2xl mb-6"
            src={imageData.web}
          />
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
