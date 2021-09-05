import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic } from '@/components/Materi';
import { matematikaChapterData } from 'data/Beranda';

export default function Matematika() {
  const sectionStyle =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:-mx-1 xs:p-1 xs:border-0 shadow-md xs:shadow-none';
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />

      <Topic name='Informasi umum' />
      <div className='mb-2 -mt-1 text-xl font-semibold leading-6 text-gray-400 '>
        Informasi dan fakta-fakta umum pendukung.
      </div>
      <div className={sectionStyle}>
        <ChapterBox title='Konstanta Matematika' to='/fisika/glosarium/fisika_konstanta' />
        <ChapterBox title='Variabel Matematika' to='/fisika/glosarium/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='/fisika/glosarium/fisika_satuanSI' />
        <ChapterBox title='Animasi Matematika' to='/fisika/glosarium/animasi' />
        <ChapterBox title='Tokoh Matematika' to='/fisika/glosarium/tokoh_matematika' />
        <ChapterBox title='Flash Card Matematika' to='/fisika/glosarium/flash_card' />
      </div>

      <Topic name='Chapter' />
      <div className='mb-2 -mt-2 text-xl font-semibold text-gray-400 '>
        Bab matematika SD sampai SMA.
      </div>
      <div className={sectionStyle}>
        {matematikaChapterData.map(a => (
          <ChapterBox key={a.title} title={a.title} to={a.to} />
        ))}
      </div>
    </Layout>
  );
}
