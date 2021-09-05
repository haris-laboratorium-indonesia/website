import Link from 'next/link';
import src from '../public/logo.png';
import Image from 'next/image';

export default function NavDesktop() {
  return (
    <nav className='hidden md:block'>
      <div className='z-50 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-1 mx-auto xl:px-0 '>
        <Link href='/'>
          <a className='flex items-center'>
            <Image src={src} width={22} height={22} priority />
          </a>
        </Link>

        <NavDesktopLink to='/toko' name='Store' />
        <NavDesktopLink to='/matematika' name='Matematika' />
        <NavDesktopLink to='/fisika' name='Fisika' />
        <NavDesktopLink to='/kalkulator' name='Kalkulator' />
        <NavDesktopLink to='/bimbel' name='Bimbel' />
        <NavDesktopLink to='/biaya' name='Biaya' />

        <Search />

        <Link href='/'>
          <a className='p-1.5 text-gray-300 duration-200 rounded-md text-tiny hover:bg-opacity-80 '>
            <SignIn />
          </a>
        </Link>
      </div>
    </nav>
  );
}

const Search = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-gray-300 hover:text-white'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  );
};

const NavDesktopLink = ({ to, name }) => {
  return (
    <Link href={to}>
      <a className='p-1.5 duration-200 hover:text-white text-gray-300 text-sm block font-inter '>
        {name}
      </a>
    </Link>
  );
};

const SignIn = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-300 hover:text-white'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
      />
    </svg>
  );
};
