import Link from "next/link";

const TabMath = ({ page, to }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <div className="block text-3xl font-semibold text-gray-800">{page}</div>

      <section className="flex flex-row items-center justify-end p-1 space-x-1 text-sm font-medium bg-gray-100 rounded-lg">
        <div className="px-2 py-1.5 bg-white rounded-md shadow-md ">
          Matematika
        </div>
        <Link href={to} scroll={false}>
          <a>
            <div className="px-2 py-1.5 text-gray-700 rounded-md hover:bg-gray-200">
              Fisika
            </div>
          </a>
        </Link>
      </section>
    </header>
  );
};

export default TabMath;
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
