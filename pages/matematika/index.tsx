import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Link from 'next/link';
import { RightArrow } from '@/Icons';

const matematika = () => {
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />

      <div className='mb-5 -mt-5 text-center'>Pelajari bahasa alam semesta melalui matematika.</div>

      <Link href='/matematika/glosarium'>
        <a className='flex items-center justify-between w-full px-2.5 py-2.5 mb-3 duration-200 bg-white rounded-md shadow hover:shadow-md sm:px-3'>
          <div className='flex items-center space-x-2 sm:justify-between sm:space-x-1'>
            <Collection />
            <p>Glosarium Matematika</p>
          </div>
          <div className='sm:hidden'>
            <RightArrow color=' ' />
          </div>
        </a>
      </Link>

      <div className='px-2.5 py-2.5 bg-white border-b shadow rounded-t-md sm:px-3 hover:shadow-md'>
        <div className='flex items-center space-x-2 sm:space-x-1'>
          <svg
            className='w-6 h-6 text-gray-700'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='#E4E4E7'
          >
            <path d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' />
          </svg>
          <p>Bab Matematika</p>
        </div>
      </div>
      <section className='grid grid-cols-1 bg-white shadow hover:shadow-md divide-y divide-gray-300 rounded-b-md sm:px-1.5 sm:py-2 sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0 sm:gap-1'>
        <ChapterBox title='Lingkaran' to='matematika/Lingkaran' />
        <ChapterBox title='Integral' to='matematika/Integral' />
        <ChapterBox title='Linear' to='matematika/Linear' />
        <ChapterBox title='Kuadrat' to='matematika/Kuadrat' />
        <ChapterBox title='Suku Banyak' to='matematika/SukuBanyak' />
        <ChapterBox title='Matriks' to='matematika/Matriks' />
        <ChapterBox title='Transformasi Geometri' to='matematika/TransformasiGeometri' />
        <ChapterBox title='Geometri' to='matematika/Geometri' />
        <ChapterBox title='Trigonometri' to='matematika/Trigonometri' />
        <ChapterBox title='Logaritma' to='matematika/Logaritma' />
        <ChapterBox title='Eksponen' to='matematika/Eksponen' />
        <ChapterBox title='Turunan' to='matematika/Turunan' />
        <ChapterBox title='Limit' to='matematika/Limit' />
        <ChapterBox title='Dimensi 3' to='matematika/Dimensi3' />
        <ChapterBox title='Vektor' to='matematika/Vektor' />
        <ChapterBox title='Barisan Deret' to='matematika/BarisanDeret' />
        <ChapterBox title='Statistika' to='matematika/Statistika' />
        <ChapterBox title='Peluang' to='matematika/Peluang' />
      </section>
    </Layout>
  );
};

const Collection = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-700'
      fill='#E4E4E7'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      />
    </svg>
  );
};

export default matematika;
