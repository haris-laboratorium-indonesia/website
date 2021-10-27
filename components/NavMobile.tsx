import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import src from '../public/logo.png';
import { useRouter } from 'next/router';

export default function NavMobile() {
  return (
    <nav className='flex items-center justify-between w-full h-auto md:hidden'>
      <Login />
      <Link href='/'>
        <a className='flex items-center text-xl font-medium font-mw'>
          <span className='text-gray-100'>Haris</span>
          <span className='text-gray-400'>Lab</span>
        </a>
      </Link>

      <Menu as='div' className='z-50'>
        {({ open }) => (
          <>
            <Menu.Button className='px-3 py-2 focus:outline-none'>
              {open ? <X /> : <TwoLines />}
            </Menu.Button>

            <Menu.Items className='absolute top-0 right-0  w-full h-[500px] mt-[43px] overflow-y-auto'>
              <Search />

              <section className='flex flex-col px-8 py-5 space-y-2 bg-gray-800 border-t border-gray-600 divide-y divide-gray-600 '>
                <Navigation to='/store' title='Store' />
                <Navigation to='/kalkulator' title='Kalkulator' />
                <Navigation to='/bimbel' title='Bimbel' />
                <Navigation to='/matematika' title='Matematika' />
                <Navigation to='/fisika' title='Fisika' />
              </section>
            </Menu.Items>
          </>
        )}
      </Menu>
    </nav>
  );
}

const Navigation = ({ to, title }) => {
  const router = useRouter();
  return (
    <Menu.Item>
      {({ active }) => (
        <button className='w-full text-left'>
          {active ? (
            <Link href={to}>
              <a
                className={`${
                  router.asPath === to ? 'text-gray-400' : 'text-gray-50'
                } text-lg block pt-2 pb-1`}
              >
                {title}
              </a>
            </Link>
          ) : (
            <Link href={to}>
              <a
                className={`${
                  router.asPath === to ? 'text-gray-400' : 'text-gray-50'
                } text-lg block pt-2 pb-1`}
              >
                {title}
              </a>
            </Link>
          )}
        </button>
      )}
    </Menu.Item>
  );
};

export const X = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`text-[#d7d7d6] w-7 h-7 `}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

const TwoLines = () => {
  return (
    <svg
      className='h-7 w-7 text-[#d7d7d6]'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth={1.2}
      fill='none'
    >
      <path d='M4 8h16M4 16h16' />
    </svg>
  );
};

const Login = () => {
  return (
    <div className='px-3 py-2 '>
      <svg
        className='w-6 h-6 text-[#d7d7d6] '
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
        />
      </svg>
    </div>
  );
};

const Search = () => {
  return (
    <div className='z-50 px-3 py-2 bg-gray-800'>
      <section className='flex items-center px-2 py-1.5 bg-gray-700 rounded-lg '>
        <label htmlFor='search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeWidth={1.2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </label>
        <input
          id='search'
          type='text'
          className='w-full ml-1 text-white placeholder-gray-400 bg-gray-700 focus:outline-none '
          placeholder='Search'
        />
      </section>
    </div>
  );
};
