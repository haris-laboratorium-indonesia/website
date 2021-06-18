const Judul = ({ page, textColor }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto py-2 mb-5 bg-white border-b border-gray-300 ">
      <section className={`${textColor} text-xl sm:text-2xl font-semibold`}>
        {page}
      </section>
    </header>
  );
};

export default Judul;
