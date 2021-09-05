import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className='sticky bottom-0 z-10 block sm:hidden backdrop-filter backdrop-blur-lg'>
      <div className='grid grid-cols-5 bg-white bg-opacity-70 '>
        {BottomNavData.map(a => (
          <EachOfBottomNav key={a.title} to={a.to} svg={a.svg} title={a.title} />
        ))}
      </div>
    </div>
  );
}

const EachOfBottomNav = ({ to, svg, title }) => {
  return (
    <Link href={to}>
      <a className='z-40 flex flex-col items-center justify-center text-center  pb-1 pt-1.5 group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 text-gray-600 group-hover:text-harislab'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
        </svg>
        <div className='text-xs text-gray-500 group-hover:text-harislab'>{title}</div>
      </a>
    </Link>
  );
};

const BottomNavData = [
  {
    to: '/',
    svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Home',
  },
  {
    to: '/matematika',
    svg: 'M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8',
    title: 'Math',
  },
  { to: '/fisika', svg: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Physics' },
  {
    to: '/kalkulator',
    svg: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'Calculator',
  },
  {
    to: '/bimbel',
    svg: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    title: 'Tutor',
  },
];
