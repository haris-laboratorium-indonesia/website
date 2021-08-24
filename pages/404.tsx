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
      <div className='flex flex-col items-center justify-center min-h-screen space-y-10 text-3xl'>
        <div className='font-bold text-center text-gray-700'>Halaman tidak ditemukan.</div>
        <Link href='/'>
          <a className='block px-4 py-2 text-sm text-white duration-200 rounded-md cursor-pointer bg-harislab hover:bg-opacity-80'>
            Beranda
          </a>
        </Link>
      </div>
    </Layout>
  );
}
