import Link from "next/link";

export default function DesktopNav() {
  const nav =
    "px-2 py-1 text-sm rounded text-gray-600 hover:text-[#1D1D1F] hover:bg-[#F2F5F7] active:bg-[#007AFF]";
  return (
    <nav className="hidden sm:block">
      <nav className="flex flex-row items-center justify-between w-full px-5 md:flex lg:px-0">
        <Link href="/">
          <a className="flex flex-row items-center text-[#1D1D1F] font-semibold text-lg  ml-0.5 font-mw">
            Haris<span className="font-light">Lab</span>
          </a>
        </Link>
        <Link href="/math/homeMath">
          <a className={nav}>Materi</a>
        </Link>
        <Link href="/flashCardMath">
          <a className={nav}>Kartu</a>
        </Link>
        <Link href="/calculatorMath">
          <a className={nav}>Kalkulator</a>
        </Link>
        <Link href="/merchandise">
          <a className={nav}>Merchandise</a>
        </Link>
        <Link href="/bookingMe">
          <a className={nav}>Booking Les </a>
        </Link>
        <Link href="/portofolio">
          <a className={nav}>Portofolio</a>
        </Link>
        <Link href="/blog">
          <a className={nav}>Blog</a>
        </Link>

        <Link href="/signUp">
          <a className="text-xs rounded-md text-white bg-[#007AFF] hover:bg-opacity-90  px-3 py-1.5">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  );
}
