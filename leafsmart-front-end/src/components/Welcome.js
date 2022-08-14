import Typewriter from 'react-ts-typewriter';

const Welcome = () => {
  const copyLoop = [
    "concerts",
    "games",
    "expos",
    "weather",
    "stats"
  ];

  return (
    <section className="flex justify-evenly items-center mt-6 bg-White w-100 rounded-3xl p-16">
      <img
        className="h-48 bg "        src="LeafSmartLight.png"
        alt="Leafsmart Logo"
      />
      <div>
        <p>Check the</p>
        <Typewriter
          text={copyLoop}
          loop="true"
        />
        <p>before you leaf!</p>
      </div>
    </section>
  );
}

export default Welcome;
