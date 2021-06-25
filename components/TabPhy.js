import Link from 'next/link'
const TabPhy = ({ page, to }) => {
  return (
    <header className="z-40 flex flex-row items-center justify-between w-full h-auto my-5 py-2.5 border-b border-gray-500 bg-white ">
      <div className="block text-3xl font-semibold text-gray-800">{page}</div>
      <section className="flex flex-row items-center justify-end p-1 space-x-0.5 text-sm  bg-gray-50 border border-gray-300 rounded-lg ">
        <Link href={to}>
          <a>
            <div className="px-2 py-1 rounded-md ">Matematika</div>
          </a>
        </Link>
        <div className="px-2 py-1 text-white bg-gray-500 rounded-md ">Fisika</div>
      </section>
    </header>
  )
}

export default TabPhy

// komponen ini ada di halaman homePhy.js, cardPhy.js,calculatorPhy.js, animationPhy.jsscanPhy.js, gamesPhy.js
