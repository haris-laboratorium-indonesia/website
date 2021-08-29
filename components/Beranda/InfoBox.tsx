import Link from 'next/link';

import { HiChevronRight } from 'react-icons/hi';

const InfoBox = ({ svg, name, description, color, to }) => {
  return (
    <div className='flex flex-col justify-between px-4 pt-4 pb-2 space-y-3 bg-white rounded-lg shadow-md'>
      <div className='space-y-2'>
        <div className='flex flex-row-reverse justify-between mb-4'>
          {/* Icon */}
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`w-9 h-9 ${color}`}
              // responsive="none"
              viewBox='0 0 24 24'
              stroke='currentColor'
              fill='#ffffff'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
            </svg>
          </div>
          {/* Name */}
          <div>
            <div className='w-1/2 font-semibold leading-tight text-gray-700'>{name}</div>
          </div>
        </div>
        {/* description */}
        <div className='text-gray-600 '>{description}</div>
      </div>
      {/* Read more */}
      <Link href={to}>
        <a className='flex items-center space-x-1 text-blue-500 hover:text-harislab hover:underline'>
          <div className='mb-0.5'>Selengkapnya</div>
          <HiChevronRight className='w-5 h-5' />
        </a>
      </Link>
    </div>
  );
};

export default InfoBox;
