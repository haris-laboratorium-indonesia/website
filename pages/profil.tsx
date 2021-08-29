import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';

export default function Profil() {
  return (
    <Layout browserTitle='Profil' description='Profil Kamu'>
      <Title name='Profil' />
      <div className='w-full p-4 mx-auto rounded-lg shadow-lg sm:w-1/3'>
        <div>Gambar</div>
        <div>Harits Syah</div>
        <div>Status : Member premium</div>
      </div>
    </Layout>
  );
}
