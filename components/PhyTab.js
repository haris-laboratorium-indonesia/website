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
            <div className="px-2 pt-1.5 pb-1 rounded-t  border-b-2 border-gray-100 bg-gray-100 hover:bg-gray-200">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 pt-1.5 pb-1 rounded-t  border-b-2 border-blue-harislab bg-gray-100 shadow-inner ">
          Fisika
        </div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
