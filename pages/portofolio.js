export default function portofolio() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <section className="py-1 my-5 text-2xl font-semibold sm:text-3xl">
        Portofolio
      </section>
      <section className="flex-col space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row ">
        <article className=" font-medium px-4 py-2 inline border-2 rounded-md border-[#5E725B] bg-[#5E725B] hover:bg-white text-white hover:text-[#5E725B]">
          <a href="https://www.aka-tradingindo.com/" target="_blank">AKA Trading Indonesia</a>
        </article>
        <article className="inline px-4 py-2 font-medium text-white bg-gray-800 border-2 border-gray-800 rounded-md hover:text-gray-800 hover:bg-white ">
          <a href="https://harislab.com/" target="_blank">HarisLab</a>
        </article>
      </section>
    </main>
  );
}
