import Layout from '@/components/Layout';
import Link from 'next/link';
import { InternalLink } from '@/components/DesignSystem';

export default function HalamanTidakDitemukan() {
  return (
    <Layout browserTitle='404' description='Kayanya kamu nyasar deh ^_^'>
      <div className='flex flex-col items-center justify-center h-screen space-y-5'>
        <div className='text-4xl font-bold text-center text-gray-700 sm:w-1/2'>Server error </div>
        <Link href='/'>
          <a className='flex items-center px-5 py-2 space-x-2 text-base text-white duration-200 bg-blue-600 border rounded-full cursor-pointer hover:bg-blue-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <div>Back to home</div>
          </a>
        </Link>
        <InternalLink name='Or see our site map' to='/sitemap' />
      </div>
    </Layout>
  );
}
