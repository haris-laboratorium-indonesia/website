import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, SubTopic } from '@/components/Materi';
import Link from 'next/link';
import { RightArrow } from '@/Icons';

const fisika = () => {
  return (
    <Layout browserTitle='Fisika' description='Materi Fisika SMA'>
      <Title name='Fisika' />

      <SubTitle name='Pelajari cara kerja engineering dan alam semesta melalui fisika.' />

      <Topic name='Glosarium Fisika' />
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBox title='Konstanta' to='fisika/fisika_konstanta' />
        <ChapterBox title='Variabel' to='fisika/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='fisika/fisika_satuanSI' />
      </div>

      <Topic name='Bab Fisika' />
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBox title='Fluida Statis' to='fisika/FluidaStatis' />
        <ChapterBox title='Fluida Dinamis' to='fisika/FluidaDinamis' />
        <ChapterBox title='Listrik Statis' to='fisika/ListrikStatis' />
        <ChapterBox title='Listrik Dinamis' to='fisika/ListrikDinamis' />
        <ChapterBox title='Gelombang Mekanik' to='fisika/GelombangMekanik' />
        <ChapterBox title='Gelombang Bunyi' to='fisika/GelombangBunyi' />
        <ChapterBox title='Gelombang Elektromagnetik' to='fisika/GelombangElektromagnetik' />
        <ChapterBox title='Kinematika' to='fisika/Kinematika' />
        <ChapterBox title='Dinamika' to='fisika/Dinamika' />
        <ChapterBox title='Kesetimbangan' to='fisika/Kesetimbangan' />
        <ChapterBox title='Termodinamika' to='fisika/Termodinamika' />
        <ChapterBox title='Besaran dan Pengukuran' to='fisika/BesaranDanSatuan' />
        <ChapterBox title='Radiasi Benda Hitam' to='fisika/RadiasiBendaHitam' />
        <ChapterBox title='Relativitas Khusus' to='fisika/RelativitasKhusus' />
        <ChapterBox title='Kuantum' to='fisika/Kuantum' />
        <ChapterBox title='Inti' to='fisika/Inti' />
        <ChapterBox title='Magnet' to='fisika/Magnet' />
        <ChapterBox title='Optik' to='fisika/Optik' />
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
