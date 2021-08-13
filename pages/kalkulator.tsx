import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { useState, useEffect } from 'react';

function Box({ title }) {
  return (
    <div>
      <div className='text-center'>{title}</div>
      <div className='mt-2 duration-300 bg-white rounded-md shadow-md hover:shadow-lg h-52'></div>
    </div>
  );
}

const nama = [
  { nama: 'Kalkulator Biasa' },
  { nama: 'Kalkulator Saintifik' },
  { nama: 'Kalkulator Rumus' },
];

export default function kalkulator() {
  return (
    <Layout browserTitle='Kalkulator' description='Kalkulator'>
      <Title name='Kalkulator' />
      <div className='mb-5 -mt-5 text-center'>Hitung apapun yang perlu dihitung.</div>
      {/* <div className='hidden sm:block'>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          {nama.map(a => (
            <Box title={a.nama}></Box>
          ))}
        </div>
      </div>
      <div className='block sm:hidden'>
        <div className='grid grid-cols-1 gap-3'>
          {nama.map(a => (
            <div className='px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow-md hover:shadow-lg'>
              {a.nama}
            </div>
          ))}
        </div>
      </div> */}
      <KalkulatorSederhana />
    </Layout>
  );
}

const KalkulatorSederhana = () => {
  const style = 'bg-gray-200 hover:bg-gray-300 h-10 w-10 p-2 text-center rounded-md';
  const [result, setResult] = useState(0);
  const [satu, setSatu] = useState(1);
  const [dua, setDua] = useState(2);
  const [operasi, setOperasi] = useState('');
  const hasil = satu * dua;

  useEffect(() => {
    document.title = `You clicked ${satu} times`;
  });
  useEffect(() => {});
  return (
    <div className='flex items-center justify-center w-full mx-auto mt-32 '>
      <div>
        <div className='flex flex-row mb-5 space-x-3'>
          <div className={style}>{satu}</div>
          <div className={style}>{operasi}</div>
          <div className={style}>{dua}</div>
          <div className={style}>{result}</div>
        </div>
        <section className='grid grid-cols-4 gap-3'>
          <button onClick={() => setOperasi('*')} className={style}>
            *
          </button>
          <button onClick={() => setOperasi('/')} className={style}>
            /
          </button>
          <button onClick={() => setOperasi('+')} className={style}>
            +
          </button>
          <button onClick={() => setOperasi('-')} className={style}>
            -
          </button>
          <button onClick={() => setResult(hasil)} className={style}>
            =
          </button>
        </section>
      </div>
    </div>
  );
};
