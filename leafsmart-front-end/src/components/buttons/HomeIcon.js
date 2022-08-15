const HomeIcon = (props) => {
  const { icon } = props;
  return (
    <div className="relative flex items-center justify-center
    h-20 w-20 m-auto shadow-lg
    hover:bg-Independence hover:text-White
    bg-gradient-to-r from-Independence to-HeliotropeGray
    rounded-xl">{icon}</div>
  );
}

export default HomeIcon;
