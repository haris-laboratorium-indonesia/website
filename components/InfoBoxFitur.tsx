import { InternalLink } from './Materi';
import Link from 'next/link';

export default function InfoBoxFitur({ svg, name, description, to, ResultOfTheAction }) {
  return (
    <div className='flex flex-col items-center justify-between px-4 py-6 space-y-2 bg-white rounded-lg shadow'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`w-8 h-8 text-gray-600`}
        // responsive="none"
        viewBox='0 0 24 24'
        stroke='currentColor'
        fill='#ffffff'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
      </svg>

      <div className='text-xl font-semibold leading-tight text-gray-700'>{name}</div>

      <div className='text-center text-gray-500'>{description}</div>

      <Link href={to}>
        <a className='flex items-center space-x-2 cursor-pointer text-harislab hover:underline'>
          {ResultOfTheAction}
          <RightArrow />
        </a>
      </Link>
    </div>
  );
}
const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
