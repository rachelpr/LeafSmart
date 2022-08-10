const CityData = (props) => {
  const { cityName, geonameId } = props;

  return (
    <>
      <p>{cityName}</p>
      <p>{geonameId}</p>
    </>
  );
};

export default CityData;
