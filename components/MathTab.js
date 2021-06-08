import Link from "next/link";
export default function MathTab(props) {
  return (
    <main className="flex flex-row items-center w-full my-5 sm:space-x-5">
      <section className="py-1 text-2xl font-semibold sm:text-3xl">
        {props.in}
      </section>
      <section className="flex flex-row justify-end w-full space-x-2 sm:justify-start ">
        <div className="px-2 pt-1.5 pb-1 rounded-t  border-b-2 border-blue-harislab bg-gray-100 shadow-inner ">
          Matematika
        </div>
        <Link href={props.to}>
          <a>
            <div className="px-2 pt-1.5 pb-1 rounded-t  border-b-2 border-gray-100 bg-gray-100 hover:bg-gray-200">
              Fisika
            </div>
          </a>
        </Link>
      </section>
    </main>
  );
}
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
