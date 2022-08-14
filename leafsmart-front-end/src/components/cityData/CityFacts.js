import NumberFormat from "react-number-format";

const CityFacts = (props) => {
  const { cityName, cityPop, imageData } = props;

  return (
    <section>
      { cityName && (
        <section>
          <img
            className="rounded-2xl mb-6"
            src={imageData.web}
            alt={`Photographer ${imageData.attribution.photographer} on ${imageData.attribution.site}, licensed under ${imageData.attribution.license}`}
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
