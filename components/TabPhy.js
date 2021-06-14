import Link from "next/link";
export default function TabPhy(props) {
  return (
    <main className="sticky top-0 flex flex-row items-center justify-between w-full py-2 mb-5 bg-white border-b border-gray-400 sm:space-x-5 h-11">
      <section className="text-lg font-semibold">{props.in}</section>
      <section className="flex flex-row justify-end w-auto space-x-2 text-sm">
        <Link href={props.to} scroll={false}>
          <a>
            <div className="">Matematika</div>
          </a>
        </Link>
        <div className="text-blue-harislab">Fisika</div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
