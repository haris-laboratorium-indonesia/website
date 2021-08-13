import ChapterBoxMatematika from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Link from 'next/link';

const matematika = () => {
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />

      <div className='mb-5 -mt-5 text-center'>Pelajari bahasa alam semesta melalui matematika.</div>

      <Link href='/matematika/glosarium'>
        <a className='flex items-center justify-center p-2 my-5 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 '>
          <div className='flex items-center space-x-2 sm:justify-between sm:space-x-1'>
            <Collection />
            <p>Glosarium</p>
          </div>
        </a>
      </Link>

      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBoxMatematika title='Lingkaran' to='matematika/Lingkaran' />
        <ChapterBoxMatematika title='Integral' to='matematika/Integral' />
        <ChapterBoxMatematika title='Linear' to='matematika/Linear' />
        <ChapterBoxMatematika title='Kuadrat' to='matematika/Kuadrat' />
        <ChapterBoxMatematika title='Suku Banyak' to='matematika/SukuBanyak' />
        <ChapterBoxMatematika title='Matriks' to='matematika/Matriks' />
        <ChapterBoxMatematika title='Transformasi Geometri' to='matematika/TransformasiGeometri' />
        <ChapterBoxMatematika title='Geometri' to='matematika/Geometri' />
        <ChapterBoxMatematika title='Trigonometri' to='matematika/Trigonometri' />
        <ChapterBoxMatematika title='Logaritma' to='matematika/Logaritma' />
        <ChapterBoxMatematika title='Eksponen' to='matematika/Eksponen' />
        <ChapterBoxMatematika title='Turunan' to='matematika/Turunan' />
        <ChapterBoxMatematika title='Limit' to='matematika/Limit' />
        <ChapterBoxMatematika title='Dimensi 3' to='matematika/Dimensi3' />
        <ChapterBoxMatematika title='Vektor' to='matematika/Vektor' />
        <ChapterBoxMatematika title='Barisan Deret' to='matematika/BarisanDeret' />
        <ChapterBoxMatematika title='Statistika' to='matematika/Statistika' />
        <ChapterBoxMatematika title='Peluang' to='matematika/Peluang' />
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
