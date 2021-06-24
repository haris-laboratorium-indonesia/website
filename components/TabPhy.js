import Link from "next/link";
const TabPhy = ({ page, to }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto my-3 bg-white ">
      <div className="block text-3xl font-semibold text-gray-800">{page}</div>
      <section className="flex flex-row items-center justify-end p-0.5 space-x-0.5 text-sm sm:text-base bg-gray-100 rounded-lg ">
        <Link href={to}>
          <a>
            <div className="px-2 py-1 text-gray-600 border border-gray-100 rounded-md ">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1 bg-white border border-gray-200 rounded-md shadow-md ">
          Fisika
        </div>
      </section>
    </header>
  );
};

export default TabPhy;

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
