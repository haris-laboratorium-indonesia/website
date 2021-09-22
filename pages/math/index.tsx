import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic } from '@/components/Materi';
import { matematikaChapterData } from 'data/Beranda';

export default function Matematika() {
  const sectionStyle =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:-mx-1 xs:px-1 xs:border-0 shadow-md xs:shadow-none';
  return (
    <Layout
      browserTitle='Math'
      description='Mempelajari bahasa alam semesta yang digunakan di seluruh dunia untuk hampir segala hal.'
    >
      <Title name='Math' />
      <div className='space-y-10 '>
        <div>
          <Topic name='General Information' />
          <div className={sectionStyle}>
            <ChapterBox title='Konstanta Matematika' to='/fisika/glosarium/fisika_konstanta' />
            <ChapterBox title='Variabel Matematika' to='/fisika/glosarium/fisika_variabel' />
            <ChapterBox title='Satuan SI' to='/fisika/glosarium/fisika_satuanSI' />
            <ChapterBox title='Animasi Matematika' to='/fisika/glosarium/animasi' />
            <ChapterBox title='Tokoh Matematika' to='/fisika/glosarium/tokoh_matematika' />
            <ChapterBox title='Flash Card Matematika' to='/fisika/glosarium/flash_card' />
            <ChapterBox title='Sejarah Matematika' to='/fisika/glosarium/sejarah_matematika' />
          </div>
        </div>

        <div>
          <Topic name='Chapters' />
          <div className={sectionStyle}>
            {matematikaChapterData.map(a => (
              <ChapterBox key={a.title} title={a.title} to={a.to} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
