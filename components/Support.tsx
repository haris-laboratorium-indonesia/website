export default function Support() {
  return (
    <div className='mt-36'>
      <header className='mb-16 text-2xl font-bold text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 trns sm:text-4xl'>
        Dukung website ini melalui link berikut :
      </header>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {/* Saweria */}
        <div className='flex items-center justify-center p-3 bg-gray-200 rounded-lg hover:bg-gray-300 '>
          <a
            href='https://www.saweria.co/harislab'
            target='_blank'
            className='flex items-center justify-center space-x-4 text-lg font-medium text-gray-700 font-inter'
          >
            <div>Saweria</div>
            <ExternalLink />
          </a>
        </div>
        {/* Trakteer */}
        <div className='flex items-center justify-center p-3 bg-gray-200 rounded-lg hover:bg-gray-300 '>
          <a
            href='https://trakteer.id/harits-syah/tip'
            target='_blank'
            className='flex items-center justify-center space-x-4 text-lg font-medium text-gray-700 font-inter'
          >
            <div>Trakteer</div>
            <ExternalLink />
          </a>
        </div>
        {/* Nih Buat Jajan */}
        <div className='flex items-center justify-center p-3 bg-gray-200 rounded-lg hover:bg-gray-300 '>
          <a
            href='https://www.nihbuatjajan.com/harislab'
            target='_blank'
            className='flex items-center justify-center space-x-4 text-lg font-medium text-gray-700 font-inter'
          >
            <div>Nih Buat Jajan</div>
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

const ExternalLink = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      />
    </svg>
  );
};
