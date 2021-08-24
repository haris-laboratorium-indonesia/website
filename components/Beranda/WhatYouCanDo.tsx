import Link from 'next/link';

export default function WhatYouCanDo({ title, svg, fitur, desc, to }) {
  return (
    <div
      className={`w-full px-4 pt-4 pb-3 duration-300 rounded-xl bg-white shadow-lg flex justify-between flex-col`}
    >
      <div>
        <div className='flex items-center justify-between mb-2'>
          <Link href='/#fitur'>
            <a className='text-2xl font-semibold text-gray-700'>{title}</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-7 h-7 text-rose-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={svg} />
          </svg>
        </div>
        <div className='mt-1 mb-6 text-gray-600 text-tiny'>{desc}</div>
      </div>
      <div>
        <div className='text-sm font-medium text-gray-500 mb-1.5'>Fitur</div>
        <ul>{fitur}</ul>
        <Link href={to}>
          <a className='flex items-center mt-2 space-x-2 cursor-pointer text-harislab hover:underline'>
            Selengkapnya
            <RightArrow />
          </a>
        </Link>
      </div>
    </div>
  );
}

export const FiturBox = ({ fitur }) => {
  return (
    <li className='items-center text-gray-700 list-disc list-inside text-tiny list-item'>
      {fitur}
    </li>
  );
};

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
