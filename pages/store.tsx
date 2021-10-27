import Layout from '@/components/Layout';
import { Title, SubTitle, Topic } from '@/components/DesignSystem';
import StoreBook from '@/components/StoreBook';
import StoreCard from '@/components/StoreCard';
import StoreCloth from '@/components/StoreCloth';
export default function Store() {
  return (
    <Layout
      browserTitle='Store'
      description='Membeli aksesoris, alat, kartu, buku, voucher, dan merchandise Haris Laboratory.'
    >
      <Title name='Store' />

      <div className='space-y-10'>
        <div>
          <Topic name='Book' />
          <StoreBook />
        </div>
        <div>
          <Topic name='Cloth' />
          <StoreCloth />
        </div>
        <div>
          <Topic name='Card' />
          <StoreCard />
        </div>
      </div>
    </Layout>
  );
}
