import Link from 'next/link';
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
} from '@/components/DesignSystem';
import { UXData, ColorsData } from 'data/Design';
import { ColorsBox } from '@/components/ColorBox';

export default function Design() {
  return (
    <Layout browserTitle='Design' description='Design HarisLab'>
      <Title name='Design System' />

      <div className='space-y-10'>
        <div>
          <Topic name='Colors' />
          <div className='grid grid-cols-2 gap-4 p-4 border border-gray-600 border-dashed rounded-lg sm:grid-cols-4 lg:grid-cols-7'>
            {ColorsData.map(a => (
              <ColorsBox key={a.id} color={a.color} name={a.name} code={a.code} />
            ))}
          </div>
        </div>

        <div>
          <Topic name='Buttons' />
          <div className='grid grid-cols-1 gap-4 p-4 border border-gray-600 border-dashed rounded-lg sm:grid-cols-5'>
            <ButtonPrimary name='Button Primary' />
            <ButtonSecondary name='Button Secondary' />
            <ButtonTertiary name='Button Tertiary' />
            <InternalLink name='Internal Link' to='/design' />
            <ExternalLink name='External Link' to='/design' />
            <Link href='/desain'>
              <a
                className={` text-gray-700 border border-gray-600 pl-4 pr-1.5 py-2.5 sm:py-2 justify-between font-medium rounded-md  hover:bg-zinc-200 flex `}
              >
                <div>Internal Link v2</div>
                <RightArrow />
              </a>
            </Link>
            <a
              href='/desain'
              target='_blank'
              className={` border border-gray-600 flex  font-medium hover:bg-gray-200 rounded-md pl-4 pr-2.5 py-2.5 sm:py-2 justify-between `}
            >
              <div className='text-gray-700'>External Link v2</div>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div>
          <Topic name='Typography' />
          <div className='flex flex-col border border-gray-600 border-dashed rounded-lg'>
            <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-5'>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <ExternalLink name='Inter' to='https://fonts.google.com/specimen/Inter' />
              </div>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <ExternalLink
                  name='Merriweather'
                  to='https://fonts.google.com/specimen/Merriweather'
                />
              </div>
            </div>
            <div className='flex flex-col px-4 pb-4 space-y-4'>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <Title name='Ini adalah contoh Title' />
              </div>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <SubTitle name='Ini adalah contoh SubTitle' />
              </div>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <Topic name='Ini adalah contoh Topic' />
              </div>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <SubTopic name=' Ini adalah contohSubTopic' />
              </div>
              <div className='p-2 border border-gray-600 border-dashed rounded-md'>
                <p className='text-gray-600'>
                  Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf
                  yang digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab.
                  Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf
                  yang digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab.
                  Ini adalah contoh paragraf yang digunakan di HarisLab.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Topic name='Human Experience Principles on Digital Technology' />
          <div className='grid grid-cols-1 gap-10 p-4 border border-gray-600 border-dashed rounded-lg xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            {UXData.map(a => (
              <div key={a.title} className=''>
                <SubTopic name={a.title} />
                <div className='text-gray-600'>{a.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
