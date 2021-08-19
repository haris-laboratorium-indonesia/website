import Layout from '@/components/Layout';
import { Title, SubTitle, Topic, SubTopic } from '@/components/Materi';
import { RightArrow } from '@/components/Icons';

import { UXData } from 'data/Design';

export default function Design() {
  return (
    <Layout browserTitle='Design System' description='Design System HarisLab'>
      <Title name='Design System' />
      <SubTitle name='Cara kami mendesain website ini agar informasi yang disampaikan mudah dipahami.' />

      <Topic name='Colors' />
      <div className='grid grid-cols-2 gap-5 p-5 border border-gray-400 rounded-lg sm:grid-cols-6'>
        {ColorsData.map(a => (
          <ColorsBox color={a.color} name={a.name} code={a.code} />
        ))}
      </div>

      <Topic name='Button' />
      <div className='grid grid-cols-1 gap-5 p-5 border border-gray-400 rounded-lg sm:grid-cols-5'>
        <div className='px-4 py-2 text-center text-white duration-200 rounded-md cursor-pointer bg-harislab hover:bg-opacity-80 '>
          Primary
        </div>
        <div className='px-4 py-2 text-center text-gray-700 duration-200 border border-gray-700 rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-500'>
          Secondary
        </div>
        <div className='flex items-center justify-between py-2 pl-4 pr-2 text-center text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300'>
          <div>Internal Link</div>
          <RightArrow color='' />
        </div>

        <div className='flex items-center justify-between py-2 pl-4 pr-2 text-center text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300'>
          <div>External Link</div>
          <ArrowUpRight />
        </div>
      </div>

      <Topic name='Typography' />
      <div className='flex flex-col space-y-5 border border-gray-400 rounded-lg'>
        <div className='grid grid-cols-1 gap-5 p-5 sm:grid-cols-6'>
          <a
            href='https://fonts.google.com/specimen/Inter'
            target='_blank'
            className='block py-2 text-center text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 font-inter'
          >
            Inter
          </a>
          <a
            href='https://fonts.google.com/specimen/Merriweather'
            target='_blank'
            className='block py-2 text-center text-gray-700 bg-gray-200 rounded-md text-tiny hover:bg-gray-300 font-mw'
          >
            Merriweather
          </a>
        </div>
        <div className='p-5'>
          <Title name='Title' />
          <SubTitle name='SubTitle' />
          <Topic name='Topic' />
          <SubTopic name='SubTopic' />
          <p className='text-gray-600'>
            Ini adalah contoh paragraf yang digunakan di HarisLab.Ini adalah contoh paragraf yang
            digunakan di HarisLab.Ini adalah contoh paragraf yang digunakan di HarisLab.Ini adalah
            contoh paragraf yang digunakan di HarisLab.Ini adalah contoh paragraf yang digunakan di
            HarisLab.Ini adalah contoh paragraf yang digunakan di HarisLab.Ini adalah contoh
            paragraf yang digunakan di HarisLab.
          </p>
        </div>
      </div>

      <Topic name='User Experience Principles' />
      <div className='flex flex-col p-5 border border-gray-400 rounded-lg'>
        {UXData.map(a => (
          <div key={a.title}>
            <SubTopic name={a.title} />
            <div className='mb-5 -mt-5 text-gray-500'>{a.description}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const ColorsData = [
  { color: 'bg-gray-800', name: 'Top Navigation', code: '#262626' },
  { color: 'bg-gray-700', name: 'Font', code: '#3F3F46' },
  { color: 'bg-harislab', name: 'Action', code: '#007AFF' },
  { color: 'bg-blue-400', name: 'UI Icons', code: '#60A5FA' },
  { color: 'bg-gray-300', name: 'BG Element (hover)', code: '#D4D4D8' },
  { color: 'bg-gray-200', name: 'BG Element', code: '#E5E5E5' },
  { color: 'bg-[#F5F5F7]', name: 'BG Main', code: '#F5F5F7' },
];

const ColorsBox = ({ color, name, code }) => {
  return (
    <div className='flex flex-col space-y-1 '>
      <div className={`w-24 h-24 rounded-md ${color}`}></div>
      <div className='text-sm font-medium text-gray-700'>{name}</div>
      <div className='text-sm text-gray-600'>{code}</div>
      <div className='text-sm text-gray-600'>{color}</div>
    </div>
  );
};

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
