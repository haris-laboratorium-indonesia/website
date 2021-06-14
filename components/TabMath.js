import Link from "next/link";
export default function TabMath(props) {
  return (
    <main className="sticky top-0 flex flex-row items-center justify-between w-full h-auto py-2 mb-5 bg-white border-b border-gray-300 ">
      <section className="text-2xl font-semibold text-red-500 ">
        {props.in}
      </section>
      <section className="flex flex-row items-center justify-end p-0.5 space-x-2 text-sm border border-gray-200 rounded-md bg-gray-50">
        <div className="px-2 py-1 text-black bg-white border border-gray-200 rounded-md shadow ">
          Matematika
        </div>
        <Link href={props.to} scroll={false}>
          <a>
            <div className="px-2 py-0.5 text-black rounded-md border border-gray-50">
              Fisika
            </div>
          </a>
        </Link>
      </section>
    </main>
  );
}
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
