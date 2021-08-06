const Title = ({ name }) => {
  return (
    <header className='z-40 w-full h-auto mt-10 mb-5 pt-2.5  max-w-4xl mx-auto font-inter'>
      <div className='block text-4xl font-bold text-center text-gray-800 '>{name}</div>
    </header>
  );
};

export default Title;
