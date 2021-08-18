import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';
import Link from 'next/link';

const matematika = () => {
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />

      <SubTitle name='Pelajari bahasa alam semesta melalui matematika.' />

      <Link href='/matematika/glosarium'>
        <a className='flex items-center justify-center p-2 mx-auto my-5 space-x-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300'>
          <Collection />
          <p>Glosarium Matematika</p>
        </a>
      </Link>

      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
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
      fill='#D4D4D4'
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
