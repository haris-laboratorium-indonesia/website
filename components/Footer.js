import Link from "next/link";

export default function Footer() {
  const navigation =
    "block text-sm text-gray-400 hover:underline hover:text-white hover:underline";
  return (
    <footer className="bottom-0 w-full text-center bg-gray-800 ">
      <section className="flex flex-col max-w-5xl p-5 mx-auto space-y-10 text-left sm:flex-row sm:space-y-0 xl:px-0">
        {/* Footer Navigation */}
        <article className="flex w-full sm:w-1/2">
          <div className="w-full space-y-2 sm:w-1/2">
            {/* Alat */}
            <div className="text-sm font-medium text-white">Alat</div>
            <Link href="/math/homeMath">
              <a className={navigation}>Belajar</a>
            </Link>
            <Link href="/calculatorMath">
              <a className={navigation}>Kalkulator</a>
            </Link>
            <Link href="/flashCardMath">
              <a className={navigation}>Kartu</a>
            </Link>
          </div>

          {/* Lainnya */}
          <div className="w-full space-y-2 sm:w-1/2">
            <div className="text-sm font-medium text-white ">Lainnya</div>
            <Link href="/portofolio">
              <a className={navigation}>Portofolio</a>
            </Link>

            <Link href="/bookingMe">
              <a className={navigation}>Booking Les</a>
            </Link>
            <Link href="/merchandise">
              <a className={navigation}>Merchandise</a>
            </Link>
            <Link href="/blog">
              <a className={navigation}>Blog</a>
            </Link>
          </div>
        </article>

        {/* Company Identity */}
        <article className="w-full pt-10 text-xs text-gray-500 border-t border-gray-500 sm:border-0 sm:pt-0 sm:w-1/2">
          <div className="text-2xl text-white font-mw">
            Haris<span className="font-light text-gray-400">Lab</span>
          </div>
          <div className="mt-2 sm:text-sm">
            PT. Haris Laboratorium Indonesia
          </div>
          <div className="mt-2 sm:text-sm">
            Pondok Kacang Timur, Tangerang Selatan, Banten 15226, Indonesia
          </div>
          <div className="flex flex-col w-full mt-10 sm:text-sm sm:flex-row">
            <div>
              Copyright &copy;2021 Haris
              <span className="">Lab</span> LLC. &nbsp;
            </div>
            <div>
              Crafted by &nbsp;
              <a
                target="_blank"
                href="https://twitter.com/haritssr"
                className="text-blue-500 hover:underline"
              >
                Harits Syah
              </a>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}

// komponen ini ada di Layout.js
