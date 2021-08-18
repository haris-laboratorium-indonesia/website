import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';
import { RightArrow } from '@/components/Icons';

export default function Design() {
  return (
    <Layout browserTitle='Design System' description='Design System HarisLab'>
      <Title name='Design System' />
      <SubTitle name='Cara kami mendesain website ini agar informasi yang disampaikan mudah dipahami.' />

      <Topic name='Colors' />
      <div className='grid grid-cols-2 gap-5 p-5 bg-white rounded-lg shadow-lg sm:grid-cols-6'>
        {ColorsData.map(a => (
          <ColorsBox color={a.color} name={a.name} code={a.code} />
        ))}
      </div>

      <Topic name='Button' />
      <div className='grid grid-cols-2 gap-5 p-5 bg-white rounded-lg shadow-lg sm:grid-cols-5'>
        <div className='px-4 py-2 text-center text-white duration-200 rounded-md cursor-pointer bg-harislab hover:bg-opacity-80 '>
          Primary
        </div>
        <div className='px-4 py-2 text-center text-gray-700 duration-200 bg-white border border-gray-700 rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-500'>
          Secondary
        </div>
        <div className='flex items-center justify-between px-3 py-2 text-center text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300'>
          <div>Internal Link</div>
          <RightArrow color='' />
        </div>

        <div className='flex items-center justify-between px-3 py-2 text-center text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300'>
          <div>External Link</div>
          <ExternalLink />
        </div>
      </div>

      <Topic name='Font' />
      <div className='grid grid-cols-2 gap-5 p-5 bg-white rounded-lg shadow-lg sm:grid-cols-6'>
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

const Topic = ({ name }) => {
  return <div className='mt-10 mb-3 text-xl font-semibold text-gray-700'>{name}</div>;
};

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
