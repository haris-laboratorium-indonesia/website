import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, InternalLink } from '@/components/Materi';

export default function Referensi() {
  return (
    <Layout description='Referensi Haris Lab' browserTitle='Referensi'>
      <Title name='Referensi' />
      <section className='grid items-center w-full grid-cols-1 gap-10 mt-20 text-gray-700 sm:w-1/2 sm:grid-cols-2 place-items-start '>
        <div>
          <div className='text-xl font-semibold '>Matematika</div>
          <div className=''>
            Ilmu tentang angka, abstraksi, kalkulus, geometri, peluang dan cara berfikir.
          </div>
          <InternalLink name='Matematika' to='/matematika' />
        </div>
        <div>
          <div className='text-xl font-semibold '>Fisika</div>
          <div className=''>
            Ilmu tentang pergerakan benda fisik dan efeknya terhadap benda lainnya.
          </div>
          <InternalLink name='Fisika' to='/fisika' />
        </div>
      </section>
    </Layout>
  );
}
