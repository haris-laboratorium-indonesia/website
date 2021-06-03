import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-5 mt-24 text-center bg-gray-50 sm:px-0">
      <section className="flex flex-col max-w-4xl mx-auto space-y-10 text-left sm:flex-row sm:space-y-0">
        <article className="flex w-full sm:w-1/2">
          <div className="w-full space-y-1 sm:w-1/2">
            <div className="text-base font-light text-gray-600">ALAT</div>
            <Link href="/math/homeMath">
              <a className="block text-base hover:underline">Belajar</a>
            </Link>
            <Link href="/calculatorMath">
              <a className="block text-base hover:underline">Kalkulator</a>
            </Link>
            <Link href="/flashcardMath">
              <a className="block text-base hover:underline">Kartu</a>
            </Link>
            <Link href="/animationMath">
              <a className="block text-base hover:underline">Animasi</a>
            </Link>
            <Link href="/scanMath">
              <a className="block text-base hover:underline">Scan</a>
            </Link>
            <Link href="/gamesMath">
              <a className="block text-base hover:underline">Games</a>
            </Link>
          </div>
          <div className="w-full space-y-1 sm:w-1/2">
            <div className="text-sm font-light text-gray-600">LAINNYA</div>
            <Link href="/merchandise">
              <a className="block text-base hover:underline">Merchandise</a>
            </Link>
            <Link href="/bookingMe">
              <a className="block text-base hover:underline">Booking Me !</a>
            </Link>
            <Link href="/portofolio">
              <a className="block text-base hover:underline">Portofolio</a>
            </Link>
          </div>
        </article>
        <article className="w-full sm:w-1/2">
          <div className="text-2xl">
            Haris<span className="text-gray-600">Lab</span>
          </div>
          <div className="mt-2 text-xs text-gray-600 sm:text-sm">
            PT. Haris Laboratorium Indonesia
          </div>
          <div className="mt-2 text-xs text-gray-500 sm:text-sm">
            Jl. Manggis 5, Pondok Kacang Timur, Tangerang Selatan, Banten 15226,
            Indonesia
          </div>
          <div className="flex flex-col w-full mt-10 text-xs text-gray-600 sm:text-sm sm:flex-row">
            <div>
              Copyright &copy;2021 Haris
              <span className="font-light">Lab</span> LLC. &nbsp;
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
              .
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}
