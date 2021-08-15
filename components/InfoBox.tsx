import Link from 'next/link';

const InfoBox = ({ svg, name, description, color, borderColor, to }) => {
  return (
    <div className='px-2 sm:px-0'>
      {/* Icon */}
      <div className='pl-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`w-8 h-8 ${color}`}
          // responsive="none"
          viewBox='0 0 24 24'
          stroke='currentColor'
          fill='#ffffff'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
        </svg>
      </div>
      {/* Name */}
      <div className={`pl-3 mt-3 mb-2 border-l-[1.5px] ${borderColor}`}>
        <div className='font-semibold text-gray-800 '>{name}</div>
      </div>
      {/* description */}
      <div className='pl-3 text-gray-700'>{description}</div>
      {/* Read more */}
      <Link href={to}>
        <a className='pl-3 text-blue-500 hover:text-harislab hover:underline'>Baca lebih lanjut</a>
      </Link>
    </div>
  );
};

export default InfoBox;
