import { InternalLink } from './Materi';

export default function InfoBox({ svg, name, description, color, to }) {
  return (
    <div className='flex flex-col justify-between px-4 pt-4 pb-2 space-y-2 bg-white rounded-lg shadow-md hover:shadow-xl'>
      <div className='flex flex-row-reverse items-center justify-between mb-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`w-6 h-6 ${color}`}
          // responsive="none"
          viewBox='0 0 24 24'
          stroke='currentColor'
          fill='#ffffff'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
        </svg>

        <div className='text-xl font-semibold leading-tight text-gray-700 '>{name}</div>
      </div>
      <div className='text-gray-500'>{description}</div>
      <InternalLink name='Selengkapnya' to={to} />
    </div>
  );
}
