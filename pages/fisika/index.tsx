import { InternalLink } from '@/components/DesignSystem';
import { DataFisika } from './../../data/DataFisika';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronBeforeFolder, Folder, File } from '@/components/Icons';
import { BookOpenIcon } from '@/components/Icons';
import LayoutGlobalNavigation from '@/components/LayoutGlobalNavigation';

export default function Fisika() {
  return (
    <LayoutGlobalNavigation
      domain='Fisika'
      browserTitle='Fisika'
      description='Mempelajari kegunaan dari matematika pada feno mena-fenomena fisik di seluruh alam semesta.'
    >
      <div className='flex sm:justify-end'>
        <div className='rounded-lg bg-white border border-zinc-500  px-2 py-1 flex items-center space-x-1 w-full sm:w-1/4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-zinc-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>{' '}
          <input
            type='search'
            placeholder='Cari di Fisika'
            className='bg-white focus:outline-none text-zinc-500 w-full placeholder-zinc-400'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 my-8'>
        {DataFisika.map(({ domain, chapters }) => (
          // bg-gray-100
          <div key={domain} className=' rounded-lg h-fit'>
            <Link href={`/fisika/${domain.toLowerCase()}`}>
              <a className='inline-block text-zinc-800 pb-1 font-semibold hover:underline'>
                {domain}
              </a>
            </Link>
            <div className='bg-zinc-100 border border-zinc-300 px-2 pb-2 pt-1 rounded-md divide-y divide-gray-300 space-y-1'>
              {chapters.map(({ title, contents }) => (
                <Disclosure as='div' key={title} className='pt-1'>
                  {({ open }) => (
                    <>
                      {/* button */}
                      <Disclosure.Button
                        className={`flex items-center hover:bg-zinc-200 pr-2 pl-1 py-1.5 w-full rounded-md    ${
                          open ? 'bg-zinc-200' : ''
                        }`}
                      >
                        <ChevronBeforeFolder
                          className={`h-4 w-4  ${
                            open ? 'rotate-90 text-zinc-700' : 'text-zinc-500'
                          }`}
                        />
                        <Folder />
                        <div
                          className={` font-medium text-sm ${
                            open ? 'text-zinc-800' : 'text-zinc-700'
                          }`}
                        >
                          {title.toUpperCase()}
                        </div>
                      </Disclosure.Button>

                      {/* panel */}
                      <Disclosure.Panel
                        className={`space-y-2 py-1 ml-3 mb-3 border-l-[1.5px] border-zinc-300 ${
                          open ? '' : 'border-zinc-100'
                        }`}
                      >
                        {contents.map(content => (
                          <div
                            key={content}
                            className='flex flex-nowrap items-center space-x-1.5 pl-2.5 group cursor-pointer'
                          >
                            {content?.includes('Pengantar') ? (
                              <BookOpenIcon className='h-5 w-5 min-h-fit min-w-fit text-zinc-600 group-hover:text-rose-600' />
                            ) : (
                              <File className='h-5 w-5 text-zinc-600 group-hover:text-rose-600 min-h-fit min-w-fit' />
                            )}
                            <div className='text-zinc-600 group-hover:text-rose-600  sm:group-hover:underline'>
                              {content}
                            </div>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center flex-col items-center space-y-5 mt-40'>
        <div className='font-semibold text-xl text-zinc-700 text-center'>
          Butuh bimbingan belajar Fisika ke rumah ?
        </div>
        <InternalLink name='Pesan bimbel Haris Lab sekarang' to='/bimbel' />
      </div>
    </LayoutGlobalNavigation>
  );
}
