import Link from 'next/link'

const NavDesktop = () => {
  const nav = 'px-2.5 pt-1 pb-1.5 rounded-md  duration-200  hover:text-harislab border border-white hover:border-harislab '
  return (
    <nav className="hidden md:block">
      <nav className="z-50 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-4 mx-auto border-b border-gray-300 md:flex xl:px-0">
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
          <a className="text-sm rounded-md text-white border duration-200 border-white hover:border-harislab hover:bg-white bg-harislab hover:text-harislab px-3 pt-1 pb-1.5">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  )
}

export default NavDesktop
