import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, SubTopic, InternalLink } from '@/components/Materi';
import { fisikaChapterData } from '../../data/Beranda';

export default function fisika() {
  const yes =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:-mx-1 xs:p-1 xs:border-0 shadow xs:shadow-none';
  return (
    <Layout browserTitle='Fisika' description='Materi Fisika SMA'>
      <Title name='Fisika' />

      <Topic name='Informasi umum' />
      <div className='mb-2 -mt-1 text-xl font-semibold leading-6 text-gray-400'>
        Informasi dan fakta-fakta umum pendukung.
      </div>
      <div className={yes}>
        <ChapterBox title='Konstanta Fisika' to='/fisika/glosarium/fisika_konstanta' />
        <ChapterBox title='Variabel Fisika' to='/fisika/glosarium/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='/fisika/glosarium/fisika_satuanSI' />
        <ChapterBox title='Animasi Fisika' to='/fisika/glosarium/animasi' />
        <ChapterBox title='Tokoh Fisika' to='/fisika/glosarium/tokoh_fisika' />
        <ChapterBox title='Flash Card Fisika' to='/fisika/glosarium/flash_card' />
      </div>

      <Topic name='Chapter' />
      <div className='mb-2 -mt-2 text-xl font-semibold text-gray-400 '>
        Bab fisika SD sampai SMA.
      </div>
      <div className={yes}>
        {fisikaChapterData.map(a => (
          <ChapterBox key={a.id} title={a.title} to={a.to} />
        ))}
      </div>
    </Layout>
  );
}
