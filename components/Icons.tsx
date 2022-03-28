import Link from 'next/link';

//4 tempat
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

export const Logo = () => {
  return (
    <svg viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5'>
      <path
        d='M0 64C0 41.5979 0 30.3968 4.35974 21.8404C8.19467 14.3139 14.3139 8.19467 21.8404 4.35974C30.3968 0 41.5979 0 64 0H236C258.402 0 269.603 0 278.16 4.35974C285.686 8.19467 291.805 14.3139 295.64 21.8404C300 30.3968 300 41.5979 300 64V100H0V64Z'
        fill='#1D4ED8'
      />
      <rect y='100' width='300' height='100' rx='1' fill='#3B82F6' />
      <path
        d='M0 200H300V236C300 258.402 300 269.603 295.64 278.16C291.805 285.686 285.686 291.805 278.16 295.64C269.603 300 258.402 300 236 300H64C41.5979 300 30.3968 300 21.8404 295.64C14.3139 291.805 8.19467 285.686 4.35974 278.16C0 269.603 0 258.402 0 236V200Z'
        fill='#93C5FD'
      />
    </svg>
  );
};

export const SearchIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-5 text-zinc-400 hover:text-white'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);
export const SearchIcon2 = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-4 h-4 text-zinc-400 hover:text-white'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

export const Account = () => {
  return (
    <Link href='/signup'>
      <a
        title='Login'
        className='rounded-full border border-zinc-600 hover:bg-zinc-700 p-1 hover:border-zinc-400 group'
      >
        <svg
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
          shapeRendering='geometricPrecision'
          className='text-zinc-400 group-hover:text-zinc-50 h-4 w-4'
        >
          <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
          <circle cx='12' cy='7' r='4' />
        </svg>
      </a>
    </Link>
  );
};

export const SearchIconButton = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-5 text-white'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

export const RightArrowChapterIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`w-6 h-6 text-zinc-400 group-hover:text-zinc-600`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.1} d='M9 5l7 7-7 7' />
    </svg>
  );
};

export const FolderIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`w-6 h-6 text-blue-400 fill-[#60a5fa]`}
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

export const InformasiUmumIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6  w-6 text-zinc-700'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
};

export const BabIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6  w-6 text-zinc-700'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      />
    </svg>
  );
};

export const Folder = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 fill-blue-500 stroke-blue-500 mr-1'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
      />
    </svg>
  );
};

export const File = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      className={className}
    >
      <path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' />
      <path d='M14 2v6h6' />
      <path d='M16 13H8' />
      <path d='M16 17H8' />
      <path d='M10 9H8' />
    </svg>
  );
};

export const ChevronBeforeFolder = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
    </svg>
  );
};

export const BookOpenIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      />
    </svg>
  );
};
