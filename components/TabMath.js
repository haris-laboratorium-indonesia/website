import Link from "next/link";

const TabMath = ({ page, to, backTo, textColor }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto mb-3 bg-white ">
      <Link href={backTo}>
        <a className={`${textColor} block text-2xl font-semibold`}>
          {page}
        </a>
      </Link>

      <section className="flex flex-row items-center justify-end p-0.5 space-x-2 text-sm bg-gray-100  rounded-md">
        <div className="px-2 py-1 text-black bg-white border border-white rounded-md shadow">
          Matematika
        </div>
        <Link href={to} scroll={false}>
          <a>
            <div className="px-2 py-1 text-black border rounded-md border-gray-50">
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
