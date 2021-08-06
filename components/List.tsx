import { Menu } from '@headlessui/react';
import { LeftArrow, HamburgerMenu, X } from '@/Icons';
import Link from 'next/link';

export const a = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';
export const b = '';

export function NavList({ title, href }) {
  const a = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';
  return (
    <Menu.Item>
      <a className={a} href={`#${href}`}>
        {title}
      </a>
    </Menu.Item>
  );
}

export default function List({ branch, to, title, children }) {
  return (
    <div className='sticky z-40 -mx-3 top-3'>
      <Menu as='div' className='flex flex-col w-full mt-10 mb-3 sm:mb-5 sm:mx-auto'>
        {({ open }) => (
          <>
            <div className='flex items-center justify-between w-full px-1.5 py-0.5 mx-auto bg-gray-800 rounded-md  sm:w-1/2'>
              <Link href={`/${branch}`}>
                <a className='z-50 block p-1 text-sm rounded-lg '>
                  <LeftArrow color='text-white hover:text-gray-300' />
                </a>
              </Link>

              <Link href={`/${branch}/${to}`}>
                <a className='block w-2/3 py-2 text-center text-white hover:text-gray-300'>
                  {title}{' '}
                </a>
              </Link>

              <Menu.Button className='focus:outline-none'>
                <div className='p-1 rounded-lg '>
                  {open ? (
                    <X color='hover:text-gray-300 text-red-500' />
                  ) : (
                    <HamburgerMenu color='hover:text-gray-300 text-white' />
                  )}
                </div>
              </Menu.Button>
            </div>

            <Menu.Items className='flex w-full sm:justify-center'>
              <div className='w-full p-2 mt-2 overflow-y-auto bg-gray-800 rounded-md shadow-lg max-h-96 sm:w-1/2'>
                <div className='px-2 py-1 mb-1 text-left text-gray-300 border-b border-gray-500'>
                  Daftar Isi
                </div>
                {children}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
