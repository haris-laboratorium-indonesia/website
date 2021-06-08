import Link from "next/link";
export default function PhyTab(props) {
  return (
    <main className="flex flex-row items-center justify-between w-full my-5 sm:space-x-5 sm:justify-start">
      <section className="py-1 text-xl font-semibold sm:text-3xl">
        {props.in}
      </section>
      <section className="flex flex-row justify-end w-auto p-1 space-x-2 text-sm bg-gray-100 rounded-lg sm:justify-start">
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 rounded-lg ">Matematika</div>
          </a>
        </Link>
        <div className="px-2 py-1 bg-white rounded-lg shadow-md ">Fisika</div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
