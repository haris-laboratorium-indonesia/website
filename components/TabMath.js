import Link from "next/link";

const TabMath = ({ page, to }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto my-3 bg-white ">
      <div className="block text-3xl font-semibold text-gray-800">{page}</div>

      <section className="flex flex-row items-center justify-end p-0.5 space-x-0.5 text-sm bg-gray-100 rounded-lg">
        <div className="px-2 py-1 bg-white border border-gray-200 rounded-md shadow-md">
          Matematika
        </div>
        <Link href={to} scroll={false}>
          <a>
            <div className="px-2 py-1 text-gray-600 border border-gray-100 rounded-md ">
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