import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic } from '@/components/Materi';
import { matematikaChapterData } from 'data/Beranda';

export default function Matematika() {
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />
      <SubTitle name='Ilmu tentang angka, abstarksi, geometri, peluang dan cara berfikir.' />

      <Topic name='Glosarium Matematika' />
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <ChapterBox title='Konstanta' to='fisika/fisika_konstanta' />
        <ChapterBox title='Variabel' to='fisika/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='fisika/fisika_satuanSI' />
      </section>

      <Topic name='Bab Matematika' />
      <section className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        {matematikaChapterData.map(a => (
          <ChapterBox key={a.title} title={a.title} to={a.to} />
        ))}
      </section>
    </Layout>
  );
}
