import Layout from '@/components/Layout';
import { InternalLink } from '@/components/DesignSystem';
import { DataFisika } from './../../data/DataFisika';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronBeforeFolder, Folder, File } from '@/components/Icons';
import { BookOpenIcon } from '@/components/Icons';

export default function Fisika() {
  return (
    <Layout
      browserTitle='Fisika'
      description='Mempelajari kegunaan dari matematika pada feno mena-fenomena fisik di seluruh alam semesta.'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5'>
        {DataFisika.map(({ domain, chapters }) => (
          <div key={domain} className='bg-gray-100 rounded-lg h-fit'>
            <Link href={`/fisika/${domain.toLowerCase()}`}>
              <a className='inline-block text-zinc-700 px-4 pb-2 pt-4 rounded-t-lg font-bold text-lg hover:underline'>
                {domain}
              </a>
            </Link>
            <div className='px-3 pb-3'>
              {chapters.map(({ title, contents }) => (
                <Disclosure as='div' key={title}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex items-center hover:bg-zinc-200 rounded-md pl-1 py-1.5 w-full ${
                          open ? 'bg-zinc-200 ' : ''
                        }`}
                      >
                        <ChevronBeforeFolder
                          className={`h-4 w-4 text-zinc-700 ${open ? 'rotate-90' : ''}`}
                        />
                        <Folder />
                        <div className={`text-zinc-700 font-medium `}>
                          {title}
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className='mb-5 space-y-2 pt-1'>
                        {contents.map(content => (
                          <div
                            key={content}
                            className='flex flex-nowrap items-start space-x-1 pl-5 group cursor-pointer'
                          >
                            {content?.includes('Pengantar') ? (
                              <BookOpenIcon className='h-6 w-6 min-h-fit min-w-fit text-zinc-600 group-hover:text-[#06c]' />
                            ) : (
                              <File className='h-6 w-6 text-zinc-600 group-hover:text-[#06c] min-h-fit min-w-fit' />
                            )}
                            <div className='text-zinc-600 group-hover:text-[#06c] group-hover:underline'>
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
    </Layout>
  );
}
