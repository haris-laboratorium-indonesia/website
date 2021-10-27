import Link from 'next/link';
import src from '../public/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavDesktop() {
  const router = useRouter();
  return (
    <nav className='hidden md:block'>
      <div className='z-30 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-1 mx-auto xl:px-0'>
        <Link href='/'>
          <a className='flex items-center text-lg font-medium font-mw '>
            <span className='text-gray-100'>Haris</span>
            <span className='text-gray-400'>Lab</span>
          </a>
        </Link>

        <div className='flex flex-row md:space-x-4 lg:space-x-10'>
          <Navigation to='/store' title='Store' />
          <Navigation to='/kalkulator' title='Kalkulator' />
          <Navigation to='/bimbel' title='Bimbel' />
          <Navigation to='/matematika' title='Matematika' />
          <Navigation to='/fisika' title='Fisika' />
        </div>

        <div className='flex items-center space-x-5'>
          <Search />
          <Login />
        </div>
      </div>
    </nav>
  );
}

const Navigation = ({ to, title }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <a
        className={`p-1.5 duration-200 hover:text-[#d7d7d6] text-base block font-light font-inter active:text-white ${
          router.asPath === to ? 'text-[#d7d7d6]' : 'text-gray-50'
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

const Search = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-[#d7d7d6] hover:text-white'
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

const Login = () => {
  return (
    <Link href='/'>
      <a className='p-1.5 text-[#d7d7d6] duration-200 rounded-md text-tiny hover:bg-opacity-80 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 text-[#d7d7d6] hover:text-white'
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
      </a>
    </Link>
  );
};
