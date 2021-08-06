import Link from 'next/link';

const NavDesktop = () => {
  const nav = 'p-2 duration-200 hover:text-white text-gray-300 text-tiny block font-inter';
  return (
    <nav className='hidden md:block'>
      <nav className='z-50 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-1.5 mx-auto xl:px-0'>
        <Link href='/'>
          <a className='items-center block text-lg font-semibold text-gray-200 hover:text-white font-mw'>
            <span className='font-bold '>Haris</span>
            <span className='font-light'>Lab</span>
          </a>
        </Link>

        <Link href='/matematika'>
          <a className={nav}>Matematika</a>
        </Link>
        <Link href='/fisika'>
          <a className={nav}>Fisika</a>
        </Link>
        <Link href='/kalkulator'>
          <a className={nav}>Kalkulator</a>
        </Link>
        <Link href='/kartu'>
          <a className={nav}>Kartu</a>
        </Link>
        <Link href='/bimbel'>
          <a className={nav}>Bimbel</a>
        </Link>
        <Link href='/pricing'>
          <a className={nav}>Pricing</a>
        </Link>
        <Link href='/#support'>
          <a className={nav}>Support</a>
        </Link>

        <Link href='/login'>
          <a>
            <div className='px-3 pb-1 text-sm text-white duration-200 rounded-md pt-0.5 bg-harislab hover:bg-opacity-70'>
              Login
            </div>
          </a>
        </Link>
      </nav>
    </nav>
  );
};

export default NavDesktop;
