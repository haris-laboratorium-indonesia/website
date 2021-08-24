import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, SubTopic } from '@/components/Materi';
import { fisikaChapterData } from '../../data/Beranda';

export default function fisika() {
  return (
    <Layout browserTitle='Fisika' description='Materi Fisika SMA'>
      <Title name='Fisika' />
      <SubTitle name='Ilmu tentang pergerakan benda fisik dan efeknya terhadap benda lainnya.' />

      <Topic name='Glosarium Fisika' />
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBox title='Konstanta' to='fisika/fisika_konstanta' />
        <ChapterBox title='Variabel' to='fisika/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='fisika/fisika_satuanSI' />
      </section>

      <Topic name='Bab Fisika' />
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        {fisikaChapterData.map(a => (
          <ChapterBox key={a.title} title={a.title} to={a.to} />
        ))}
      </section>
    </Layout>
  );
}
