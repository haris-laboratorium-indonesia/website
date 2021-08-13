import { NBJ } from './Icons';
export default function Support() {
  return (
    <div className='mt-36'>
      <header className='mb-16 text-2xl font-bold text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 trns sm:text-4xl'>
        Dukung website ini melalui link berikut :
      </header>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {/* Saweria */}
        <div className='flex justify-center p-2 bg-[#faae2b] rounded-lg  shadow-md hover:shadow-lg h-14 items-center hover:-translate-y-1 duration-300'>
          <a
            href='https://www.saweria.co/harislab'
            target='_blank'
            className='flex items-center justify-center text-xl text-gray-50 font-mw'
          >
            Saweria
          </a>
        </div>
        {/* Trakteer */}
        <div className='flex items-center justify-center px-2 py-4 duration-300 bg-red-600 rounded-lg shadow-md h-14 hover:shadow-lg hover:-translate-y-1'>
          <a
            href='https://trakteer.id/harits-syah/tip'
            target='_blank'
            className='flex items-center justify-center font-semibold text-md text-gray-50 font-inter'
          >
            Dukung saya di Trakteer
          </a>
        </div>
        {/* Nih Buat Jajan */}
        <div className='flex items-center justify-center p-2 duration-300 bg-yellow-400 rounded-lg shadow-md h-14 hover:shadow-lg hover:-translate-y-1'>
          <a href='https://www.nihbuatjajan.com/harislab' target='_blank'>
            <NBJ />
          </a>
        </div>
      </div>
    </div>
  );
}
