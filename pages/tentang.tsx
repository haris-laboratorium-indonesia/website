import Link from 'next/link';
import Image from 'next/image';
import haris from '../public/haris.jpg';
import Layout from '@/components/Layout';
import { RightArrow } from '@/Icons';
import { HiChevronLeft } from 'react-icons/hi';
import { Title, SubTitle, Topic } from '@/components/Materi';

export default function aboutMe() {
  return (
    <Layout browserTitle='Tentang' description='Tentang Haris Laboratory'>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-5xl mx-auto my-10 '>
          <Link href='/'>
            <a className='flex items-center text-gray-500 hover:underline'>
              <HiChevronLeft className='w-6 h-6' />
              <div>Back</div>
            </a>
          </Link>

          <Title name='Tentang' />
          <SubTitle name='Haris Laboratory' />

          <Topic name='About Haris Laboratory' />
          <div>
            <p>
              Haris Laboratory (HarisLab) adalah tempat untuk referensi, kalkulasi, animasi, dan
              bimbel matematika dan fisika dalam platform web dan mobile. Tujuan kami untuk membuat
              suatu referensi matematika dan fisika secaara komperhensif dan dinamis terhadap waktu.
              Kami ingin mengurangi waktu siswa mencari materi pelajaran sehingga bisa meluangkan
              lebih banyak waktu untuk memahami pelajaran itu. Untuk saat ini HarisLab hanya
              menyediakan materi matematika dan fisika, kedepannya mungkin saja akan ditambahkan
              materi kimia bahkan sejarah dan semacamnya. Sekarang, HarisLab hanya dimaintence oleh
              Harits Syah seorang diri. Alasan mengapa materi yang ada hanya matematika dan fisika,
              karena itu keahlian saya.
            </p>
          </div>

          <Topic name='Person' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-5'>
            <section className='p-4 duration-200 border border-gray-400 rounded-lg'>
              <div className='flex items-center justify-center my-8'>
                <Image src={haris} width={100} height={100} priority className='rounded-full' />
              </div>
              <div className='text-xl font-semibold text-center text-gray-700 '>Harits Syah</div>
              <div className='text-center text-gray-700 '>Founder & CEO</div>
            </section>
          </div>

          <Topic name='Websites that I created' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <GoOut
              to='https://www.aka-tradingindo.com'
              textColor='text-emerald-500'
              title='AKA Trading Indonesia'
            />
            <GoOut
              to='https://www.harislab.com'
              textColor='text-harislab'
              title='Haris Laboratory'
            />
          </div>

          <Topic name='Social Media & Contacts' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <GoOut
              to='https://www.twitter.com/haritssr'
              textColor='text-[#1DA1F2]'
              title='twitter.com/haritssr'
            />
            <GoOut
              to='https://www.github.com/haritssr'
              textColor='text-gray-700'
              title='github.com/haritssr'
            />
            <GoOut
              to='mailto:haritssr@gmail.com'
              textColor='text-[#BB001B]'
              title='haritssr@gmail.com'
            />
            <GoOut to='tel:0895331103401' textColor='text-[#128C7E]' title='WhatsApp' />
          </div>

          <Topic name='Mini Projects' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4' id='miniProject'>
            <GoIn title="Delba's Experiments" textColor='text-gray-700' to='/tentang/delba' />
            <GoIn title='Number Game' textColor='text-gray-700' to='/tentang/number-game' />
            <GoIn title='Browser Title' textColor='text-orange-500' to='/tentang/browser-title' />
            <GoOut
              title='Framer Motion'
              textColor='text-pink-600'
              to='https://www.fremermotion-harislab.vercel.app-motion'
            />
            <GoOut
              title='Firebase'
              textColor='text-yellow-500'
              to='https://www.firebase-harislab.vercel.app'
            />

            <GoOut
              title='Supabase'
              textColor='text-[#24b47e]'
              to='https://www.supabase-harislab.vercel.app'
            />
            <GoOut
              title='NextAuth'
              textColor='text-indigo-600'
              to='https://www.nextauth-harislab.vercel.app'
            />
            <GoOut
              title='Tailwind CSS'
              textColor='text-[#06B6D4]'
              to='https://www.tailwindcss-harislab.vercel.app'
            />
          </div>

          <Topic name='My Brain Food' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <GoOut
              title='Apple Developer'
              to='https://developer.apple.com/videos/all-videos/'
              textColor='text-gray-800'
            />
            <GoOut title='NNGroup' to='https://nngroup.com' textColor='text-red-500' />
            <GoOut
              title='Laws of UX'
              to='https://https://lawsofux.com/'
              textColor='text-amber-500'
            />
            <GoOut
              title='Adobe XD / IA'
              to='https://xd.adobe.com/ideas/process/information-architecture/'
              textColor='text-fuschsia-500'
            />
          </div>

          <Topic name='Technology Stack' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <GoOut
              title='html'
              to='https://developer.mozilla.org/en-US/docs/Web/HTML'
              textColor='text-orange-600'
            />
            <GoOut
              title='css'
              to='https://developer.mozilla.org/en-US/docs/Web/CSS'
              textColor='text-harislab'
            />
            <GoOut
              title='javascript'
              to='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              textColor='text-yellow-500'
            />
            <GoOut title='react' to='https://reactjs.org/' textColor='text-sky-500' />
            <GoOut title='swr' to='https://swr.vercel.app/' textColor='text-gray-700' />
            <GoOut title='nextjs' to='https://nextjs.org/' textColor='text-gray-700' />
            <GoOut title='vercel' to='https://vercel.com/' textColor='text-gray-700' />
            <GoOut
              title='framer motion'
              to='https://www.framer.com/motion/'
              textColor='text-pink-600'
            />
            <GoOut title='supabase' to='https://supabase.io' textColor='text-emerald-600' />
            <GoOut title='firebase' to='https://firebase.google.com' textColor='text-orange-500' />
            <GoOut title='tailwindcss' to='https://tailwindcss.com' textColor='text-[#06B6D4]' />
          </div>

          <Topic name='Support Us' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <GoOut title='Saweria' to='https://www.saweria.co/harislab' textColor='text-gray-800' />
            <GoOut
              title='Trakteer'
              to='https://trakteer.id/harits-syah/tip'
              textColor='text-gray-800'
            />
            <GoOut
              title='Nih Buat Jajan'
              to='https://www.nihbuatjajan.com/harislab'
              textColor='text-gray-700'
            />
          </div>
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
