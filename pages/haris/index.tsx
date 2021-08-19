import Link from 'next/link';
import Image from 'next/image';
import haris from '../../public/haris.jpg';
import Layout from '@/components/Layout';
import { RightArrow } from '@/Icons';
import { HiChevronLeft } from 'react-icons/hi';

const ArrowUpRight = () => {
  return (
    <svg
      className='text-gray-500'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      stroke-width='1.1'
      stroke-linecap='round'
      stroke-linejoin='round'
      fill='none'
      shape-rendering='geometricPrecision'
    >
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
};

const Topic = ({ name }) => {
  return (
    <div className='mb-3 text-2xl font-semibold text-left text-gray-700 sm:text-2xl mt-14'>
      {name}
    </div>
  );
};

const GoIn = ({ to, textColor, title }) => {
  return (
    <Link href={`${to}`}>
      <a
        className={` ${textColor} bg-gray-200 pl-4 pr-1.5 py-2.5 sm:py-2 justify-between font-medium rounded-md  hover:bg-gray-300 flex `}
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
      className={`bg-gray-200 flex  font-medium hover:bg-gray-300 rounded-md pl-4 pr-2.5 py-2.5 sm:py-2 justify-between `}
    >
      <div className={textColor}>{title}</div>
      <ArrowUpRight />
    </a>
  );
};

export default function aboutMe() {
  return (
    <Layout browserTitle='Harits Syah' description='HarisLab CEO'>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-5xl mx-auto my-10 '>
          <Link href='/#footer'>
            <a className='flex items-center text-gray-500 hover:underline'>
              <HiChevronLeft className='w-6 h-6' />
              <div>Back</div>
            </a>
          </Link>

          <div className='flex items-center justify-center mt-10'>
            <Image src={haris} width={100} height={100} priority className='rounded-full' />
          </div>

          <div className='my-2 text-xl font-semibold text-center text-gray-700 sm:text-2xl'>
            Harits Syah
          </div>

          <div className='mb-10 text-lg text-center text-gray-700'>Founder & CEO, HarisLab</div>

          <Topic name='Websites' />
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
            <GoIn title="Delba's Exp's" textColor='text-gray-700' to='/haris/delba' />
            <GoIn title='Framer Motion' textColor='text-pink-600' to='/haris/framer-motion' />
            <GoIn title='Number Game' textColor='text-gray-700' to='/haris/number-game' />
            <GoIn title='Supabase' textColor='text-[#24b47e]' to='/haris/supabase' />
            <GoIn title='Tailwind CSS' textColor='text-[#06B6D4]' to='/haris/tailwindcss' />
            <GoIn title='Browser Title' textColor='text-orange-500' to='/haris/browser-title' />
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

          <Topic name='Support Me' />
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
