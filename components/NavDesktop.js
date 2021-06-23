import Link from "next/link";

const NavDesktop = () => {
  const nav =
    "px-2.5 py-1  rounded-md transition duration-100 ease-out text-gray-800 border-white hover:border-gray-300 hover:bg-gray-50 border";
  const lainnya = "hover:bg-gray-50 py-1 px-2.5 text-sm";
  return (
    <nav className="hidden md:block">
      <nav className="flex flex-row items-center justify-between w-full px-5 py-3 md:flex xl:px-0">
        <Link href="/">
          <a className="items-center block text-xl font-semibold font-mw">
            <span className="font-bold">Haris</span>
            <span className="font-light">Lab</span>
          </a>
        </Link>

        <Link href="/materi/matematika">
          <a className={nav}>Materi</a>
        </Link>
        <Link href="/kartu">
          <a className={nav}>Flash Card</a>
        </Link>
        <Link href="/kalkulator">
          <a className={nav}>Kalkulator</a>
        </Link>
        <Link href="/bookingLes">
          <a className={nav}>Booking Les </a>
        </Link>
        <Link href="/blog">
          <a className={nav}>Blog </a>
        </Link>

        <Link href="/login">
          <a className="text-sm rounded-md text-black border border-black hover:bg-black hover:text-white  px-3 py-1.5">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  );
};

export default NavDesktop;
