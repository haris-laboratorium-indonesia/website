import Link from 'next/link';
import { HiOutlineSearch } from 'react-icons/hi';

export default function NavDesktop() {
  const nav = 'p-2 duration-200 hover:text-white text-gray-300 text-tiny block font-inter';
  return (
    <nav className='hidden md:block'>
      <div className='z-50 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-1.5 mx-auto xl:px-0'>
        <Link href='/'>
          <a className='items-center block font-semibold text-gray-200 group hover:text-white font-mw'>
            <span className='font-bold group-hover:text-white'>Haris</span>
            <span className='font-light text-gray-400 group-hover:text-gray-300'>Lab</span>
          </a>
        </Link>

        <section className='flex items-center sm:space-x-8 lg:space-x-10'>
          <Link href='/matematika'>
            <a className={nav}>Matematika</a>
          </Link>
          <Link href='/fisika'>
            <a className={nav}>Fisika</a>
          </Link>
          <Link href='/kalkulator'>
            <a className={nav}>Kalkulator</a>
          </Link>
          <Link href='/bimbel'>
            <a className={nav}>Bimbel</a>
          </Link>
        </section>

        <section className='flex items-center space-x-4'>
          <div className='flex items-center space-x-4'>
            <HiOutlineSearch className='w-4 h-4 text-gray-300 hover:text-white' />
          </div>

          <Link href='/api/auth/signin'>
            <a className='px-3 pb-1 text-sm text-gray-300 duration-200 rounded-md pt-0.5  border hover:bg-opacity-80 '>
              Login
            </a>
          </Link>

          <Link href='/api/auth/signout'>
            <a className='px-3 pb-1 text-sm text-gray-300 duration-200 rounded-md pt-0.5  border hover:bg-opacity-80 '>
              Sign Up
            </a>
          </Link>
        </section>
      </div>
    </nav>
  );
}
