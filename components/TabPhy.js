import Link from "next/link";
const TabPhy = ({ page, to, backTo, textColor }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <Link href={backTo}>
        <a className={`${textColor} block text-2xl font-semibold`}>
          {page}
        </a>
      </Link>

      <section className="flex flex-row items-center justify-end p-0.5 space-x-2 text-sm  rounded-md bg-gray-100">
        <Link href={to} scroll={false}>
          <a>
            <div className="px-2 py-1 text-black border rounded-md border-gray-50">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1 text-black bg-white border border-white rounded-md shadow">
          Fisika
        </div>
      </section>
    </header>
  );
};

export default TabPhy;

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
