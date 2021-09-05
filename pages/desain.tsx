import Layout from '@/components/Layout';
import {
  Title,
  SubTitle,
  Topic,
  SubTopic,
  ButtonPrimary,
  ButtonSecondary,
  InternalLink,
  ExternalLink,
  ButtonTertiary,
} from '@/components/Materi';
import { UXData, ColorsData } from 'data/Design';
import Inspirasi from '@/components/Inspirasi';
import Link from 'next/link';
import { ColorsBox } from '@/components/ColorBox';
//ColorsBox
//ArrowUpRight

export default function Desain() {
  return (
    <Layout browserTitle='Sistem Desain' description='Sistem Desain HarisLab'>
      <Title name='Desain' />

      <Topic name='Colors' />
      <div className='grid grid-cols-2 gap-4 p-4 border border-gray-500 border-dashed rounded-lg sm:grid-cols-4 lg:grid-cols-7'>
        {ColorsData.map(a => (
          <ColorsBox key={a.id} color={a.color} name={a.name} code={a.code} />
        ))}
      </div>

      <Topic name='Buttons' />
      <div className='grid grid-cols-1 gap-4 p-4 border border-gray-500 border-dashed rounded-lg sm:grid-cols-5'>
        <ButtonPrimary name='Button Primary' />
        <ButtonSecondary name='Button Secondary' />
        <ButtonTertiary name='Button Tertiary' />
        <InternalLink name='Internal Link' to='/design' />
        <ExternalLink name='External Link' to='/design' />
        <Link href='/desain'>
          <a
            className={` text-gray-700 border border-gray-500 pl-4 pr-1.5 py-2.5 sm:py-2 justify-between font-medium rounded-md  hover:bg-gray-200 flex `}
          >
            <div>Internal Link v2</div>
            <RightArrow />
          </a>
        </Link>
        <a
          href='/desain'
          target='_blank'
          className={` border border-gray-500 flex  font-medium hover:bg-gray-200 rounded-md pl-4 pr-2.5 py-2.5 sm:py-2 justify-between `}
        >
          <div className='text-gray-700'>External Link v2</div>
          <ArrowUpRight />
        </a>
      </div>

      <Topic name='Typography' />
      <div className='flex flex-col space-y-5 border border-gray-500 border-dashed rounded-lg'>
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-5'>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <ExternalLink name='Inter' to='https://fonts.google.com/specimen/Inter' />
          </div>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <ExternalLink name='Merriweather' to='https://fonts.google.com/specimen/Merriweather' />
          </div>
        </div>
        <div className='flex flex-col p-4 space-y-4'>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <Title name='Ini adalah contoh Title' />
          </div>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <SubTitle name='Ini adalah contoh SubTitle' />
          </div>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <Topic name='Ini adalah contoh Topic' />
          </div>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <SubTopic name=' Ini adalah contohSubTopic' />
          </div>
          <div className='p-2 border border-gray-500 border-dashed rounded-md'>
            <p className='text-gray-600'>
              Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf yang
              digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab. Ini
              adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf yang
              digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab. Ini
              adalah contoh paragraf yang digunakan di HarisLab.
            </p>
          </div>
        </div>
      </div>

      <Topic name='User Experience Principles' />
      <div className='grid grid-cols-1 gap-4 p-4 border border-gray-500 border-dashed rounded-lg sm:grid-cols-2 lg:grid-cols-3'>
        {UXData.map(a => (
          <div key={a.title} className='p-4 border border-gray-500 border-dashed rounded-md'>
            <SubTopic name={a.title} />
            <div className='mb-5 -mt-5 text-gray-500'>{a.description}</div>
          </div>
        ))}
      </div>

      <Topic name='Inspirasi' />
      <Inspirasi />
    </Layout>
  );
}

export const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-400'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.1} d='M9 5l7 7-7 7' />
    </svg>
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
