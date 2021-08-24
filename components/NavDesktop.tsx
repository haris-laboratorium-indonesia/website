import Link from 'next/link';
import { HiOutlineSearch } from 'react-icons/hi';
import { signIn, signOut, useSession } from 'next-auth/client';

const NavDesktop = () => {
  const [session, loading] = useSession();
  console.log({ session, loading });

  const nav = 'p-2 duration-200 hover:text-white text-gray-300 text-tiny block font-inter';
  return (
    <nav className='hidden md:block'>
      <nav className='z-50 flex flex-row items-center justify-between w-full h-auto max-w-5xl px-5 py-1.5 mx-auto xl:px-0'>
        <Link href='/'>
          <a className='items-center block text-lg font-semibold text-gray-200 group hover:text-white font-mw'>
            <span className='font-bold group-hover:text-white'>Haris</span>
            <span className='font-light text-gray-400 group-hover:text-gray-300'>Lab</span>
          </a>
        </Link>

        <div className='flex items-center sm:space-x-8 lg:space-x-10'>
          <Link href='/referensi'>
            <a className={nav}>Referensi</a>
          </Link>
          <Link href='/kalkulator'>
            <a className={nav}>Kalkulasi</a>
          </Link>
          <Link href='/animasi'>
            <a className={nav}>Animasi</a>
          </Link>
          <Link href='/bimbel'>
            <a className={nav}>Bimbel</a>
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-4'>
            <HiOutlineSearch className='w-4 h-4 text-gray-300 hover:text-white' />
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
                strokeWidth={2}
                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          {!loading && !session && (
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault();
                  signIn('github');
                }}
              >
                <div className='px-3 pb-1 text-sm text-gray-300 duration-200 rounded-md pt-0.5 bg-gray-700 border-gray-600 border hover:bg-opacity-80 '>
                  Sign In
                </div>
              </a>
            </Link>
          )}

          {session && (
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <div className='px-3 pb-1 text-sm text-gray-300 duration-200 rounded-md pt-0.5 bg-gray-700 border-gray-600 border hover:bg-opacity-80 '>
                  Sign Out
                </div>
              </a>
            </Link>
          )}
        </div>
      </nav>
    </nav>
  );
};

export default NavDesktop;
