import Link from 'next/link';
import Image from 'next/image';
import haris from '../public/haris.jpg';
import Layout from '@/components/Layout';
import { RightArrow } from '@/Icons';
import { HiChevronLeft } from 'react-icons/hi';
import { Title, SubTitle, Topic, ExternalLink, InternalLink } from '@/components/Materi';

export default function Tentang() {
  return (
    <Layout browserTitle='Tentang' description='Tentang Haris Laboratory'>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-5xl mx-auto my-5 sm:mt-8 '>
          <Title name='Tentang' />

          <Topic name='What is Haris Laboratory ?' />
          <p className='indent-sm'>
            Haris Laboratory (HarisLab) adalah tempat untuk referensi, kalkulasi, animasi, dan
            bimbel matematika dan fisika dalam platform web dan mobile. Tujuan kami untuk membuat
            suatu referensi matematika dan fisika secaara komperhensif dan dinamis terhadap waktu.
            Kami ingin mengurangi waktu siswa mencari materi pelajaran sehingga bisa meluangkan
            lebih banyak waktu untuk memahami pelajaran itu. Untuk saat ini HarisLab hanya
            menyediakan materi matematika dan fisika, kedepannya mungkin saja akan ditambahkan
            materi kimia bahkan sejarah dan semacamnya. Sekarang, HarisLab hanya dimaintence oleh
            Harits Syah seorang diri. Alasan mengapa materi yang ada hanya matematika dan fisika,
            karena itu keahlian saya. Untuk melihat sistem desain dari website Haris Laboratory
            kalian bisa ke{' '}
            <Link href='/desain'>
              <a className=' hover:underline text-harislab'>sini</a>
            </Link>
            .
          </p>

          <Topic name='Person' />
          <div className='grid w-2/3 grid-cols-1 gap-4 xs:w-full xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
            <section className='p-4 duration-200 border border-gray-400 rounded-lg'>
              <div className='flex items-center justify-center my-8'>
                <Image src={haris} width={100} height={100} priority className='rounded-full' />
              </div>
              <div className='text-xl font-semibold text-center text-gray-700 '>Harits Syah</div>
              <div className='text-center text-gray-700 '>Founder & CEO</div>
            </section>
          </div>

          <section className='grid grid-cols-1 gap-0 sm:gap-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            <div>
              <Topic name='Websites' />
              <div className='flex flex-col space-y-2'>
                <ExternalLink to='https://www.aka-tradingindo.com' name='AKA Trading Indonesia' />
                <ExternalLink to='https://www.harislab.com' name='Haris Laboratory' />
              </div>
            </div>

            <div>
              <Topic name='Contacts' />
              <div className='flex flex-col space-y-2'>
                <ExternalLink to='https://www.twitter.com/haritssr' name='Twitter' />
                <ExternalLink to='https://www.github.com/haritssr' name='Github' />
                <ExternalLink to='mailto:harislaboratory@gmail.com' name='Gmail' />
                <ExternalLink to='tel:0895331103401' name='WhatsApp' />
              </div>
            </div>

            <div>
              <Topic name='Support Us' />
              <div className='flex flex-col space-y-2'>
                <ExternalLink name='Saweria' to='https://www.saweria.co/harislab' />
                <ExternalLink name='Trakteer' to='https://trakteer.id/harits-syah/tip' />
                <ExternalLink name='Nih Buat Jajan' to='https://www.nihbuatjajan.com/harislab' />
              </div>
            </div>

            <div>
              <Topic name='Design Inspiration' />
              <div className='flex flex-col space-y-2'>
                <ExternalLink name='Apple Design' to='https://developer.apple.com/videos/design/' />
                <ExternalLink
                  name='Human Design Interface'
                  to='https://developer.apple.com/design/human-interface-guidelines/'
                />

                <ExternalLink name='NNGroup' to='https://nngroup.com' />
                <ExternalLink name='Laws of UX' to='https://lawsofux.com' />
                <ExternalLink
                  name='Adobe XD / IA'
                  to='https://xd.adobe.com/ideas/process/information-architecture/'
                />
              </div>
            </div>

            <div>
              <Topic name='Mini Projects' />
              <div className='flex flex-col space-y-2' id='miniProject'>
                <InternalLink name="Delba's Experiments" to='/tentang/delba' />
                <InternalLink name='Number Game' to='/tentang/number-game' />
                <InternalLink name='Browser Title' to='/tentang/browser-title' />
                <ExternalLink
                  name='Framer Motion'
                  to='https://www.fremermotion-harislab.vercel.app-motion'
                />
                <ExternalLink name='Firebase' to='https://www.firebase-harislab.vercel.app' />
                <ExternalLink name='Supabase' to='https://www.supabase-harislab.vercel.app' />
                <ExternalLink name='NextAuth' to='https://www.nextauth-harislab.vercel.app' />
                <ExternalLink
                  name='Tailwind CSS'
                  to='https://www.tailwindcss-harislab.vercel.app'
                />
              </div>
            </div>

            <div>
              <Topic name='Technology' />
              <div className='flex flex-col space-y-2'>
                <ExternalLink name='html' to='https://developer.mozilla.org/en-US/docs/Web/HTML' />
                <ExternalLink name='css' to='https://developer.mozilla.org/en-US/docs/Web/CSS' />
                <ExternalLink
                  name='javascript'
                  to='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                />
                <ExternalLink name='react' to='https://reactjs.org/' />
                <ExternalLink name='swr' to='https://swr.vercel.app/' />
                <ExternalLink name='nextjs' to='https://nextjs.org/' />
                <ExternalLink name='vercel' to='https://vercel.com/' />
                <ExternalLink name='framer motion' to='https://www.framer.com/motion/' />
                <ExternalLink name='supabase' to='https://supabase.io' />
                <ExternalLink name='firebase' to='https://firebase.google.com' />
                <ExternalLink name='tailwindcss' to='https://tailwindcss.com' />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

const ArrowUpRight = () => {
  return (
    <svg
      className='text-gray-500'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.1'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
    >
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
};

const GoIn = ({ to, textColor, title }) => {
  return (
    <Link href={`${to}`}>
      <a
        className={` ${textColor} border border-gray-400 pl-4 pr-1.5 py-2.5 sm:py-2 justify-between font-medium rounded-md  hover:bg-gray-200 flex `}
      >
        <div>{title}</div>
        <RightArrow color='' />
      </a>
    </Link>
  );
};

const GoOut = ({ to, textColor, title }) => {
  return (
    <a
      href={`${to}`}
      target='_blank'
      className={`border border-gray-400 flex  font-medium hover:bg-gray-200 rounded-md pl-4 pr-2.5 py-2.5 sm:py-2 justify-between `}
    >
      <div className={textColor}>{title}</div>
      <ArrowUpRight />
    </a>
  );
};
