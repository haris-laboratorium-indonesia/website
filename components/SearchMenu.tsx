import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import { SearchIcon, SearchIcon2 } from './Icons';

export default function SearchMenu() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        onClick={openModal}
        className='rounded-full border border-zinc-600 hover:bg-zinc-700 p-1 hover:border-zinc-400 group'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 text-zinc-400 group-hover:text-white'
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
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={closeModal}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-100'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-zinc-800/80 backdrop-blur' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='inline-block h-[50vh] align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-100'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className=' inline-block w-full sm:max-w-md mt-[10vh] overflow-hidden align-middle transition-all transform bg-zinc-800 shadow-xl rounded-xl h-[50vh] divide-y divide-zinc-700'>
                <div className='flex items-center justify-between space-x-3 pr-3 p-3'>
                  <div className='bg-zinc-700 w-full rounded-md px-2 py-1 flex items-center space-x-2'>
                    <SearchIcon2 />
                    <input
                      type='search'
                      placeholder='Cari Haris Lab...'
                      className='focus:outline-none text-tiny bg-zinc-700 w-full text-zinc-200 placeholder-zinc-400 caret-blue-500 font-thin'
                    />
                  </div>
                  <div
                    onClick={closeModal}
                    className='text-blue-500 cursor-pointer hover:underline'
                  >
                    Tutup
                  </div>
                </div>
                <div className='w-full text-left  text-sm space-y-2 p-3'>
                  <div className='text-zinc-300 text-[10px] tracking-wider'>SUGESTI PENCARIAN</div>
                  <ul className='space-y-1'>
                    <li>
                      <Link href='/matematika'>
                        <a className='text-zinc-500 hover:underline'>Matematika</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/fisika'>
                        <a className='text-zinc-500 hover:underline'>Fisika</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/bimbel'>
                        <a className='text-zinc-500 hover:underline'>Bimbel</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/kalkulator'>
                        <a className='text-zinc-500 hover:underline'>Kalkulator</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
