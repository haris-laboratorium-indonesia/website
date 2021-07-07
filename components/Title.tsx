const Title = ({ name }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto my-5 pt-2.5  bg-white max-w-4xl  mx-auto font-inter">
      <div className="block text-4xl font-bold text-gray-800">{name}</div>
    </header>
  );
};

export default Title;
