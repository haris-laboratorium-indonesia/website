import Link from "next/link";
const TabPhy = ({ page, to }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <div className="block text-3xl font-semibold text-gray-800">{page}</div>

      <section className="flex flex-row items-center justify-end p-1 space-x-1 text-sm font-medium bg-gray-100 rounded-lg ">
        <Link href={to}>
          <a>
            <div className="px-2 py-1.5 text-gray-700 rounded-md hover:bg-gray-200 ">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1.5 bg-white rounded-md shadow-md ">Fisika</div>
      </section>
    </header>
  );
};

export default TabPhy;

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
