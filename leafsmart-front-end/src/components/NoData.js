const NoData = (props) => {
  const { widgetName } = props;
  const num = Math.floor(Math.random() * 5);

  return (
    <section>
      <h3>
      No data for {widgetName}
      </h3>
      <img src={`images/undraw_${num}.svg`} alt="No results found!"/>
    </section>
    );
}

export default NoData;
