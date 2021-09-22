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
      <div className='flex flex-col items-center justify-center min-h-screen space-y-4 '>
        <div className='font-medium text-center text-gray-600'>Unfortunately</div>
        <div className='text-4xl font-bold text-center text-gray-700'>Page not found</div>
        <Link href='/'>
          <a className='block px-4 py-2 text-base duration-200 border rounded-full cursor-pointer text-harislab border-harislab hover:bg-blue-50'>
            Back to home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
