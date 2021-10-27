import Layout from '@/components/Layout';

export default function Showcase() {
  return (
    <Layout browserTitle='Showcase' description='Showcase'>
      <div className='flex items-center justify-center h-screen'>
        <a
          href='http://www.haritssr.vercel.app/showcase'
          target='_blank'
          className='flex items-center px-4 py-2 space-x-1 text-lg text-blue-600 duration-200 bg-white border border-blue-600 rounded-full hover:text-blue-600 hover:bg-blue-50 active:ring-2 active:ring-blue-400'
        >
          <span>See showcase</span> <ArrowUpRight />
        </a>
      </div>
    </Layout>
  );
}
const ArrowUpRight = () => {
  return (
    <svg
      className='w-5 h-5 text-blue-600'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
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
