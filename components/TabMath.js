import Link from "next/link";

const TabMath = ({ page, to, backTo, textColor }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-auto py-2 mb-3 bg-white border-b border-gray-300 ">
      <Link href={backTo}>
        <a className={`${textColor} block text-xl sm:text-2xl font-semibold`}>
          {page}
        </a>
      </Link>

      <section className="flex flex-row items-center justify-end p-0.5 space-x-2 text-sm bg-gray-100  rounded-md">
        <div className="px-1 py-0.5 text-black bg-white border border-white rounded-md shadow sm:py-1 sm:px-2">
          Matematika
        </div>
        <Link href={to} scroll={false}>
          <a>
            <div className="px-1 py-0.5 text-black border rounded-md sm:py-1 sm:px-2 border-gray-50">
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
