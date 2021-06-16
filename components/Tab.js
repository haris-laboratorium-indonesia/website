const Tab = ({ page }) => {
  return (
    <main className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto py-1 mb-5 bg-white border-b border-gray-300 sm:border-0">
      <section className="text-2xl font-semibold">{page}</section>
    </main>
  );
};

export default Tab;
