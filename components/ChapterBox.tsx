import Link from 'next/link';

export default function ChapterBox({ to, title }) {
  return (
    <Link href={to}>
      <a className='flex items-center justify-between w-full pl-2.5 pr-2 py-2.5 sm:py-2  xs:rounded-md bg-white hover:bg-gray-200  xs:shadow group hover:shadow-none overflow-hidden'>
        <div className='flex items-center space-x-1.5 overflow-hidden sm:justify-between '>
          <Folder />
          <p className='text-gray-700 truncate group-hover:text-gray-800'>{title}</p>
        </div>
        <RightArrow />
      </a>
    </Link>
  );
}

export const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-400 group-hover:text-gray-400'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.1} d='M9 5l7 7-7 7' />
    </svg>
  );
};

export const Folder = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-blue-400 group-hover:text-gray-500 fill-blue group-hover:fill-[#71717A]'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
      />
    </svg>
  );
};
