import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';
//Box
//data biaya

export default function Biaya() {
  const title = 'text-gray-500 font-semibold text-2xl mb-5';
  return (
    <Layout description='y' browserTitle='Biaya'>
      <Title name='Biaya' />

      <div className='mb-5 -mt-5 text-center'>Tidak ada yang sebaik dan semurah ini.</div>

      <div className='grid max-w-4xl grid-cols-1 gap-5 mx-auto mb-10 sm:grid-cols-3'>
        {data.map(a => (
          <Box title={a.name} price={a.price} desc={a.service} />
        ))}
      </div>

      <div className={title}>
        <span className='text-gray-800'>Akses fitur advance. </span>
        Matematika, fisika, kalkulator, dan kartu.
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div className='p-5 space-y-5 duration-300 ease-in-out bg-white rounded-md shadow-md hover:shadow-lg hover:scale-101 '>
          <div>Nama paket</div>
          <div className='w-1/3 mb-5 text-xl font-bold text-gray-800 sm:text-4xl inside-block'>
            FREE
          </div>
          <div>
            <div>Fitur :</div>
            <ul className='list-disc list-inside'>
              <li>baca materi matematika dan fisika</li>
              <li>tanpa iklan</li>
              <li>baca materi matematika dan fisika</li>
              <li>tanpa iklan</li>
            </ul>
          </div>
        </div>
        <div className='p-5 space-y-5 duration-300 ease-in-out bg-white rounded-md shadow-md hover:shadow-lg hover:scale-101 '>
          <div>Nama paket</div>
          <div className='w-1/3 mb-5 text-xl font-bold sm:text-4xl inside-block text-harislab'>
            PREMIUM
          </div>
          <div>
            <div>Fitur :</div>
            <ul className='list-disc list-inside'>
              <li>baca materi matematika dan fisika</li>
              <li>tanpa iklan</li>
              <li>baca materi matematika dan fisika</li>
              <li>tanpa iklan</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Box = ({ title, price, desc }) => {
  return (
    <div className='p-4 duration-200 bg-white rounded shadow hover:shadow-lg hover:scale-101'>
      <div>{title}</div>
      <div>{price}</div>
      <div>{desc}</div>
    </div>
  );
};

const data = [
  {
    name: 'Free',
    price: 0,
    service: ['asdf', 'asfd', 'asf'],
  },
  {
    name: 'Free',
    price: 0,
    service: ['asdf', 'asfd', 'asf'],
  },
  {
    name: 'Free',
    price: 0,
    service: ['asdf', 'asfd', 'asf'],
  },
];
