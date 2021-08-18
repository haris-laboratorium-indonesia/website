import Link from 'next/link';
import Image from 'next/image';
import haris from '../../public/haris.jpg';
import Layout from '@/components/Layout';
import { RightArrow } from '@/Icons';

const ExternalLink = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      />
    </svg>
  );
};

const Title = ({ name }) => {
  return (
    <div className='mb-3 text-xl font-semibold text-center text-gray-700 sm:text-left sm:text-2xl mt-14'>
      {name}
    </div>
  );
};

const GoIn = ({ to, textColor, title }) => {
  return (
    <Link href={`${to}`}>
      <a
        className={` ${textColor} bg-gray-200 px-4 py-2 justify-between font-medium rounded-md  hover:bg-gray-300 flex `}
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
      className={`bg-gray-200 flex  font-medium hover:bg-gray-300 rounded-md px-4 py-2.5 sm:py-2 justify-between  ${textColor} `}
    >
      <div>{title}</div>
      <ExternalLink />
    </a>
  );
};

export default function aboutMe() {
  return (
    <Layout browserTitle='Harits Syah' description='HarisLab CEO'>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-4xl px-5 mx-auto my-10 sm:px-0 '>
          <Link href='/'>
            <a className='text-gray-500 hover:underline '>Back</a>
          </Link>

          <div className='flex items-center justify-center mt-10'>
            <Image src={haris} width={100} height={100} priority className='rounded-full' />
          </div>

          <div className='my-2 text-xl font-semibold text-center text-gray-700 sm:text-2xl'>
            Harits Syah
          </div>

          <div className='mb-10 text-lg text-center text-gray-700'>Founder & CEO, HarisLab</div>

          <Title name='Social Media & Contacts' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-4'>
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

          <Title name='Websites' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3 '>
            <GoOut
              to='https://www.aka-tradingindo.com'
              textColor='text-green-500'
              title='AKA Trading Indonesia'
            />
            <GoOut
              to='https://www.harislab.com'
              textColor='text-harislab'
              title='Haris Laboratory'
            />
          </div>

          <Title name='Mini Projects' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoIn title="Delba's Exp's" textColor='text-gray-700' to='/haris/delba' />
            <GoIn title='Framer Motion' textColor='text-pink-600' to='/haris/framer-motion' />
            <GoIn title='Number Game' textColor='text-gray-700' to='/haris/number-game' />
            <GoIn title='Supabase' textColor='text-[#24b47e]' to='/haris/supabase' />
            <GoIn title='Tailwind CSS' textColor='text-[#06B6D4]' to='/haris/tailwindcss' />
            <GoIn title='Browser Title' textColor='text-orange-500' to='/haris/browser-title' />
          </div>

          <Title name='Support Me' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
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

          <Title name='My Brain Food' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
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

          <Title name='Technology Stack' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
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
        </div>
      </div>
    </Layout>
  );
}
