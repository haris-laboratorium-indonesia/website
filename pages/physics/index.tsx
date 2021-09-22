import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, SubTopic, InternalLink } from '@/components/Materi';
import { fisikaChapterData } from '../../data/Beranda';

export default function fisika() {
  const yes =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:-mx-1 xs:px-1 xs:border-0 shadow xs:shadow-none';
  return (
    <Layout
      browserTitle='Physics'
      description='Mempelajari kegunaan dari matematika pada fenomena-fenomena fisik di seluruh alam semesta.'
    >
      <Title name='Physics' />
      <div className='space-y-10 '>
        <div>
          <Topic name='General Information' />
          <div className={yes}>
            <ChapterBox title='Konstanta Fisika' to='/physics/glosarium/fisika_konstanta' />
            <ChapterBox title='Variabel Fisika' to='/physics/glosarium/fisika_variabel' />
            <ChapterBox title='Satuan SI' to='/physics/glosarium/fisika_satuanSI' />
            <ChapterBox title='Animasi Fisika' to='/physics/glosarium/animasi' />
            <ChapterBox title='Tokoh Fisika' to='/physics/glosarium/tokoh_fisika' />
            <ChapterBox title='Flash Card Fisika' to='/physics/glosarium/flash_card' />
            <ChapterBox title='Sejarah Fisika' to='/physics/glosarium/sejarah_fisika' />
            <ChapterBox title='Mind Map Fisika' to='/physics/glosarium/mindmap_fisika' />
            <ChapterBox title='Tabel Periodik' to='/physics/glosarium/tabel_periodik' />
          </div>
        </div>
        <div>
          <Topic name='Chapters' />
          <div className={yes}>
            {fisikaChapterData.map(a => (
              <ChapterBox key={a.id} title={a.title} to={a.to} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
