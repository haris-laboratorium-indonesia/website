const Title = ({ name }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto my-5 py-2.5 border-b border-gray-500 bg-white max-w-4xl  mx-auto font-inter">
      <div className="block text-3xl font-semibold text-gray-800">{name}</div>
    </header>
  );
};

export default Title;
