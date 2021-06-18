import Link from "next/link";

const TabMath = ({ page, to, backTo, textColor }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <Link href={backTo}>
        <a className={`${textColor} block text-2xl font-semibold`}>{page}</a>
      </Link>

      <section className="flex flex-row items-center justify-end p-1 space-x-1 text-sm font-medium bg-gray-100 rounded-lg">
        <div className="px-2 py-1 bg-white rounded-md shadow-md text-rose-500">
          Matematika
        </div>
        <Link href={to} scroll={false}>
          <a>
            <div className="px-2 py-1 text-gray-700 rounded-md hover:bg-gray-200">Fisika</div>
          </a>
        </Link>
      </section>
    </header>
  );
};

export default TabMath;
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
