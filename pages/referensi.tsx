import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, InternalLink } from '@/components/Materi';
import Link from 'next/link';

export default function Referensi() {
  return (
    <Layout description='Referensi Haris Lab' browserTitle='Referensi'>
      <Title name='Referensi' />
      <SubTitle name='Sumber informasi metematika dan fisika.' />

      <section className='grid items-center max-w-xl grid-cols-1 gap-5 mx-auto mt-20 text-center text-gray-700 sm:gap-10 sm:grid-cols-2 place-items-start sm:text-left'>
        <div>
          <div className='text-xl font-semibold '>Matematika</div>
          <div className=''>
            Ilmu tentang angka, abstraksi, kalkulus, geometri, peluang dan cara berfikir.
          </div>
          <Link href='/matematika'>
            <a className='flex items-center py-2.5 text-harislab hover:underline cursor-pointer space-x-2 text-lg justify-center sm:justify-start'>
              Referensi Matematika
              <RightArrow />
            </a>
          </Link>
        </div>
        <div>
          <div className='text-xl font-semibold '>Fisika</div>
          <div className=''>
            Ilmu tentang pergerakan benda fisik dan efeknya terhadap benda lainnya.
          </div>
          <Link href='/fisika'>
            <a className='flex items-center py-2.5 text-harislab hover:underline cursor-pointer space-x-2 text-lg justify-center sm:justify-start'>
              Referensi Fisika
              <RightArrow />
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
