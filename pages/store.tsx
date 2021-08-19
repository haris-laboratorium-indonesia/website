import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';

export default function store() {
  return (
    <Layout browserTitle='Store' description='Haris Lab Store'>
      <Title name='Store' />
      <SubTitle name='Tempat untuk belanja aksesoris Haris Laboratory' />
    </Layout>
  );
}
