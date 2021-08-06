import { NBJ } from './Icons';
export default function Support() {
  return (
    <div className='mt-36'>
      <header className='mb-16 text-2xl font-bold text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 trns sm:text-4xl'>
        Dukung website ini melalui link berikut :
      </header>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {/* Saweria */}
        <div className='flex justify-center p-2 bg-[#faae2b] rounded-md hover:scale-95 duration-200 hover:bg-opacity-85'>
          <a
            href='https://www.saweria.co/harislab'
            target='_blank'
            className='flex items-center justify-center text-xl text-gray-50 font-mw'
          >
            Saweria
          </a>
        </div>
        {/* Trakteer */}
        <div className='flex justify-center px-2 py-4 duration-200 bg-red-600 rounded-md hover:scale-95 hover:bg-opacity-80'>
          <a
            href='https://trakteer.id/harits-syah/tip'
            target='_blank'
            className='flex items-center justify-center font-semibold text-md text-gray-50 font-inter'
          >
            {/* <img
              id='wse-buttons-preview'
              src='https://cdn.trakteer.id/images/embed/trbtn-red-5.jpg'
              alt='Trakteer Saya'
              className='h-10'
            /> */}
            Dukung saya di Trakteer
          </a>
        </div>
        {/* Nih Buat Jajan */}
        <div className='flex justify-center p-2 duration-200 bg-yellow-400 rounded-md hover:scale-95 hover:bg-opacity-80'>
          <a href='https://www.nihbuatjajan.com/harislab' target='_blank'>
            <NBJ />
          </a>
        </div>
      </div>
    </div>
  );
}
