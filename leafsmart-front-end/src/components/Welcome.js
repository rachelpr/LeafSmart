import Typewriter from 'react-ts-typewriter';

const Welcome = () => {
  const copyLoop = [
    "concerts",
    "stats",
    "sports",
    "weather",
    "exhibits",
  ];

  return (
    <section className="flex overflow-visible items-center justify-around mt-6 bg-gradient-to-r from-SpaceCadet to-Independence w-[172%] h-[35rem] rounded-3xl p-16 font-bold text-White tracking-[0.3em]">
      <div className="text-[5rem]">
        <p className=''>Smart dashboard for</p>
        <Typewriter
          text={copyLoop}
          loop={true}
          delay={4000}
          random={42}
        />
        <p>before you <span className='italic'>leaf</span>!</p>
      </div>
      <img
        className="h-80"
        src="LeafSmartLight.png"
        alt="Leafsmart Logo"
      />
    </section>
  );
}

export default Welcome;
