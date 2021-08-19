export default function Support() {
  return (
    <div className='mt-36'>
      <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
        Dukung kami. <span className='text-gray-500'>Melalui salah satu link berikut.</span>
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {/* Saweria */}
        <div className='py-2 pl-4 pr-3 bg-gray-200 rounded-lg hover:bg-gray-300'>
          <a
            href='https://www.saweria.co/harislab'
            target='_blank'
            className='flex items-center justify-between text-lg font-medium text-gray-700 font-inter'
          >
            <div>Saweria</div>
            <ArrowUpRight />
          </a>
        </div>
        {/* Trakteer */}
        <div className='py-2 pl-4 pr-3 bg-gray-200 rounded-lg hover:bg-gray-300'>
          <a
            href='https://trakteer.id/harits-syah/tip'
            target='_blank'
            className='flex items-center justify-between text-lg font-medium text-gray-700 font-inter'
          >
            <div>Trakteer</div>
            <ArrowUpRight />
          </a>
        </div>
        {/* Nih Buat Jajan */}
        <div className='py-2 pl-4 pr-3 bg-gray-200 rounded-lg hover:bg-gray-300'>
          <a
            href='https://www.nihbuatjajan.com/harislab'
            target='_blank'
            className='flex items-center justify-between text-lg font-medium text-gray-700 font-inter'
          >
            <div>Nih Buat Jajan</div>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

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
