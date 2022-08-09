const AddFavourite = (props) => {
  const { icon } = props;
  return (
    <div className="w-16 h-16 bg-gradient-to-r from-Independence to-HeliotropeGray text-White flex items-center justify-center rounded-2xl hover:text-Isabelline hover:rounded-lg transition-all duration-300 ease-linear
    cursor-pointer">{icon}</div>
  );
}

export default AddFavourite;
