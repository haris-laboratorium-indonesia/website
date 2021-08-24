import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';
import { useState, useEffect } from 'react';

export default function kalkulator() {
  return (
    <Layout browserTitle='Kalkulator' description='Kalkulator'>
      <Title name='Kalkulator' />
      <SubTitle name='Hitung apapun yang perlu dihitung.' />
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
