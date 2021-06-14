import Link from "next/link";
export default function TabMath(props) {
  return (
    <main className="sticky top-0 flex flex-row items-center justify-between w-full py-2 mb-5 bg-white border-b border-gray-400 sm:space-x-5 h-11">
      <section className="text-lg font-semibold">{props.in}</section>
      <section className="flex flex-row justify-end w-auto space-x-2 text-sm">
        <div className="text-blue-harislab ">Matematika</div>
        <Link href={props.to} scroll={false}>
          <a>
            <div className="">Fisika</div>
          </a>
        </Link>
      </section>
    </main>
  );
}
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
