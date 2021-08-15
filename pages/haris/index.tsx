import Link from 'next/link';
import Image from 'next/image';
import haris from '../../public/haris.jpg';
import Layout from '@/components/Layout';

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

          <div className='my-5 text-xl font-semibold text-center text-gray-700 sm:text-2xl'>
            Harits Syah
          </div>

          <div className='mb-10 text-lg text-center text-gray-700'>Founder & CEO, HarisLab</div>

          <Title name='Social Media & Contacts' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoOut to='https://www.twitter.com/haritssr' textColor='text-[#1DA1F2]'>
              twitter.com/haritssr
            </GoOut>
            <GoOut to='https://www.github.com/haritssr' textColor='text-gray-700'>
              github.com/haritssr
            </GoOut>
            <div className='text-[#BB001B] shadow-md sm:shadow-lg hover:shadow-none rounded-md px-4 py-2 hover:translate-y-1 duration-200 text-center bg-white font-medium  hover:bg-gray-200 '>
              haritssr@gmail.com
            </div>
            <div className=' shadow-md sm:shadow-lg hover:shadow-none rounded-md px-4 py-2 hover:translate-y-1 duration-200 text-center bg-white font-medium hover:bg-gray-200  text-[#128C7E]'>
              wa/0895331102401
            </div>
          </div>

          <Title name='Websites' />
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-4 '>
            <GoOut to='https://www.aka-tradingindo.com' textColor='text-lime-600'>
              AKA Trading Indonesia
            </GoOut>
            <GoOut to='https://www.harislab.com' textColor='text-harislab'>
              Haris Laboratory
            </GoOut>
          </div>

          <Title name='Mini Projects' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoIn textColor='text-gray-700' to='/haris/delba'>
              Delba's Experiments
            </GoIn>
            <GoIn textColor='text-pink-600' to='/haris/framer-motion'>
              Framer Motion
            </GoIn>
            <GoIn textColor='text-gray-700' to='/haris/number-game'>
              Number Game
            </GoIn>
            <GoIn textColor='text-[#24b47e]' to='/haris/supabase'>
              Supabase
            </GoIn>
            <GoIn textColor='text-[#06B6D4]' to='/haris/tailwindcss'>
              Tailwind CSS
            </GoIn>
            <GoIn textColor='text-yellow-500' to='/haris/browser-title'>
              Browser Title
            </GoIn>
          </div>

          <Title name='Support Me' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoOut to='https://www.saweria.co/harislab' textColor='text-gray-800'>
              Saweria
            </GoOut>
            <GoOut to='https://trakteer.id/harits-syah/tip' textColor='text-gray-800'>
              Trakteer
            </GoOut>
            <GoOut to='https://www.nihbuatjajan.com/harislab' textColor='text-gray-800'>
              Nih Buat Jajan
            </GoOut>
          </div>

          <Title name='My Brain Food' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoOut to='https://developer.apple.com/videos/all-videos/' textColor='text-gray-800'>
              Apple Developer
            </GoOut>
            <GoOut to='https://nngroup.com' textColor='text-red-500'>
              NNGroup
            </GoOut>
            <GoOut to='https://https://lawsofux.com/' textColor='text-amber-500'>
              Laws of UX
            </GoOut>
            <GoOut
              to='https://xd.adobe.com/ideas/process/information-architecture/'
              textColor='text-fuschsia-500'
            >
              Adobe XD / IA
            </GoOut>
          </div>

          <Title name='Technology Stack' />
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
            <GoOut
              to='https://xd.adobe.com/ideas/process/information-architecture/'
              textColor='text-fuschsia-500'
            >
              html, css, javascript, react, swr, nextjs, vercel, framer-motion, supabase, firebase,
              tailwindcss,
            </GoOut>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Title = ({ name }) => {
  return (
    <div className='mb-3 text-xl font-semibold text-center text-gray-700 sm:text-left sm:text-2xl mt-14'>
      {name}
    </div>
  );
};
const GoIn = ({ to, textColor, children }) => {
  return (
    <Link href={`${to}`}>
      <a
        className={` ${textColor} bg-white px-4 py-2 text-center font-medium duration-200  rounded-md shadow-md sm:shadow-lg hover:translate-y-1 hover:shadow-none hover:bg-gray-200`}
      >
        {children}
      </a>
    </Link>
  );
};

const GoOut = ({ to, textColor, children }) => {
  return (
    <a
      href={`${to}`}
      target='_blank'
      className={` shadow-md sm:shadow-lg hover:shadow-none font-medium hover:bg-gray-200 rounded-md px-4 py-2.5 sm:py-2 hover:translate-y-1 duration-200 text-center  ${textColor} bg-white`}
    >
      {children}
    </a>
  );
};
