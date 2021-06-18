import Link from "next/link";
const TabPhy = ({ page, to, backTo, textColor }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto py-2 mb-3 bg-white border-b border-gray-300">
      <Link href={backTo}>
        <a className={`${textColor} block text-xl sm:text-2xl font-semibold`}>
          {page}
        </a>
      </Link>

      <section className="flex flex-row items-center justify-end p-0.5 space-x-2 text-sm  rounded-md bg-gray-100">
        <Link href={to} scroll={false}>
          <a>
            <div className="px-1 py-0.5 sm:py-1 text-black border rounded-md sm:px-2 border-gray-50">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-1 py-0.5 sm:py-1 text-black bg-white border border-white rounded-md shadow sm:px-2">
          Fisika
        </div>
      </section>
    </header>
  );
};

export default TabPhy;

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
