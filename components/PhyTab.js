import Link from "next/link";
export default function PhyTab(props) {
  return (
    <main className="flex flex-row items-center w-full my-5 sm:space-x-5 ">
      <section className="py-1 text-2xl font-semibold sm:text-3xl">
        {props.in}
      </section>
      <section className="flex flex-row justify-end w-full space-x-2 sm:justify-start">
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 border border-black rounded-md hover:bg-gray-50">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1 bg-gray-200 border border-black rounded-md">
          Fisika
        </div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
