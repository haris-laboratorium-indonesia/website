import Link from "next/link";

export default function Footer() {
  const navigation = "block text-sm hover:underline";
  return (
    <footer className="bottom-0 w-full p-5 mt-24 text-center bg-gray-50 sm:px-0">
      <section className="flex flex-col max-w-4xl mx-auto space-y-10 text-left sm:flex-row sm:space-y-0">
        {/* Footer Navigation */}
        <article className="flex w-full sm:w-1/2">
          <div className="w-full space-y-1 sm:w-1/2">
            {/* Alat */}
            <div className="text-sm ">ALAT</div>
            <Link href="/math/homeMath">
              <a className={navigation}>Belajar</a>
            </Link>
            <Link href="/calculatorMath">
              <a className={navigation}>Kalkulator</a>
            </Link>
            <Link href="/flashcardMath">
              <a className={navigation}>Kartu</a>
            </Link>
            <Link href="/animationMath">
              <a className={navigation}>Animasi</a>
            </Link>
            <Link href="/scanMath">
              <a className={navigation}>Scan</a>
            </Link>
            <Link href="/gamesMath">
              <a className={navigation}>Games</a>
            </Link>
          </div>

          {/* Lainnya */}
          <div className="w-full space-y-1 sm:w-1/2">
            <div className="text-sm ">LAINNYA</div>
            <Link href="/merchandise">
              <a className={navigation}>Merchandise</a>
            </Link>
            <Link href="/bookingMe">
              <a className={navigation}>Booking Me !</a>
            </Link>
            <Link href="/portofolio">
              <a className={navigation}>Portofolio</a>
            </Link>
          </div>
        </article>

        {/* Company Identity */}
        <article className="w-full text-xs sm:w-1/2">
          <div className="text-2xl">
            Haris<span>Lab</span>
          </div>
          <div className="mt-2 sm:text-sm">
            PT. Haris Laboratorium Indonesia
          </div>
          <div className="mt-2 sm:text-sm">
            Jl. Manggis 5, Pondok Kacang Timur, Tangerang Selatan, Banten 15226,
            Indonesia
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
