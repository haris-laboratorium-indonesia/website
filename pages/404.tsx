import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function HalamanTidakDitemukan() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 100000);
  }, []);

  return (
    <Layout browserTitle='404' description='Kayanya kamu nyasar deh ^_^'>
      <div className='flex flex-col items-center justify-center min-h-screen space-y-5 text-3xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-20 h-20 text-gray-700'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <div className='font-semibold text-center text-gray-700'>Halaman tidak ditemukan.</div>
        <div className='text-base text-center text-gray-700 '>Kembali ke :</div>
        <Link href='/'>
          <a className='block px-4 py-2 text-base duration-200 border rounded-full cursor-pointer text-harislab border-harislab hover:bg-blue-50'>
            Beranda
          </a>
        </Link>
      </div>
    </Layout>
  );
}
