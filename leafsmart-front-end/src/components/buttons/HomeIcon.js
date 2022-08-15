const HomeIcon = (props) => {

  const { icon } = props;
  return (
    <div className="relative flex items-center justify-center
    h-20 w-20 m-auto shadow-lg
    hover:bg-Independence hover:text-White
    bg-gradient-to-r from-Independence to-HeliotropeGray
    rounded-3xl hover:rounded-xl
    transition-all duration-300 ease-linear
    cursor-pointer">{icon}</div>
  );
}

export default HomeIcon;
