import Link from "next/link";
export default function MathTab(props) {
  return (
    <main className="sticky z-10 flex flex-row items-center justify-between w-full pt-2 pb-1 my-2 bg-white border-b -top-1 sm:space-x-5 sm:pt-3 sm:pb-2">
      <section className="text-lg font-semibold">{props.in}</section>
      <section className="flex flex-row justify-end w-auto space-x-2 text-sm">
        <div className="px-2 py-1 text-blue-harislab ">Matematika</div>
        <Link href={props.to} scroll={false}>
          <a>
            <div className="px-2 py-1 ">Fisika</div>
          </a>
        </Link>
      </section>
    </main>
  );
}
// komponen ini ada di halaman homeMath.js,  cardMath.js,  calculatorMath.js, animationMath.js, , scanMath.js, , gamesMath.js,
