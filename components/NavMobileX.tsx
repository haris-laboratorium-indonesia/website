import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { X } from '@/Icons';

export default function NavMobileX() {
  return (
    <Menu as='div' className=''>
      {({ open }) => (
        <>
          <Menu.Button className='z-50 flex  py-2.5 px-4 rounded-md focus:outline-none'>
            {open ? (
              <X color='text-white hover:text-gray-300' />
            ) : (
              <TwoLines color='text-white hover:text-gray-300 ' />
            )}
          </Menu.Button>
          <Menu.Items className='absolute top-0 right-0 z-50 w-full min-h-screen p-5 mt-12 bg-gray-800'>
            <Search />
            <section className='grid grid-cols-1 p-5 divide-y divide-gray-600'>
              <Pusing to='matematika' title='Matematika' />
              <Pusing to='fisika' title='Fisika' />
              <Pusing to='kartu' title='Kartu' />
              <Pusing to='bimbel' title='Bimbel' />
              <Pusing to='kalkulator' title='Kalkulator' />
            </section>
            <div className='grid grid-cols-2 gap-5 '>
              <Yes to='login' title='Masuk' />
              <Yes to='daftar' title='Daftar' />
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

const Pusing = ({ to, title }) => {
  const nav = 'py-3 text-xl block text-gray-200 ';
  return (
    <Menu.Item>
      {({ active }) => (
        <button className='w-full text-left text-black '>
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

const Yes = ({ to, title }) => {
  return (
    <Link href={`/${to}`}>
      <a className='p-2 text-center text-gray-300 border-[1.3px] rounded-md gray-300 '>{title}</a>
    </Link>
  );
};

const TwoLines = ({ color }) => {
  return (
    <svg
      className={`${color} h-7 w-7`}
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
    <section className='flex items-center rounded-lg  p-1.5  bg-gray-700 '>
      <label htmlFor='search'>
        <SearchIcon color=' ' />
      </label>
      <input
        id='search'
        type='text'
        className='w-full ml-1 text-white placeholder-gray-300 bg-gray-700 focus:outline-none focus:placeholder-white '
        placeholder='Search'
      />
    </section>
  );
};

export const SearchIcon = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='text-gray-300 w-7 h-7'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
    </svg>
  );
};
