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
import { RightArrow } from '@/components/Icons';
import { UXData, ColorsData } from 'data/Design';
//ColorsBox
//ArrowUpRight

export default function Design() {
  return (
    <Layout browserTitle='Sistem Desain' description='Sistem Desain HarisLab'>
      <Title name='Sistem Desain' />
      <SubTitle name='Cara kami mendesain website ini agar informasi yang disampaikan mudah dipahami.' />

      <Topic name='Colors' />
      <div className='grid grid-cols-2 gap-4 p-4 border border-gray-400 border-dashed rounded-lg sm:grid-cols-4 lg:grid-cols-7'>
        {ColorsData.map(a => (
          <ColorsBox key={a.id} color={a.color} name={a.name} code={a.code} />
        ))}
      </div>

      <Topic name='Button' />
      <div className='grid grid-cols-1 gap-4 p-4 border border-gray-400 border-dashed rounded-lg sm:grid-cols-5'>
        <ButtonPrimary name='Button Primary' />
        <ButtonSecondary name='Button Secondary' />
        <ButtonTertiary name='Button Tertiary' />
        <InternalLink name='Internal Link' to='/design' />
        <ExternalLink name='External Link' to='/design' />
      </div>

      <Topic name='Typography' />
      <div className='flex flex-col space-y-5 border border-gray-400 border-dashed rounded-lg'>
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-5'>
          <ExternalLink name='Inter' to='https://fonts.google.com/specimen/Inter' />
          <ExternalLink name='Merriweather' to='https://fonts.google.com/specimen/Merriweather' />
        </div>
        <div className='p-5'>
          <Title name='Ini adalah contoh Title' />
          <SubTitle name='Ini adalah contoh SubTitle' />
          <Topic name='Ini adalah contoh Topic' />
          <SubTopic name=' Ini adalah contohSubTopic' />
          <p className='text-gray-600'>
            Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf yang
            digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah
            contoh paragraf yang digunakan di HarisLab. Ini adalah contoh paragraf yang digunakan di
            HarisLab. Ini adalah contoh paragraf yang digunakan di HarisLab. Ini adalah contoh
            paragraf yang digunakan di HarisLab.
          </p>
        </div>
      </div>

      <Topic name='User Experience Principles' />
      <div className='grid grid-cols-1 gap-4 p-4 border border-gray-500 border-dashed rounded-lg sm:grid-cols-2 lg:grid-cols-3'>
        {UXData.map(a => (
          <div key={a.title} className='p-4 border border-gray-400 border-dashed rounded-md'>
            <SubTopic name={a.title} />
            <div className='mb-5 -mt-5 text-gray-500'>{a.description}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const ColorsBox = ({ color, name, code }) => {
  return (
    <div className='flex flex-col space-y-1 '>
      <div className={`w-16 h-16 rounded-md ${color} drop-shadow-xl mb-1`}></div>
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
