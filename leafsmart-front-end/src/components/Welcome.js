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
    <section className="flex justify-around items-center mt-6 bg-White w-100 rounded-3xl p-16">
      <img
        className="h-60 bg-gradient-to-r from-Independence to-HeliotropeGray rounded-3xl"
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
        <p>before you <span className='italic font-bold text-HeliotropeGray'>leaf</span>!</p>
      </div>
    </section>
  );
}

export default Welcome;
