import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Collection } from '@/components/Icons';
export const a = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';

export default function List({ branch, to, title, children }) {
  return (
    <div className='sticky z-40 -mx-3 top-14'>
      <Menu as='div' className='flex flex-col w-full mt-2 mb-5 sm:mt-1 sm:mb-2 sm:mx-auto'>
        {({ open }) => (
          <>
            <section className='flex items-center justify-between w-full mx-auto bg-white border border-gray-300 rounded-lg drop-shadow-2xl sm:w-1/2'>
              <Link href={`/${branch}`}>
                <a className='z-50 block px-3 py-2 text-sm rounded-lg '>
                  <Collection color='' />
                </a>
              </Link>

              <Link href={`/${branch}/${to}`}>
                <a className='block w-2/3 py-2 text-center text-gray-700 text-tiny hover:text-harislab'>
                  {title}
                </a>
              </Link>

              <Menu.Button className='focus:outline-none'>
                <div className='px-3 py-2 rounded-lg '>{open ? <X /> : <ChevronDown />}</div>
              </Menu.Button>
            </section>

            <Menu.Items className='flex justify-center w-full'>
              <div className='w-full p-2 mt-2 overflow-y-auto bg-white border border-gray-300 rounded-lg drop-shadow-2xl max-h-96 sm:w-1/2'>
                {children}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export function NavList({ title, href }) {
  return (
    <Menu.Item>
      <a
        className={`block text-gray-700 hover:text-white rounded px-2 py-1 hover:bg-gray-700`}
        href={`#${href}`}
      >
        {title}
      </a>
    </Menu.Item>
  );
}

const ChevronDown = () => {
  return (
    <svg
      className='w-6 h-6 text-gray-700 hover:text-harislab'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      fill='none'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-700 hover:text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};
