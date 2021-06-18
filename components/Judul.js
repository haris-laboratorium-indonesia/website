const Judul = ({ page, textColor }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <section className={`${textColor} text-2xl sm:text-2xl font-semibold`}>
        {page}
      </section>
    </header>
  );
};

export default Judul;
