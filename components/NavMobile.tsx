import Link from 'next/link';
import { Menu } from '@headlessui/react';
import src from '../public/logo.png';
import Image from 'next/image';

export default function NavMobile() {
  return (
    <nav className='z-50 flex items-center justify-between w-full h-auto max-w-5xl mx-auto md:hidden '>
      <Menu as='div'>
        {({ open }) => (
          <>
            <Menu.Button className='z-50 p-3 focus:outline-none'>
              {open ? <X /> : <TwoLines />}
            </Menu.Button>

            <Menu.Items className='absolute top-0 right-0 z-50 w-full h-[500px] mt-[40px] overflow-y-auto'>
              <div className='p-3 bg-gray-900 '>
                <Search />
              </div>

              <section className='flex flex-col px-8 py-5 space-y-2 bg-gray-900 border-t border-gray-600 divide-y divide-gray-600'>
                <NavLinkMobile to='toko' title='Store' />
                <NavLinkMobile to='matematika' title='Matematika' />
                <NavLinkMobile to='fisika' title='Fisika' />
                <NavLinkMobile to='kalkulator' title='Kalkulator' />
                <NavLinkMobile to='bimbel' title='Bimbel' />
                <NavLinkMobile to='biaya' title='Biaya' />
              </section>
            </Menu.Items>
          </>
        )}
      </Menu>

      <Link href='/'>
        <a className='flex items-center '>
          <Image src={src} width={22} height={22} priority />
        </a>
      </Link>

      <div className='p-3'>
        <SignIn />
      </div>
    </nav>
  );
}

const NavLinkMobile = ({ to, title }) => {
  const nav = ' text-lg block text-gray-300 pt-2 pb-1';
  return (
    <Menu.Item>
      {({ active }) => (
        <button className='w-full text-left'>
          {active ? (
            <Link href={`/${to}`}>
              <a className={nav}>{title}</a>
            </Link>
          ) : (
            <Link href={`/${to}`}>
              <a className={nav}>{title}</a>
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
      className={`text-[#d7d7d6] w-6 h-6 `}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};

const TwoLines = () => {
  return (
    <svg
      className={`h-6 w-6 text-[#d7d7d6]`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1'
      fill='none'
    >
      <path d='M4 8h16M4 16h16' />
    </svg>
  );
};

const Search = () => {
  return (
    <section className='flex items-center px-2 py-1.5 bg-gray-800 rounded-lg '>
      <label htmlFor='search'>
        <SearchIcon />
      </label>
      <input
        id='search'
        type='text'
        className='w-full ml-1 text-white placeholder-gray-500 bg-gray-800 focus:outline-none '
        placeholder='Search'
      />
    </section>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-gray-500'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
    </svg>
  );
};

const SignIn = () => {
  return (
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
        strokeWidth={1}
        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
      />
    </svg>
  );
};
