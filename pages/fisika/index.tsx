import { ChapterBoxFisika } from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Link from 'next/link';
import { RightArrow } from '@/Icons';

const fisika = () => {
  return (
    <Layout browserTitle='Fisika' description='Materi Fisika SMA'>
      <Title name='Fisika' />

      <div className='mb-5 -mt-5 text-center'>
        Pelajari cara kerja engineering dan alam semesta melalui fisika.
      </div>

      <Link href='/fisika/glosarium'>
        <a className='flex items-center justify-center p-2 my-5 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 '>
          <div className='flex items-center space-x-2 sm:justify-between sm:space-x-1'>
            <Collection />
            <p>Glosarium</p>
          </div>
        </a>
      </Link>
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBoxFisika title='Fluida Statis' to='fisika/FluidaStatis' />
        <ChapterBoxFisika title='Fluida Dinamis' to='fisika/FluidaDinamis' />
        <ChapterBoxFisika title='Listrik Statis' to='fisika/ListrikStatis' />
        <ChapterBoxFisika title='Listrik Dinamis' to='fisika/ListrikDinamis' />
        <ChapterBoxFisika title='Gelombang Mekanik' to='fisika/GelombangMekanik' />
        <ChapterBoxFisika title='Gelombang Bunyi' to='fisika/GelombangBunyi' />
        <ChapterBoxFisika title='Gelombang Elektromagnetik' to='fisika/GelombangElektromagnetik' />
        <ChapterBoxFisika title='Kinematika' to='fisika/Kinematika' />
        <ChapterBoxFisika title='Dinamika' to='fisika/Dinamika' />
        <ChapterBoxFisika title='Kesetimbangan' to='fisika/Kesetimbangan' />
        <ChapterBoxFisika title='Termodinamika' to='fisika/Termodinamika' />
        <ChapterBoxFisika title='Besaran dan Pengukuran' to='fisika/BesaranDanSatuan' />
        <ChapterBoxFisika title='Radiasi Benda Hitam' to='fisika/RadiasiBendaHitam' />
        <ChapterBoxFisika title='Relativitas Khusus' to='fisika/RelativitasKhusus' />
        <ChapterBoxFisika title='Kuantum' to='fisika/Kuantum' />
        <ChapterBoxFisika title='Inti' to='fisika/Inti' />
        <ChapterBoxFisika title='Magnet' to='fisika/Magnet' />
        <ChapterBoxFisika title='Optik' to='fisika/Optik' />
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

export default fisika;
