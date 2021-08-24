import Layout from '@/components/Layout';
import { SubTitle, Title } from '@/components/Materi';
export default function animasi() {
  return (
    <Layout browserTitle='Animasi' description='Animasi - Haris Lab'>
      <Title name='Animasi' />
      <SubTitle name='Animasi matematika dan fisika yang bisa kamu kendalikan.' />
      <div className='flex items-center justify-center mx-auto h-72'>
        <div className='px-4 py-2 font-medium border border-blue-300 rounded-full bg-blue-50 text-harislab'>
          Coming soon !
        </div>
      </div>
    </Layout>
  );
}
