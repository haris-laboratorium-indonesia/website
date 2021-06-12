import Link from "next/link";
export default function PhyTab(props) {
  return (
    <main className="sticky z-10 flex flex-row items-center justify-between w-full pt-2 pb-1 my-2 bg-white border-b sm:pt-3 sm:pb-2 -top-1 blur sm:space-x-5">
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
