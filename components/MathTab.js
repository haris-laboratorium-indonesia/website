import Link from "next/link";
export default function MathTab(props) {
  return (
    <main className="flex flex-row items-center justify-between w-full my-5 sm:space-x-5 sm:justify-start">
      <section className="py-1 text-xl font-semibold sm:text-3xl">
        {props.in}
      </section>
      <section className="flex flex-row justify-end w-auto p-1 space-x-2 text-sm bg-gray-100 rounded-lg sm:justify-start">
        <div className="px-2 py-1 bg-white rounded-lg shadow-md ">Matematika</div>
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 rounded-lg ">Fisika</div>
          </a>
        </Link>
      </section>
    </main>
  );
}
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
