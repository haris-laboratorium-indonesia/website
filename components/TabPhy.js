import Link from "next/link";
export default function TabPhy(props) {
  return (
    <main className="sticky top-0 flex flex-row items-center justify-between w-full h-auto py-2 mb-5 bg-white border-b border-gray-300 ">
      <section className="text-2xl font-semibold text-red-500">
        {props.in}
      </section>
      <section className="flex flex-row items-center justify-end p-1 space-x-2 text-sm border border-gray-200 rounded-md shadow-inner bg-gray-50">
        <Link href={props.to} scroll={false}>
          <a>
            <div className="px-2 py-0.5 text-black rounded-md border border-gray-50">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1 text-black bg-white border border-gray-200 rounded-md shadow-md ">
          Fisika
        </div>
      </section>
    </main>
  );
}

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
