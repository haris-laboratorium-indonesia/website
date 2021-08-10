import Link from 'next/link';
import Image from 'next/image';
import haris from '../public/haris.jpg';

const Title = ({ name }) => {
  return (
    <div className='mb-3 text-xl font-semibold text-center text-gray-800 sm:text-left sm:text-2xl mt-14'>
      {name}
    </div>
  );
};
const GoIn = ({ to, children }) => {
  return (
    <Link href={`${to}`}>
      <a className='px-4 py-2 text-center bg-white rounded-md text-gray-800 shadow-md hover:-translate-y-0.5 duration-200 hover:shadow-lg '>
        {children}
      </a>
    </Link>
  );
};

const GoOut = ({ to, bg, textColor, children }) => {
  return (
    <a
      href={`${to}`}
      target='_blank'
      className={`${bg} shadow-md hover:shadow-lg rounded-md px-4 py-2.5 sm:py-2 hover:-translate-y-0.5 duration-200 text-center  ${textColor}`}
    >
      {children}
    </a>
  );
};

export default function aboutMe() {
  return (
    <div className='bg-[#F5F5F7] min-h-screen'>
      <div className='w-full max-w-4xl px-5 mx-auto my-10 '>
        <Link href='/'>
          <a className='text-gray-500 rounded-md hover:underline '>Back</a>
        </Link>
        {/* <GoIn to='/'>Back</GoIn> */}

        <div className='flex items-center justify-center my-10'>
          <Image src={haris} width={100} height={100} priority className='rounded-full' />
        </div>

        <Title name='Social Media & Contacts' />
        <div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-4'>
          <GoOut to='https://www.twitter.com/haritssr' bg='bg-[#1DA1F2]' textColor='text-white'>
            twitter.com/haritssr
          </GoOut>
          <GoOut to='https://www.github.com/haritssr' bg='bg-[#211F1F]' textColor='text-white'>
            github.com/haritssr
          </GoOut>
          <div className='bg-[#BB001B] shadow-md hover:shadow-lg rounded-md px-4 py-2 hover:-translate-y-0.5 duration-200 text-center  text-white'>
            haritssr@gmail.com
          </div>
          <div className='bg-[#128C7E] shadow-md hover:shadow-lg rounded-md px-4 py-2 hover:-translate-y-0.5 duration-200 text-center  text-white'>
            wa/0895331102401
          </div>
        </div>

        <Title name='Websites' />
        <div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-4 '>
          <GoOut to='https://www.harislab.com' bg='bg-white' textColor='text-gray-800'>
            Haris Laboratory
          </GoOut>
          <GoOut to='https://www.aka-tradingindo.com' bg='bg-white' textColor='text-gray-800'>
            AKA Trading Indonesia
          </GoOut>
        </div>

        <Title name='Mini Projects' />
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-4'>
          <GoIn to='/delba'>Delba's Experiments</GoIn>
          <GoIn to='/FramerMotion'>Framer Motion</GoIn>
          <GoIn to='/NumberGame'>Number Game</GoIn>
        </div>

        <Title name='Support Me' />
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-4'>
          <GoOut to='https://www.saweria.co/harislab' bg='bg-white' textColor='text-gray-800'>
            Saweria
          </GoOut>
          <GoOut to='https://trakteer.id/harits-syah/tip' bg='bg-white' textColor='text-gray-800'>
            Trakteer
          </GoOut>
          <GoOut to='https://www.nihbuatjajan.com/harislab' bg='bg-white' textColor='text-gray-800'>
            Nih Buat Jajan
          </GoOut>
        </div>

        <Title name='My Brain Food' />
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-4'>
          <GoOut
            to='https://developer.apple.com/videos/all-videos/'
            bg='bg-gray-800'
            textColor='text-white'
          >
            Apple Developer
          </GoOut>
          <GoOut
            to='https://developer.apple.com/videos/all-videos/'
            bg='bg-red-500'
            textColor='text-white'
          >
            NNGroup
          </GoOut>
        </div>
      </div>
    </div>
  );
}
