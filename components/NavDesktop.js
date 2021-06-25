import Link from 'next/link'
import {HiOutlineLogin} from 'react-icons/hi'
const NavDesktop = () => {
  const nav = 'p-2  duration-200 hover:text-white text-gray-300  block'
  return (
    <nav className="hidden md:block">
      <nav className="z-50 flex flex-row items-center justify-between w-full h-auto max-w-4xl px-5 py-2 mx-auto xl:px-0">
        <Link href="/">
          <a className="items-center block text-lg font-semibold text-gray-200 hover:text-white font-mw">
            <span className="font-bold ">Haris</span>
            <span className="font-light">Lab</span>
          </a>
        </Link>

        <Link href="/matematika">
          <a className={nav}>Materi</a>
        </Link>
        <Link href="/kartu">
          <a className={nav}>Kartu</a>
        </Link>
        <Link href="/kalkulator">
          <a className={nav}>Kalkulator</a>
        </Link>
        <Link href="/bookingLes">
          <a className={nav}>Les</a>
        </Link>
        <Link href="/blog">
          <a className={nav}>Blog</a>
        </Link>

        <Link href="/login">
          <a>
            <div className="px-3 pb-1 text-sm text-white duration-200 rounded-full pt-0.5 bg-harislab hover:bg-opacity-70">
              Login
            </div>
          </a>
        </Link>
      </nav>
    </nav>
  )
}

export default NavDesktop
