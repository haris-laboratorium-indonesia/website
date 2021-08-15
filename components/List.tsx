import Link from 'next/link';
import { Menu } from '@headlessui/react';

export const a = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';
export const b = '';

export default function List({ branch, to, title, children, close }) {
  return (
    <div className='sticky z-40 -mx-3 top-14'>
      <Menu as='div' className='flex flex-col w-full mt-2 mb-5 sm:mt-1 sm:mb-2 sm:mx-auto'>
        {({ open }) => (
          <>
            <section className='flex items-center justify-between w-full mx-auto bg-gray-700 rounded-lg '>
              <Link href={`/${branch}`}>
                <a className='z-50 block p-2 text-sm rounded-lg '>
                  <Collection color='text-white hover:text-gray-300' />
                </a>
              </Link>

              <Link href={`/${branch}/${to}`}>
                <a className='block w-2/3 py-2 text-center text-white text-tiny hover:text-gray-300'>
                  {title}{' '}
                </a>
              </Link>

              <Menu.Button className='focus:outline-none'>
                <div className='p-2 rounded-lg '>
                  {open ? (
                    <X color={close} />
                  ) : (
                    <HamburgerMenu color='hover:text-gray-300 text-white' />
                  )}
                </div>
              </Menu.Button>
            </section>

            <Menu.Items className='flex w-full sm:justify-end'>
              <div className='w-full p-2 mt-2 overflow-y-auto bg-gray-700 rounded-lg shadow-lg max-h-96 sm:w-1/2'>
                {children}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export function NavListMatematika({ title, href }) {
  return (
    <Menu.Item>
      <a
        className={`block text-gray-200 hover:text-white rounded px-2 py-1 hover:bg-green-500`}
        href={`#${href}`}
      >
        {title}
      </a>
    </Menu.Item>
  );
}

export function NavListFisika({ title, href }) {
  return (
    <Menu.Item>
      <a
        className={`block text-gray-200 hover:text-white rounded px-2 py-1 hover:bg-orange-400`}
        href={`#${href}`}
      >
        {title}
      </a>
    </Menu.Item>
  );
}

const HamburgerMenu = ({ color }) => {
  return (
    <svg
      className={`${color} h-6 w-6 `}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      fill='none'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 9l-7 7-7-7' />
    </svg>
  );
};

<svg
  xmlns='http://www.w3.org/2000/svg'
  className='w-6 h-6'
  fill='none'
  viewBox='0 0 24 24'
  stroke='currentColor'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  />
</svg>;

const Collection = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color} w-6 h-6 `}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
      />
    </svg>
  );
};

const X = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color} w-6 h-6  text-white`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};
