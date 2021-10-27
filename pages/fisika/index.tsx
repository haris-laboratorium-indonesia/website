import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, TitleBackHome, Topic } from '@/components/DesignSystem';
import { fisikaChapterData } from '../../data/Beranda';

export default function fisika() {
  const sectionStyle =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:-mx-1 xs:px-1 xs:py-1 xs:border-0 shadow xs:shadow-none';
  return (
    <Layout
      browserTitle='Fisika'
      description='Mempelajari kegunaan dari matematika pada fenomena-fenomena fisik di seluruh alam semesta.'
    >
      <TitleBackHome name='Fisika' />
      <div className='space-y-10 '>
        <div>
          <Topic name='Informasi Umum' />
          <div className={sectionStyle}>
            <ChapterBox title='Konstanta Fisika' to='/fisika/glosarium/fisika_konstanta' />
            <ChapterBox title='Variabel Fisika' to='/fisika/glosarium/fisika_variabel' />
            <ChapterBox title='Satuan SI' to='/fisika/glosarium/fisika_satuanSI' />
            <ChapterBox title='Animasi Fisika' to='/fisika/glosarium/animasi' />
            <ChapterBox title='Tokoh Fisika' to='/fisika/glosarium/tokoh_fisika' />
            <ChapterBox title='Flash Card Fisika' to='/fisika/glosarium/flash_card' />
            <ChapterBox title='Sejarah Fisika' to='/fisika/glosarium/sejarah_fisika' />
            <ChapterBox title='Mind Map Fisika' to='/fisika/glosarium/mindmap_fisika' />
            <ChapterBox title='Tabel Periodik' to='/fisika/glosarium/tabel_periodik' />
            <ChapterBox title='4 Fundamental Force' to='/fisika/glosarium/fundamental-force' />
          </div>
        </div>
        <div>
          <Topic name='Bab' />
          <div className={sectionStyle}>
            {fisikaChapterData.map(a => (
              <ChapterBox key={a.id} title={a.title} to={a.to} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
