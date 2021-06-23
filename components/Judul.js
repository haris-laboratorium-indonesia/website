const Judul = ({ page, textColor }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <section className="text-2xl font-semibold  sm:text-2xl">
        {page}
      </section>
    </header>
  );
};

export default Judul;
