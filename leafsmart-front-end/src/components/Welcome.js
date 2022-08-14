import Typewriter from 'react-ts-typewriter';

const Welcome = () => {
  const copyLoop = [
    "concerts",
    "stats",
    "games",
    "weather",
    "exhibits",
  ];

  return (
    <section className="flex justify-around items-center mt-6 bg-Independence w-100 rounded-3xl p-16 font-bold text-Isabelline">
      <img
        className="h-60"
        src="LeafSmartLight.png"
        alt="Leafsmart Logo"
      />
      <div className="text-[3rem]">
        <p>Smart dash for</p>
        <Typewriter
          text={copyLoop}
          loop={true}
          delay={4000}
          random={42}
        />
        <p>before you <span className='italic'>leaf</span>!</p>
      </div>
    </section>
  );
}

export default Welcome;
