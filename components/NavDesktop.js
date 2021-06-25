import Link from 'next/link'

const NavDesktop = () => {
  const nav =
    'px-2.5 pt-1 pb-1.5 rounded-md  duration-200  hover:text-harislab border border-white hover:border-harislab items-center flex'
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
          <a className={nav}>
            <div className="">Materi</div>
          </a>
        </Link>
        <Link href="/kartu">
          <a className={nav}>
            <div className="">Flash Card</div>
          </a>
        </Link>
        <Link href="/kalkulator">
          <a className={nav}>
            <div className="">Kalkulator</div>
          </a>
        </Link>
        <Link href="/bookingLes">
          <a className={nav}>
            <div className="">Booking Les</div>{' '}
          </a>
        </Link>
        <Link href="/blog">
          <a className={nav}>
            <div className="">Blog</div>{' '}
          </a>
        </Link>

        <Link href="/login">
          <a className="px-3 pt-1.5 pb-2 text-sm text-white duration-200 border border-white rounded-md hover:border-harislab hover:bg-white bg-harislab hover:text-harislab">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  )
}

export default NavDesktop
