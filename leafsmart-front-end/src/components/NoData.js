const NoData = (props) => {
  const { widgetName } = props;
  const num = Math.floor(Math.random() * 5);

  return (
    <section className="flex flex-col items-center bg-White rounded-3xl mt-6 p-6">
      <p>No<span className="font-bold"> {widgetName}</span> for this location!</p>
      <img
        className="h-64 m-6"
        src={`images/undraw_${num}.svg`}
        alt="No results found!"
      />
    </section>
    );
}

export default NoData;
