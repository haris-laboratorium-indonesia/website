import Link from "next/link";
export default function PhyTab(props) {
  return (
    <main className="flex flex-row items-center justify-between w-full mt-16 mb-2 border-b sm:space-x-5">
      <section className="text-lg font-semibold">{props.in}</section>
      <section className="flex flex-row justify-end w-auto space-x-2 text-sm">
        <Link href={props.to} scroll={false}>
          <a>
            <div className="px-2 py-1 ">Matematika</div>
          </a>
        </Link>
        <div className="px-2 py-1 text-blue-harislab">Fisika</div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
