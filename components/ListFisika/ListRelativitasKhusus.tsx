import { Menu } from '@headlessui/react';
import { MenuList, LeftArrow } from '@/Icons';
import Link from 'next/link';

export default function ListRelativitasKhusus() {
  const list = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';
  return (
    <div className='sticky z-40 -mx-3 sm:-mx-5 top-2'>
      <Menu as='div' className='flex flex-col w-full my-3 sm:my-5 sm:mx-auto'>
        <div className='flex items-center justify-between w-full px-1 mx-auto bg-gray-800 rounded-md shadow-lg sm:w-1/2'>
          <Link href='/fisika'>
            <a className='z-50 block p-1 text-sm rounded-lg '>
              <LeftArrow color='text-gray-200 hover:text-white' />
            </a>
          </Link>

          <Link href={`/fisika/RelativitasKhusus`}>
            <a className='block w-2/3 py-2 text-center text-gray-100 hover:text-white'>
              Relativitas Khusus
            </a>
          </Link>

          <Menu.Button className='focus:outline-none'>
            <div className='p-1 rounded-lg '>
              <MenuList color='text-gray-200 hover:text-white' />
            </div>
          </Menu.Button>
        </div>

        <Menu.Items className='flex w-full sm:justify-center'>
          <div className='w-full p-2 mt-2 bg-gray-800 rounded-md shadow-lg sm:w-1/2 '>
            <div className='px-2 py-1 mb-1 text-left text-gray-300 border-b border-gray-500'>
              Daftar Isi
            </div>
            <Menu.Item>
              <a className={list} href='#Pengenalan'>
                Pengenalan
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#Konstanta'>
                Konstanta
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#Variabel'>
                Variabel
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#Rumus'>
                Rumus
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#PenurunanRumus'>
                Penurunan Rumus
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#Pembahasan'>
                Pembahasan{' '}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={list} href='#ContohSoal'>
                Contoh Soal
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
